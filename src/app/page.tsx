import { getAllPosts } from "@/libs/post";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="flex flex-col gap-16">
        <section>
          <h2 className="text-2xl font-semibold">ABOUT</h2>
          <div className="mt-8 flex flex-col gap-6 text-base leading-8">
            <p>Ryo Adachiもしくはdachi(dachi023)で普段は発信等をしています。</p>
            <p>
              2012年からウェブエンジニアとして働いており、現在は
              <a
                className="text-primary underline"
                href="https://corp.mosh.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MOSH株式会社
              </a>
              に所属。
              <br />
              フロントエンド基盤の開発をメインとしつつ、技術広報としてイベント運営や
              <a
                className="text-primary underline"
                href="https://open.spotify.com/show/478u0bSmJ8IThAFsJppkny?si=1acab2da220d48c3"
                target="_blank"
                rel="noopener noreferrer"
              >
                企業ポッドキャスト
              </a>
              の企画やMCなども担当。
            </p>
            <p>
              個人では業務委託でウェブサイトの開発、フロントエンド関連のアドバイザー業務など。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">CAREER</h2>
          <div className="mt-8 flex flex-col gap-4 text-base">
            <p className="flex gap-2">
              <span>2021 〜</span>
              <span>
                MOSH
                <br />
                <small>Angular, React, AWS ECS, Cloudflare Pages</small>
              </span>
            </p>
            <p className="flex gap-2">
              <span>2016 〜</span>
              <span>
                コネヒト
                <br />
                <small>PHP, Go, jQuery, Backbone.js, React, AWS ECS</small>
              </span>
            </p>
            <p className="flex gap-2">
              <span>2012 〜</span>
              <span>
                アクティブ・ワーク
                <br />
                <small>Java, PHP, jQuery, AngularJS</small>
              </span>
            </p>
          </div>

          <h3 className="mt-8 text-lg font-medium">その他</h3>
          <ul className="mt-4 flex list-disc flex-col gap-3 pl-6 text-base">
            <li>
              2020年に
              <a
                className="text-primary underline"
                href="https://www.amazon.co.jp/dp/4798061778"
                target="_blank"
                rel="noopener noreferrer"
              >
                フロントエンド開発入門
              </a>
              を共著で執筆しました。
            </li>
            <li>
              過去の発表資料は
              <a
                className="text-primary underline"
                href="https://speakerdeck.com/dachi023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Speaker Deck
              </a>
              にアップロードしています。
            </li>
            <li>
              技術ブログは
              <a
                className="text-primary underline"
                href="https://zenn.dev/dachi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenn
              </a>
              に書いています。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">WORKS</h2>
          <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <li>
              <Link
                className="hover:opacity-70"
                href="/works/chill-classic-concert"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-fit"
                  src="/works/chill-classic-concert/cover.jpg"
                  alt="CHILL CLASSIC CONCERT"
                />
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-2xl font-semibold">BLOG</h2>
            <Link
              className="rounded-lg border-2 border-primary px-4 py-1.5 hover:opacity-70"
              href="/posts"
            >
              <span className="text-base font-medium text-primary">
                すべて見る
              </span>
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.slice(0, 3).map(({ data }) => {
              const date = dayjs(data.date);
              const ts = date.unix();

              return (
                <li key={ts}>
                  <Link
                    className="group flex h-full flex-col justify-between gap-2 rounded-xl border-2 border-gray-400 px-8 py-6 hover:border-primary"
                    href={`/posts/${ts}`}
                  >
                    <p className="text-lg font-semibold text-gray-700 group-hover:text-primary">
                      {data.title}
                    </p>
                    <small className="flex items-center gap-1 text-sm">
                      <span className="text-gray-400">
                        {date.format("YYYY-MM-DD")}
                      </span>
                    </small>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
