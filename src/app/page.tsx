import { getAllPosts } from "@/libs/post";
import dayjs from "dayjs";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="text-lg font-medium">作者について</h2>
          <div className="mt-6 flex flex-col gap-6 text-base leading-8">
            <p>
              Ryo
              Adachiもしくはdachi(dachi023)というハンドルネームでネット上での発信をしています。
            </p>
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
              でフロントエンドを中心に組織全体の開発基盤の整備等を担当しています。また、個人では業務委託でウェブサービスの開発やアドバイザーといった業務等も行っています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium">活動実績</h2>
          <div className="mt-6 flex flex-col gap-6 text-base">
            <p>
              <a
                className="text-primary underline"
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
                className="text-primary underline"
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
              className="rounded-lg border border-primary px-4 py-1.5"
              href="/posts"
            >
              <span className="text-sm font-medium text-primary">
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
                    className="flex h-full flex-col justify-between gap-2 rounded-xl border-2 border-gray-400 px-8 py-6 hover:border-primary"
                    href={`/posts/${ts}`}
                  >
                    <p className="text-lg font-medium text-gray-800">
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
