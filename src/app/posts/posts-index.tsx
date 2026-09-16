"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CATEGORY_LABELS, type Category } from "@/lib/categories";

export type PostRow = {
  slug: string;
  title: string;
  date: string;
  year: number;
  category: Category;
};

type Filter = "all" | Category;

const chipColors: Record<Category, string> = {
  life: "bg-life",
  work: "bg-work",
};

export function PostsIndex({ posts }: { posts: PostRow[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: posts.length,
      life: posts.filter((post) => post.category === "life").length,
      work: posts.filter((post) => post.category === "work").length,
    }),
    [posts],
  );

  const groups = useMemo(() => {
    const visible =
      filter === "all"
        ? posts
        : posts.filter((post) => post.category === filter);

    const byYear = new Map<number, PostRow[]>();
    for (const post of visible) {
      const rows = byYear.get(post.year);
      if (rows) rows.push(post);
      else byYear.set(post.year, [post]);
    }
    return [...byYear.entries()];
  }, [posts, filter]);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: `すべて ${counts.all}` },
    { value: "life", label: `${CATEGORY_LABELS.life} ${counts.life}` },
    { value: "work", label: `${CATEGORY_LABELS.work} ${counts.work}` },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-[36px] leading-none font-bold tracking-[0.02em] md:text-[48px]">
            Posts
          </h1>
          <p className="text-[14px] text-muted md:text-[15px]">
            これまでに書いた文章です。2017年からの記事を全部置いています。
          </p>
        </div>
        <div className="flex gap-2 text-[13px] font-bold tracking-[0.02em] md:text-[14px]">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
              className={`cursor-pointer rounded-full border-2 border-ink px-3.5 py-2 md:px-4 ${
                filter === item.value
                  ? "bg-ink text-paper"
                  : "bg-card hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-2 rounded-[20px] border-2 border-ink bg-card px-5 pt-2 pb-5 md:rounded-[24px] md:px-8 md:pb-6">
        {groups.map(([year, rows]) => (
          <div key={year}>
            <h2 className="mt-6 text-[20px] font-bold tracking-[0.02em] text-accent md:text-[22px]">
              {year}
            </h2>
            <ul className="flex flex-col">
              {rows.map((post) => (
                <li
                  key={post.slug}
                  className="group grid grid-cols-1 items-center gap-2 border-b-2 border-dashed border-rule py-4 md:grid-cols-[120px_64px_minmax(0,1fr)] md:gap-5 md:py-[18px]"
                >
                  <span className="flex items-center gap-3 md:contents">
                    <span className="text-[13px] font-bold tracking-[0.02em] text-faint md:text-[14px]">
                      {post.date}
                    </span>
                    <span className="md:justify-self-start">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[12px] leading-normal font-medium ${chipColors[post.category]}`}
                      >
                        {CATEGORY_LABELS[post.category]}
                      </span>
                    </span>
                  </span>
                  <Link
                    href={`/posts/${post.slug}/`}
                    className="text-[17px] leading-[1.5] font-bold tracking-[0.01em] group-hover:text-accent md:text-[18px]"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
