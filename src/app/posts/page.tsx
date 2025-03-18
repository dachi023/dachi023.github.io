import { createMetadata } from "@/libs/metadata";
import { getAllPosts } from "@/libs/post";
import dayjs from "dayjs";
import { Metadata } from "next";
import Link from "next/link";

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
                className="group flex flex-col gap-2 rounded-xl border-2 border-gray-400 px-8 py-6 hover:border-primary"
                href={`/posts/${ts}`}
              >
                <p className="text-lg font-semibold text-gray-700 group-hover:text-primary">
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
