import { ArrowDownRight } from "lucide-react";

export function CornerNotch() {
  return (
    <div className="corner-notch">
      <a href="#about" className="circle-control hero-arrow" aria-label="Discover AGV, go to About">
        <ArrowDownRight size={22} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  );
}
