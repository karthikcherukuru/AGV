import type { CSSProperties } from "react";
import Image from "next/image";

type MediaFrameProps = {
  label: string;
  detail?: string;
  description?: string;
  tone?: "charcoal" | "graphite" | "mid" | "soft";
  aspect?: number;
  className?: string;
  src?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

/** Static media footprint, ready for real imagery in a later phase. */
export function MediaFrame({ label, detail, description, tone = "charcoal", aspect, className = "", src, imageAlt, imageFit = "cover" }: MediaFrameProps) {
  return (
    <div
      className={`media-frame media-frame--${tone} ${className}`}
      style={aspect ? { "--media-aspect": aspect } as CSSProperties : undefined}
      role="img"
      aria-label={src ? imageAlt ?? label : description ?? `${label}${detail ? `, ${detail}` : ""}. Grayscale image placeholder.`}
    >
      {src ? <Image src={src} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw" className={`media-photo media-photo--${imageFit}`} /> : null}
      {!src ? <span className="media-label" aria-hidden="true">
        <span>{label}</span>
        {detail ? <span className="media-detail">{detail}</span> : null}
      </span> : null}
    </div>
  );
}
