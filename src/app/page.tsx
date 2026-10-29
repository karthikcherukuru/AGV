import { HeroMedia } from "@/components/HeroMedia";
import { AboutEditorial } from "@/components/AboutEditorial";
import { DetailGallery } from "@/components/DetailGallery";
import { FeaturesEditorial } from "@/components/FeaturesEditorial";
import { SignatureSpotlight } from "@/components/SignatureSpotlight";
import { FaqExperience } from "@/components/FaqExperience";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCollection } from "@/components/products/ProductCollection";

export default function Home() {
  return (
    <>
      <main>
        <HeroMedia />
        <div className="about-gallery page-frame section-space"><AboutEditorial /><DetailGallery /></div>
        <FeaturesEditorial />
        <ProductCollection />
        <SignatureSpotlight />
        <FaqExperience />
      </main>
      <SiteFooter />
    </>
  );
}
