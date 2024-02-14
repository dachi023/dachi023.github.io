import "./globals.css";

import classNames from "classnames";
import { Metadata } from "next";
import { Noto_Sans_JP, Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { createMetadata } from "@/libs/metadata";

export const metadata: Metadata = createMetadata({
  title: "dachi",
  description: "よろしくおねがいします",
});

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
      <body
        className="bg-white min-w-full min-h-screen"
        suppressHydrationWarning={true}
      >
        <div className="px-6 pb-24 md:px-48">
          <header className="py-8 mb-8 flex items-center justify-between gap-5 sticky inset-0 bg-white/95">
            <p className="font-pacifico text-3xl">
              <Link href="/">dachi</Link>
            </p>
            <div className="flex gap-6">
              <a
                href="https://bsky.app/profile/dachi.one"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/bluesky.svg"
                  alt="Bluesky"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://twitter.com/dachi_023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://github.com/dachi023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </header>
          {children}
        </div>
        <footer className="px-6 py-12 bg-secondary/10 md:px-48">
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-2">
              <span className="text-base">お問い合わせ・ご依頼</span>
              <span className="text-sm text-gray-800 leading-7">
                XやFacebookでDMいただけますと早めのお返事が可能です。
              </span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
