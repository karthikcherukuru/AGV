import { copy } from "@/data/siteContent";
import { MediaFrame } from "./MediaFrame";
import { JoinedPillArrow } from "./JoinedPillArrow";

export function SignatureSpotlight() {
  return (
    <section id="helmet" className="spotlight-section page-frame section-space" aria-labelledby="spotlight-title" data-page-region="spotlight">
      <div className="spotlight-card">
        <div className="spotlight-intro">
          <div><p className="eyebrow">AGV / Performance</p><h2 id="spotlight-title" className="section-title">NOT JUST SPEED.<br />A FEELING.</h2></div>
          <p className="body-copy">{copy.spotlight}</p>
        </div>
        <div className="spotlight-media-shell">
          <MediaFrame label="HELMET SPOTLIGHT" detail="PISTA GP RR / STUDIO VIEW" className="spotlight-media" tone="graphite" src="/images/hero/Red%20Smoke%20Racing%20Portrait.png" imageAlt="Racing rider wearing a white AGV helmet in red studio lighting" />
          <div className="spotlight-cta-notch"><JoinedPillArrow href="#faq" filled>Explore the helmet</JoinedPillArrow></div>
        </div>
      </div>
    </section>
  );
}
