import { BrandLogo } from "./BrandLogo";
import { navigation } from "@/data/siteContent";
import { FullscreenNavigation } from "./FullscreenNavigation";

export function SiteHeader() {
  return (
    <header className="site-header flex items-center justify-between">
      <a href="#home" className="brand-emblem" aria-label="AGV home"><BrandLogo /></a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <FullscreenNavigation />
    </header>
  );
}
