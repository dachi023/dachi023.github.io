import dayjs from "dayjs";
import { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/libs/metadata";
import { getAllPosts } from "@/libs/post";

export const metadata: Metadata = createMetadata({
  title: "記事一覧",
  description: "これまでに書いた文章です",
  path: "posts",
});

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main>
      <ul className="flex flex-col gap-8">
        {posts.map(({ data }) => {
          const date = dayjs(data.date);
          const ts = date.unix();

          return (
            <li key={ts}>
              <Link
                className="py-6 px-8 flex flex-col gap-2 rounded-xl border-2 border-gray-400 hover:border-primary"
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
    </main>
  );
}
