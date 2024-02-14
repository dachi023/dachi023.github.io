"use client";

import { Noto_Sans_JP, Pacifico } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const pacifico = Pacifico({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export function FontFamily() {
  return (
    <style jsx global>
      {`
        :root {
          --font-noto-sans-jp: ${notoSansJp.style.fontFamily};
          --font-pacifico: ${pacifico.style.fontFamily};
        }
      `}
    </style>
  );
}
