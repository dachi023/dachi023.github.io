import "./globals.css";

import classNames from "classnames";
import { Noto_Sans_JP, Pacifico } from "next/font/google";
import Link from "next/link";

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

export const metadata = {
  title: "dachi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={classNames([notoSansJp.variable, pacifico.variable])}
    >
      <body className="px-16 bg-[#F5F5DC] min-w-full min-h-screen">
        <h1 className="pt-12 pb-16 font-pacifico text-5xl">
          <Link href="/">dachi</Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
