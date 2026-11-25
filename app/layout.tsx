import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aquanorasmart.uk"),
  title: {
    default: "Aquanora Smart | Discover. Understand. Grow.",
    template: "%s | Aquanora Smart"
  },
  description: "Knowledge, practical skills and professional learning for a changing world.",
  openGraph: {
    title: "Aquanora Smart",
    description: "Knowledge that empowers. Skills that advance.",
    url: "https://aquanorasmart.uk",
    siteName: "Aquanora Smart",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}