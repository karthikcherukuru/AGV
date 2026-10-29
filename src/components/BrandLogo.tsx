import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return <Image className={`brand-logo ${className}`} src="/images/logo/Agv_motorsports_logo.svg" alt="AGV" width={372} height={374} unoptimized />;
}
