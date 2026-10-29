import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGV | Racing in Form",
  description: "An unofficial AGV portfolio concept. A structural study of racing helmet form, focus and detail.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#about">Skip to content</a>{children}</body></html>;
}
