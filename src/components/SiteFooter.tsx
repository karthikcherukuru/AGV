import { ArrowUp } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-page-region="footer">
      <div className="page-frame footer-inner">
        <div className="footer-identity"><a href="#home" aria-label="AGV home"><BrandLogo /></a><p>Form. Focus. Motion.<br /><span>Independent portfolio concept.</span></p></div>
        <nav className="footer-links" aria-label="Explore"><h2>Explore</h2><a href="#collection">Collection</a><a href="#about">About</a><a href="#gallery">Details</a><a href="#faq">Questions</a></nav>
        <nav className="footer-links" aria-label="Follow"><h2>Follow</h2><a href="https://www.instagram.com/agvhelmets" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/AGVhelmets/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.youtube.com/channel/UCfbxWBQCgVy1IJSEvaKJZpA" target="_blank" rel="noreferrer">YouTube</a></nav>
        <div className="footer-bottom"><p>© AGV concept<br /><span>Unofficial portfolio concept</span></p><a href="#home" className="circle-control back-to-top" aria-label="Back to top"><ArrowUp size={19} strokeWidth={1.5} aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
