import dayjs from "dayjs";
import { Metadata } from "next";
import Link from "next/link";
import twemoji from "twemoji";

import { createMetadata } from "@/libs/metadata";
import { getAllPosts } from "@/libs/post";

export const metadata: Metadata = createMetadata({
  title: "Posts",
  description: "これまでに書いた文章です",
  path: "posts",
});

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main>
      <ul className="flex flex-col gap-10">
        {posts.map(({ data }) => {
          const date = dayjs(data.date);
          const ts = date.unix();

          return (
            <li key={ts}>
              <Link
                className="p-8 flex flex-col gap-6 bg-white rounded-xl shadow-lg hover:shadow-xl"
                href={`/posts/${ts}`}
              >
                <p className="text-xl text-gray-800 font-semibold">
                  {data.title}
                </p>
                <small className="flex items-center gap-1">
                  <span
                    className="w-3.5 h-3.5"
                    dangerouslySetInnerHTML={{ __html: twemoji.parse("🗓️") }}
                  />
                  <span className="text-sm text-gray-600">
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
