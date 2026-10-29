import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const baseURL = process.env.AGV_BASE_URL ?? "http://127.0.0.1:3000";
const directory = "screenshots/phase-02c";
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
try {
  for (const width of [375, 390, 430, 768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: width < 768 ? 844 : 1000 } });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("response", response => { if (response.status() >= 400 && response.url().startsWith(baseURL)) errors.push(`${response.status()} ${response.url()}`); });
    assert.equal((await page.goto(baseURL, { waitUntil: "networkidle" })).status(), 200);
    await page.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map(image => image.decode().catch(() => undefined)));
    });
    const geometry = await page.evaluate(() => {
      const rect = selector => { const b = document.querySelector(selector).getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; };
      return { scrollWidth: document.documentElement.scrollWidth, cards: [...document.querySelectorAll(".collection-card")].map(e => {const b=e.getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,height:b.height};}), logo: rect(".brand-emblem .brand-logo"), footer: rect(".site-footer"), missing: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src), giant: document.querySelectorAll(".footer-wordmark, .hero-wordmark").length };
    });
    assert.equal(geometry.cards.length, 2);
    assert.ok(geometry.scrollWidth <= width);
    assert.equal(geometry.giant, 0);
    assert.deepEqual(geometry.missing, []);
    assert.ok(Math.abs(geometry.logo.width / geometry.logo.height - 372 / 374) < 0.01);
    if (width >= 1024) { assert.ok(Math.abs(geometry.cards[0].y - geometry.cards[1].y) < 1); assert.ok(Math.abs(geometry.cards[0].height - geometry.cards[1].height) < 1); }
    else assert.ok(geometry.cards[1].y > geometry.cards[0].y + geometry.cards[0].height);
    if ([390, 1440].includes(width)) {
      const label = width === 390 ? "mobile" : "desktop";
      await page.evaluate(() => document.activeElement?.blur());
      await page.locator("#collection").screenshot({ path: `${directory}/collection-${label}-${width}.png` });
      await page.locator(".site-header").screenshot({ path: `${directory}/header-${label}.png` });
      await page.locator(".site-footer").screenshot({ path: `${directory}/footer-${label}.png` });
      await page.screenshot({ path: `${directory}/full-${label}-${width}.png`, fullPage: true });
      const cards = page.locator(".collection-card");
      const first = cards.nth(0), second = cards.nth(1);
      const otherSource = await second.locator(".product-photo-current").getAttribute("src");
      await first.getByRole("button", { name: "Next image of HELMET 01", exact: true }).click();
      await first.locator(".product-photo-current").evaluate(i => i.decode());
      assert.equal(await second.locator(".product-photo-current").getAttribute("src"), otherSource);
      assert.ok((await first.locator(".product-photo-current").getAttribute("src")).includes("helmet_1"));
      await first.getByRole("button", { name: "Explore HELMET 01", exact: true }).click();
      const dialog = page.locator(".product-quick-view[open]");
      assert.equal(await dialog.count(), 1);
      assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
      await dialog.getByRole("button", { name: "Next image of HELMET 01", exact: true }).click();
      await dialog.locator(".product-photo-current").evaluate(i => i.decode());
      await dialog.screenshot({ path: `${directory}/quick-view-${label}.png` });
      await page.keyboard.press("Escape");
      assert.equal(await page.locator(".product-quick-view[open]").count(), 0);
      assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-label")), "Explore HELMET 01");
      assert.equal(await page.evaluate(() => document.body.style.overflow), "");
      await second.getByRole("button", { name: "Explore HELMET 02", exact: true }).click();
      assert.ok((await page.locator(".product-quick-view[open] .product-photo-current").getAttribute("src")).includes("helmet_2"));
      await page.keyboard.press("Escape");
      await page.getByRole("button", { name: "Open navigation", exact: true }).click();
      assert.equal(await page.locator("#site-navigation").evaluate(d => d.open), true);
      await page.keyboard.press("Escape");
      assert.equal(await page.getByRole("button", { name: "Open navigation", exact: true }).getAttribute("aria-expanded"), "false");
      await page.locator(".gallery-next").click();
      await page.locator(".faq-row").nth(1).click();
      assert.equal(await page.locator(".faq-row").nth(1).getAttribute("aria-expanded"), "true");
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.getByRole("link", { name: "Back to top", exact: true }).click();
      await page.waitForFunction(() => scrollY < 25);
    }
    assert.deepEqual(errors, []);
    results.push({ width, status: "PASS", geometry });
    console.log(`PASS ${width}px: layout, images${[390,1440].includes(width) ? ", galleries, quick views, menu, FAQ and back-to-top" : ""}`);
    await page.close();
  }
} finally {
  await writeFile(`${directory}/verification-results.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
