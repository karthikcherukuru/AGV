"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductImageGallery } from "./ProductImageGallery";

export function ProductCard({ product, number }: { product: Product; number: number }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const overflow = useRef("");
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (isOpen) dialog.current?.querySelector<HTMLButtonElement>(".quick-view-close")?.focus(); }, [isOpen]);
  useEffect(() => {
    const element = dialog.current;
    return () => { if (element?.open) document.body.style.overflow = overflow.current; };
  }, []);
  function open() {
    overflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setIsOpen(true);
    dialog.current?.showModal();
  }
  function close() { dialog.current?.close(); }
  function restore() {
    document.body.style.overflow = overflow.current;
    setIsOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  return (
    <article className="collection-card" aria-labelledby={`${product.id}-title`}>
      <ProductImageGallery product={product} index={index} onChange={setIndex} />
      <div className="collection-card-copy">
        <p className="product-index">{String(number).padStart(2, "0")} / HELMET</p>
        <h3 id={`${product.id}-title`}>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <button ref={trigger} type="button" className="product-explore" onClick={open} aria-haspopup="dialog" aria-label={`Explore ${product.name}`}>
          <span>Explore helmet</span><span className="product-explore-arrow"><ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></span>
        </button>
      </div>
      <dialog ref={dialog} className="product-quick-view" aria-labelledby={`${product.id}-quick-title`} onCancel={event => { event.preventDefault(); close(); }} onClose={restore} onClick={event => { if (event.target === event.currentTarget) close(); }}>
        {isOpen ? <div className="quick-view-inner">
          <button type="button" className="quick-view-close circle-control" aria-label="Close product view" onClick={close}><X size={20} aria-hidden="true" /></button>
          <ProductImageGallery product={product} index={index} onChange={setIndex} large />
          <div className="quick-view-copy"><p className="product-index">{String(number).padStart(2, "0")} / THE COLLECTION</p><h2 id={`${product.id}-quick-title`}>{product.name}</h2><p>{product.description}</p><p className="quick-view-note">Independent portfolio study. Product identifiers are temporary.</p></div>
        </div> : null}
      </dialog>
    </article>
  );
}
