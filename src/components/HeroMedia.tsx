import Image from "next/image";
import { CornerNotch } from "./CornerNotch";
import { SiteHeader } from "./SiteHeader";

export function HeroMedia() {
  return (
    <section id="home" className="hero-section page-frame" aria-label="AGV racing helmet concept" data-page-region="hero">
      <SiteHeader />
      <div className="hero-media-shell">
        <div className="media-frame hero-main" role="img" aria-label="AGV helmet photography">
          <picture className="hero-picture">
            <source media="(max-width: 767px)" srcSet="/images/hero/Vibrant%20Mosaic%20AGV%20Helmet.png" />
            <Image
              className="hero-photo"
              src="/images/hero/AGV%20K7%20Helmets_%20Your%20World,%20Your%20Ride.png"
              alt=""
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1023px) calc(100vw - 56px), 1450px"
              decoding="async"
            />
          </picture>
        </div>
        <CornerNotch />
        <div className="hero-inset">
          <Image
            className="hero-detail-photo"
            src="/images/hero/Neon%20Claw%20Racing%20Helmet.png"
            alt="AGV racing helmet with a white, red and green graphic finish"
            fill
            sizes="(max-width: 767px) 38vw, (max-width: 1023px) 25vw, 19vw"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
