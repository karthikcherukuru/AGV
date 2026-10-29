import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseURL = process.env.AGV_BASE_URL ?? "http://127.0.0.1:3000";
const outputDirectory = path.resolve("screenshots/phase-01");
await mkdir(outputDirectory, { recursive: true });
let browser;
try {
  browser = await chromium.launch({ channel: "chrome", headless: true, chromiumSandbox: true });
} catch (error) {
  await writeFile(path.join(outputDirectory, "verification-results.json"), JSON.stringify({
    baseURL, status: "BLOCKED", error: error.message.split("\n")[0], screenshots: [],
  }, null, 2) + "\n");
  console.error(`Browser verification blocked: ${error.message.split("\n")[0]}`);
  process.exit(1);
}
const results = { baseURL, browser: await browser.version(), viewports: [], interactions: [], errors: [] };
const failures = [];

function check(condition, message) { assert.ok(condition, message); }
async function verify(name, run) {
  try { await run(); results.interactions.push({ name, status: "PASS" }); console.log(`PASS ${name}`); }
  catch (error) { failures.push(`${name}: ${error.message}`); results.interactions.push({ name, status: "FAIL", error: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}

try {
  for (const width of [360, 375, 390, 430, 768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: width < 768 ? 844 : 900 }, deviceScaleFactor: 1 });
    page.on("pageerror", error => results.errors.push({ width, type: "pageerror", message: error.message }));
    page.on("console", message => { if (message.type() === "error") results.errors.push({ width, type: "console", message: message.text() }); });
    page.on("response", response => { if (response.status() >= 400 && response.url().startsWith(baseURL)) results.errors.push({ width, type: "http", message: `${response.status()} ${response.url()}` }); });
    const response = await page.goto(baseURL, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const measurements = await page.evaluate(() => {
      const rect = selector => {
        const element = document.querySelector(selector);
        const box = element.getBoundingClientRect();
        return { x: box.x, y: box.y, width: box.width, height: box.height, right: box.right, bottom: box.bottom };
      };
      const titles = [...document.querySelectorAll(".section-title")].map(element => {
        const range = document.createRange();
        range.selectNodeContents(element);
        const lines = [...range.getClientRects()].filter(box => box.width > 1);
        return { text: element.textContent, lineCount: new Set(lines.map(box => Math.round(box.y))).size, clipped: lines.some(box => box.right > element.getBoundingClientRect().right + 1) };
      });
      return {
        viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth,
        regions: [...document.querySelectorAll("[data-page-region]")].map(element => element.dataset.pageRegion),
        hero: rect(".hero-media-shell"), inset: rect(".hero-inset"), heroArrow: rect(".hero-arrow"),
        about: rect("#about"), aboutImage: rect(".about-media"), aboutCopy: rect(".about-copy"),
        gallery: rect("#gallery"), galleryMain: rect(".gallery-main"), thumbs: [...document.querySelectorAll(".gallery-thumbnail")].map(element => { const b=element.getBoundingClientRect(); return { x:b.x,y:b.y,width:b.width,height:b.height }; }),
        rider: rect(".rider-media"), product: rect(".feature-product"),
        spotlight: rect(".spotlight-card"), spotlightMedia: rect(".spotlight-media-shell"), spotlightCTA: rect(".spotlight-cta-notch"),
        faqImage: rect(".faq-media"), faqAnswer: rect(".faq-answer"), faqList: rect(".faq-list"),
        faqRows: [...document.querySelectorAll(".faq-row")].map(element => element.getBoundingClientRect().height),
        titles,
      };
    });
    const fileName = `${width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop"}-${width}.png`;
    await page.screenshot({ path: path.join(outputDirectory, fileName), fullPage: true, animations: "disabled" });
    results.viewports.push({ width, httpStatus: response.status(), screenshot: fileName, measurements });

    await verify(`layout at ${width}px`, async () => {
      assert.equal(response.status(), 200);
      check(measurements.scrollWidth <= width + 1, `Horizontal overflow: ${measurements.scrollWidth} > ${width}`);
      assert.deepEqual(measurements.regions, ["hero", "about", "gallery", "features", "spotlight", "faq", "footer"]);
      assert.equal(measurements.thumbs.length, 4);
      check(measurements.faqRows.every(height => height >= 44), "FAQ touch target below 44px");
      check(measurements.titles.every(title => title.lineCount === 2 && !title.clipped), `Incorrect heading lines: ${JSON.stringify(measurements.titles)}`);
      if (width < 768) {
        check(Math.abs(measurements.hero.width / measurements.hero.height - 0.9) < 0.01, "Mobile hero aspect ratio");
        check(Math.abs(measurements.inset.width / measurements.hero.width - 0.38) < 0.01, "Mobile inset width");
        check(measurements.aboutCopy.y >= measurements.aboutImage.bottom, "About paragraph must follow image");
        check(measurements.thumbs.every(thumb => Math.abs(thumb.y - measurements.thumbs[0].y) < 1), "Mobile thumbnail rail must be horizontal");
        check(measurements.product.y >= measurements.rider.bottom, "Mobile rider must precede banner");
        check(measurements.product.height >= 130 && measurements.product.height <= 175, "Banner height outside target");
        check(measurements.faqImage.bottom <= measurements.faqAnswer.y && measurements.faqAnswer.bottom <= measurements.faqList.y + 1, "Mobile FAQ photo / answer / list ordering");
      } else if (width >= 1024) {
        check(Math.abs(measurements.hero.width / measurements.hero.height - 2.5) < 0.01, "Desktop hero aspect ratio");
        check(measurements.gallery.x > measurements.about.x, "Desktop gallery must be right of About");
        check(measurements.thumbs.every(thumb => Math.abs(thumb.x - measurements.thumbs[0].x) < 1), "Desktop thumbnail rail must be vertical");
        check(measurements.thumbs[0].x >= measurements.galleryMain.right, "Thumbnail rail must be right of image");
        check(measurements.product.x < measurements.rider.x && Math.abs(measurements.product.height - measurements.rider.height) < 1, "Desktop feature pair position or height");
        check(measurements.faqList.x > measurements.faqAnswer.x, "Desktop FAQ list must be right of answer");
      }
      check(measurements.heroArrow.x > measurements.hero.x + measurements.hero.width / 2 && measurements.heroArrow.y < measurements.hero.y + 80, "Hero arrow must be upper-right");
      check(Math.abs(measurements.spotlightCTA.right - measurements.spotlightMedia.right) < 3 && Math.abs(measurements.spotlightCTA.bottom - measurements.spotlightMedia.bottom) < 3, "Spotlight CTA must be lower-right");
    });

    if ([390, 1440].includes(width)) {
      await verify(`navigation, keyboard and scroll lock at ${width}px`, async () => {
        const trigger = page.getByRole("button", { name: "Open navigation" });
        await trigger.click();
        await page.waitForFunction(() => document.querySelector("dialog").open);
        assert.equal(await trigger.getAttribute("aria-expanded"), "true");
        assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
        const close = page.getByRole("button", { name: "Close navigation" });
        await close.focus();
        await page.keyboard.press("Shift+Tab");
        check(await page.evaluate(() => document.activeElement.getAttribute("href") === "#faq"), "Focus must wrap to last navigation link");
        await page.keyboard.press("Tab");
        check(await close.evaluate(element => element === document.activeElement), "Focus must wrap back to close button");
        await page.screenshot({ path: path.join(outputDirectory, `navigation-${width}.png`), animations: "disabled" });
        await page.keyboard.press("Escape");
        await page.waitForFunction(() => !document.querySelector("dialog").open);
        check(await trigger.evaluate(element => element === document.activeElement), "Escape must restore trigger focus");
        assert.equal(await page.evaluate(() => document.body.style.overflow), "");
        await trigger.click();
        await page.getByRole("navigation", { name: "Full-screen navigation" }).getByRole("link", { name: "Features", exact: true }).click();
        await page.waitForFunction(() => location.hash === "#features" && !document.querySelector("dialog").open);
        assert.equal(await trigger.getAttribute("aria-expanded"), "false");
        await page.waitForFunction(() => Math.abs(document.querySelector("#features").getBoundingClientRect().top - 24) < 3);
      });

      await verify(`four gallery selections at ${width}px`, async () => {
        const stage = await page.locator(".gallery-main").boundingBox();
        const buttons = page.locator(".gallery-thumbnail");
        for (let index = 0; index < 4; index++) {
          await buttons.nth(index).click();
          assert.equal(await buttons.nth(index).getAttribute("aria-pressed"), "true");
          assert.equal(await page.locator('.gallery-thumbnail[aria-pressed="true"]').count(), 1);
          const updated = await page.locator(".gallery-main").boundingBox();
          check(Math.abs(updated.height - stage.height) < 1 && Math.abs(updated.width - stage.width) < 1, "Gallery geometry changed");
        }
        await page.getByRole("button", { name: "Show next helmet detail" }).click();
        assert.equal(await buttons.nth(0).getAttribute("aria-pressed"), "true");
      });

      await verify(`FAQ initial state and all five answers at ${width}px`, async () => {
        assert.equal(await page.locator('.faq-row[aria-expanded="true"]').getAttribute("id"), "faq-question-design");
        const initialList = await page.locator(".faq-list").boundingBox();
        for (let index = 0; index < 5; index++) {
          const row = page.locator(".faq-row").nth(index);
          await row.click();
          assert.equal(await row.getAttribute("aria-expanded"), "true");
          assert.equal(await page.locator(".faq-active-index").textContent(), `/0${index + 1}`);
          assert.equal(await page.locator('.faq-row[aria-expanded="true"]').count(), 1);
          const current = await page.locator(".faq-list").boundingBox();
          check(Math.abs(initialList.y - current.y) < 1, "FAQ selection shifted question list");
        }
        await page.locator(".faq-row").nth(2).click();
      });

      await verify(`CTA destinations, back to top and reduced motion at ${width}px`, async () => {
        const anchors = await page.locator('a[href^="#"]').evaluateAll(elements => elements.map(element => ({ href: element.getAttribute("href"), exists: Boolean(document.getElementById(element.getAttribute("href").slice(1))) })));
        check(anchors.every(anchor => anchor.exists), "A section link has no target");
        for (const selector of [".hero-arrow", ".about-editorial .joined-cta", ".compact-link", ".spotlight-cta-notch .joined-cta"]) {
          const link = page.locator(selector);
          const hash = await link.getAttribute("href");
          await link.click();
          await page.waitForFunction(expected => location.hash === expected, hash);
        }
        await page.emulateMedia({ reducedMotion: "reduce" });
        assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
        await page.getByRole("link", { name: "Back to top" }).click();
        await page.waitForFunction(() => scrollY < 2);
        await page.getByRole("button", { name: "Open navigation" }).focus();
        check(await page.getByRole("button", { name: "Open navigation" }).evaluate(element => getComputedStyle(element).outlineStyle !== "none"), "Keyboard focus indicator missing");
        await page.getByRole("button", { name: "Open navigation" }).click();
        const duration = await page.locator(".navigation-links a").first().evaluate(element => getComputedStyle(element).animationDuration);
        check(parseFloat(duration) <= 0.001, `Reduced-motion navigation animation: ${duration}`);
        await page.keyboard.press("Escape");
      });
    }
    await page.close();
  }
  await verify("no browser console, runtime or HTTP errors", async () => assert.deepEqual(results.errors, []));
} finally {
  await browser.close();
  results.failures = failures;
  await writeFile(path.join(outputDirectory, "verification-results.json"), JSON.stringify(results, null, 2) + "\n");
}

if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
else console.log(`All ${results.interactions.length} browser checks passed. Screenshots: ${outputDirectory}`);
