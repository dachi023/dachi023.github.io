import dayjs from "dayjs";
import Link from "next/link";

import { getAllPosts } from "@/libs/post";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="text-lg font-medium">作者について</h2>
          <div className="mt-6 text-base flex flex-col gap-6 leading-8">
            <p>
              Ryo
              Adachiもしくはdachi(dachi023)というハンドルネームでネット上での発信をしています。
            </p>
            <p>
              2012年からウェブエンジニアとして働いており、現在は
              <a
                className="underline text-primary"
                href="https://corp.mosh.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MOSH株式会社
              </a>
              でフロントエンドを中心に組織全体の開発基盤の整備等を担当しています。また、個人では業務委託でウェブサービスの開発やアドバイザーといった業務等も行っています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium">活動実績</h2>
          <div className="mt-6 text-base flex flex-col gap-6">
            <p>
              <a
                className="underline text-primary"
                href="https://amzn.to/41gkI1V/"
                target="_blank"
                rel="noopener noreferrer"
              >
                フロントエンド開発入門
              </a>
              という書籍を共著で執筆し、2020年に発売しました。
            </p>
            <p>
              勉強会などで発表したスライドは
              <a
                className="underline text-primary"
                href="https://speakerdeck.com/dachi023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Speaker Deck
              </a>
              にアップロードしています。
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-lg font-medium">最新記事</h2>
            <Link
              className="border border-primary py-1.5 rounded-lg px-4"
              href="/posts"
            >
              <span className="text-sm text-primary font-medium">
                すべて見る
              </span>
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map(({ data }) => {
              const date = dayjs(data.date);
              const ts = date.unix();

              return (
                <li key={ts}>
                  <Link
                    className="py-6 px-8 h-full flex flex-col justify-between gap-2 rounded-xl border-2 border-gray-400 hover:border-primary"
                    href={`/posts/${ts}`}
                  >
                    <p className="text-lg text-gray-800 font-medium">
                      {data.title}
                    </p>
                    <small className="flex items-center gap-1 text-sm">
                      <span className="text-gray-500">
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
