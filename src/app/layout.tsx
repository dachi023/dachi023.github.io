import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import type { ReactNode } from "react";

import { siteDescription, siteName, siteUrl } from "@/lib/site";

import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | dachi",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Ryo Adachi", url: siteUrl }],
  creator: "Ryo Adachi",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: `${siteName} の記事` },
      ],
    },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "ja_JP",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dachi_023",
    creator: "@dachi_023",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={zenKakuGothicNew.variable}>
      <body>{children}</body>
    </html>
  );
}
