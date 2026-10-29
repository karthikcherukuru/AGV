import { copy } from "@/data/siteContent";
import { MediaFrame } from "./MediaFrame";
import { JoinedPillArrow } from "./JoinedPillArrow";

export function AboutEditorial() {
  return (
    <section id="about" className="about-editorial" aria-labelledby="about-title" data-page-region="about">
      <p className="eyebrow">About AGV</p>
      <h2 id="about-title" className="section-title">NOT JUST A HELMET.<br />A FEELING.</h2>
      <MediaFrame label="ABOUT" detail="HELMET MATERIAL DETAIL" className="about-media" tone="graphite" src="/images/product_material.jpg" imageAlt="Close-up of woven carbon fiber helmet material" />
      <p className="body-copy about-copy">{copy.about}</p>
      <JoinedPillArrow href="#features">Discover AGV</JoinedPillArrow>
    </section>
  );
}
