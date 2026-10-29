import { ArrowUpRight } from "lucide-react";

export function JoinedPillArrow({ href, children, filled = false, className = "" }: {
  href: string;
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`joined-cta ${filled ? "joined-cta--filled" : ""} ${className}`}>
      <span className="joined-cta__label">{children}</span>
      <span className="joined-cta__circle" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.5} /></span>
    </a>
  );
}
