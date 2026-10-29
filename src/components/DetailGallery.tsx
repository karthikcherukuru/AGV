"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "@/data/siteContent";
import { MediaFrame } from "./MediaFrame";

export function DetailGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = galleryItems[selectedIndex];

  return (
    <section id="gallery" className="detail-gallery" aria-label="Helmet detail gallery" data-page-region="gallery">
      <div className="gallery-stage">
        <div id="gallery-media" aria-live="polite" aria-atomic="true" className="gallery-main">
          <MediaFrame label="DETAIL GALLERY" detail={selected.media} tone={selected.tone} src={selected.image} imageAlt={selected.label} imageFit={selected.fit} />
        </div>
        <button type="button" className="circle-control gallery-next" aria-label="Show next helmet detail" onClick={() => setSelectedIndex(index => (index + 1) % galleryItems.length)}>
          <ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
      <div className="gallery-thumbnails" role="group" aria-label="Choose a helmet detail">
        {galleryItems.map((item, index) => (
          <button key={item.id} type="button" className={`gallery-thumbnail gallery-thumbnail--${item.tone}`} aria-label={`View ${item.label.toLowerCase()}`} aria-pressed={index === selectedIndex} aria-controls="gallery-media" onClick={() => setSelectedIndex(index)}>
            <span className="gallery-thumbnail-photo" aria-hidden="true" style={{ backgroundImage: `url("${item.image}")` }} />
            <span className="gallery-thumbnail-index" aria-hidden="true">0{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
