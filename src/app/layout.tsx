import "./globals.css";
import { FontFamily } from "@/libs/components/fontfamily";
import { createMetadata } from "@/libs/metadata";
import classNames from "classnames";
import { Metadata } from "next";
import { Noto_Sans_JP, Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
      <FontFamily />
      <body
        className="min-h-screen min-w-full bg-white"
        suppressHydrationWarning={true}
      >
        <div className="px-6 pb-24 md:px-24">
          <div className="md:mx-auto md:max-w-6xl">
            <header className="sticky inset-0 mb-8 flex items-center justify-between gap-5 bg-white/90 py-4">
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
        </div>
        <footer className="bg-secondary/10 px-6 py-12 md:px-24">
          <ul className="flex flex-col gap-6 md:mx-auto md:max-w-6xl">
            <li className="flex flex-col gap-2">
              <span className="text-base font-medium">
                お問い合わせ・ご依頼
              </span>
              <span className="text-sm leading-7 text-gray-800">
                XのDMからお願いいたします。
              </span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
