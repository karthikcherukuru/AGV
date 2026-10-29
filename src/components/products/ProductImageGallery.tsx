"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductImageGallery({ product, index, onChange, large = false }: { product: Product; index: number; onChange: (index: number) => void; large?: boolean }) {
  const [previous, setPrevious] = useState<number | null>(null);
  const [ready, setReady] = useState(true);
  function select(direction: number) {
    setPrevious(index);
    setReady(false);
    onChange((index + direction + product.images.length) % product.images.length);
  }
  const sizes = large ? "(max-width: 767px) 90vw, 55vw" : "(max-width: 1023px) 90vw, (max-width: 1546px) 45vw, 710px";
  return (
    <div className="product-gallery">
      <div className="product-gallery-stage">
        {previous !== null ? <Image src={product.images[previous].src} alt="" fill sizes={sizes} className="product-photo" aria-hidden="true" /> : null}
        <Image key={index} src={product.images[index].src} alt={`${product.name}: ${product.images[index].view}`} fill sizes={sizes} className="product-photo product-photo-current" style={{ opacity: ready ? 1 : 0 }} onLoad={() => setReady(true)} />
      </div>
      <div className="product-gallery-controls">
        <span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {String(product.images.length).padStart(2, "0")}</span>
        <div>
          <button type="button" aria-label={`Previous image of ${product.name}`} onClick={() => select(-1)}><ArrowLeft size={17} aria-hidden="true" /></button>
          <button type="button" aria-label={`Next image of ${product.name}`} onClick={() => select(1)}><ArrowRight size={17} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
