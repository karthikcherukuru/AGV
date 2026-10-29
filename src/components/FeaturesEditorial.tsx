import { copy } from "@/data/siteContent";
import { MediaFrame } from "./MediaFrame";
import { FeatureProductBanner } from "./FeatureProductBanner";

export function FeaturesEditorial() {
  return (
    <section id="features" className="features-editorial page-frame section-space" aria-labelledby="features-title" data-page-region="features">
      <div className="features-intro">
        <p className="eyebrow">Features</p>
        <h2 id="features-title" className="section-title">DESIGNED FOR<br />THE EDGE.</h2>
        <p className="body-copy">{copy.features}</p>
      </div>
      <div className="features-pair">
        <MediaFrame label="LIFESTYLE" detail="RIDER / HELMET" className="rider-media" tone="graphite" src="/images/hero/Red%20Smoke%20Racing%20Portrait.png" imageAlt="Racing rider wearing an AGV helmet in red studio lighting" />
        <FeatureProductBanner />
      </div>
    </section>
  );
}
