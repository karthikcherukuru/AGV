"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { navigation } from "@/data/siteContent";
import { BrandLogo } from "./BrandLogo";

export function FullscreenNavigation() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => {
      if (dialog?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  function openMenu() {
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    document.body.style.overflow = previousOverflow.current;
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" className="menu-trigger" aria-label="Open navigation" aria-expanded={isOpen} aria-controls="site-navigation" onClick={openMenu}>
        <span className="menu-trigger__label">Menu</span>
        <span className="hamburger" aria-hidden="true"><span /><span /></span>
      </button>
      <dialog
        ref={dialogRef}
        id="site-navigation"
        className="fullscreen-navigation"
        aria-labelledby="navigation-title"
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onClose={() => { document.body.style.overflow = previousOverflow.current; setIsOpen(false); }}
      >
        <div className="navigation-top">
          <div><BrandLogo /><span id="navigation-title" className="sr-only">AGV navigation</span></div>
          <button type="button" className="circle-control navigation-close" aria-label="Close navigation" onClick={closeMenu}>
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Full-screen navigation" className="navigation-links">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu} style={{ "--link-index": index } as CSSProperties}>
              <span>{item.label}</span><ArrowUpRight strokeWidth={1.2} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className="navigation-note">Unofficial portfolio concept</p>
      </dialog>
    </>
  );
}
