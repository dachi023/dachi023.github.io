import "./globals.css";

import classNames from "classnames";
import { Metadata } from "next";
import { Noto_Sans_JP, Pacifico } from "next/font/google";
import Link from "next/link";
import twemoji from "twemoji";

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
        className="bg-[#F5F5DC] min-w-full min-h-screen"
        suppressHydrationWarning={true}
      >
        <div className="px-6 pb-24 md:px-16">
          <header className="pt-12 pb-16 flex items-start gap-5">
            <p className="font-pacifico text-5xl">
              <Link href="/">dachi</Link>
            </p>
            <Link
              className="w-8 h-8"
              href="/posts"
              dangerouslySetInnerHTML={{ __html: twemoji.parse("💬") }}
            />
          </header>
          {children}
        </div>
        <footer className="px-6 py-12 bg-[#FAEBE5] md:px-16">
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-1">
              <span className="text-xs text-gray-800 font-semibold">
                お問い合わせ
              </span>
              <span className="text-xs text-gray-600">
                ご依頼・お問い合わせ等はTwitterやFacebookなど、ソーシャルメディアのDMにて受け付けております。
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs text-gray-800 font-semibold">
                Amazonアソシエイト・プログラム
              </span>
              <span className="text-xs text-gray-600">
                Amazonのアソシエイトとして、Ryo
                Adachiは適格販売により収入を得ています。
              </span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
