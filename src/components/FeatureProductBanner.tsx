import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "./MediaFrame";

export function FeatureProductBanner() {
  return (
    <article className="feature-product" aria-labelledby="product-title">
      <MediaFrame label="HELMET" detail="PRODUCT PROFILE" className="feature-product-media" tone="soft" src="/images/products/helmet_1/image%20(5).webp" imageAlt="AGV helmet in a blue, yellow and red graphic finish, side profile" imageFit="contain" />
      <div className="feature-product-copy">
        <h3 id="product-title">PISTA GP RR</h3>
        <p>A study in racing form.<br />Every detail in focus.</p>
        <a href="#helmet" className="compact-link">Explore AGV <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></a>
      </div>
    </article>
  );
}
