"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CategoryChip } from "@/components/category-chip";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CATEGORY_LABELS, type Category } from "@/lib/categories";

export type PostRow = {
  slug: string;
  title: string;
  date: string;
  year: number;
  category: Category;
};

type Filter = "all" | Category;

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
          <p className="text-muted text-[14px] md:text-[15px]">
            これまでに書いた文章です。2017年からの記事を全部置いています。
          </p>
        </div>
        <ToggleGroup
          aria-label="カテゴリで絞り込み"
          value={[filter]}
          onValueChange={(value) => {
            // Single select: clicking the pressed item would otherwise empty
            // the group, which would show nothing at all.
            const next = value[0];
            if (next) setFilter(next as Filter);
          }}
        >
          {filters.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Card className="gap-2 px-5 pt-2 pb-5 md:rounded-[24px] md:px-8 md:pb-6">
        {groups.map(([year, rows]) => (
          <div key={year}>
            <h2 className="text-accent mt-6 text-[20px] font-bold tracking-[0.02em] md:text-[22px]">
              {year}
            </h2>
            <ul className="flex flex-col">
              {rows.map((post) => (
                <li
                  key={post.slug}
                  className="group border-rule grid grid-cols-1 items-center gap-2 border-b-2 border-dashed py-4 md:grid-cols-[120px_64px_minmax(0,1fr)] md:gap-5 md:py-[18px]"
                >
                  <span className="flex items-center gap-3 md:contents">
                    <span className="text-faint text-[13px] font-bold tracking-[0.02em] md:text-[14px]">
                      {post.date}
                    </span>
                    <span className="md:justify-self-start">
                      <CategoryChip category={post.category} />
                    </span>
                  </span>
                  <Link
                    href={`/posts/${post.slug}/`}
                    className="group-hover:text-accent text-[17px] leading-[1.5] font-bold tracking-[0.01em] md:text-[18px]"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </div>
  );
}
