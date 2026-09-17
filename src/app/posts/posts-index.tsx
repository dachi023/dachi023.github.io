"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";

import { CategoryChip } from "@/components/category-chip";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

const PAGE_SIZE = 20;

/** How many numbered pills fit before the list collapses around an ellipsis. */
const MAX_VISIBLE_PAGES = 7;

/** Page 1 keeps the bare `/posts/`, so the canonical URL is never duplicated. */
function hrefForPage(page: number): string {
  return page <= 1 ? "/posts/" : `/posts/?page=${page}`;
}

function filterPosts(posts: PostRow[], filter: Filter): PostRow[] {
  return filter === "all"
    ? posts
    : posts.filter((post) => post.category === filter);
}

function pageCount(total: number): number {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

/**
 * The numbers to draw: every page while they fit, otherwise the first, the
 * last and the current page's neighbours, with `null` where an ellipsis goes.
 */
function pageItems(current: number, total: number): (number | null)[] {
  if (total <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const around = [current - 1, current, current + 1].filter(
    (page) => page > 1 && page < total,
  );
  const pages = [1, ...around, total];

  const items: (number | null)[] = [];
  let previous = 0;
  for (const page of pages) {
    if (page - previous > 1) items.push(null);
    items.push(page);
    previous = page;
  }
  return items;
}

/**
 * The index itself. Kept free of hooks so that it can also be rendered on the
 * server as the `<Suspense>` fallback of the interactive version below: the
 * static HTML then already holds the first page of every post.
 */
function PostsIndexView({
  posts,
  filter,
  page,
  onFilterChange,
  onPageChange,
}: {
  posts: PostRow[];
  filter: Filter;
  page: number;
  onFilterChange?: (filter: Filter) => void;
  onPageChange?: (page: number) => void;
}) {
  const counts = {
    all: posts.length,
    life: posts.filter((post) => post.category === "life").length,
    work: posts.filter((post) => post.category === "work").length,
  };

  const visible = filterPosts(posts, filter);
  const totalPages = pageCount(visible.length);
  const start = (page - 1) * PAGE_SIZE;
  const rows = visible.slice(start, start + PAGE_SIZE);

  // The year headings belong to the page that is on screen, not to the filter.
  const groups: [number, PostRow[]][] = [];
  for (const post of rows) {
    const last = groups.at(-1);
    if (last && last[0] === post.year) last[1].push(post);
    else groups.push([post.year, [post]]);
  }

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: `すべて ${counts.all}` },
    { value: "life", label: `${CATEGORY_LABELS.life} ${counts.life}` },
    { value: "work", label: `${CATEGORY_LABELS.work} ${counts.work}` },
  ];

  /*
   * The links are real `/posts/?page=N` anchors so they can be copied or
   * opened in a new tab; a plain left click is taken over instead, which keeps
   * the whole change on the client.
   */
  const goTo = (next: number) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }
      if (!onPageChange) return;
      event.preventDefault();
      onPageChange(next);
    };

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
            if (next) onFilterChange?.(next as Filter);
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
        {groups.map(([year, yearRows]) => (
          <div key={year}>
            <h2 className="text-accent mt-6 text-[20px] font-bold tracking-[0.02em] md:text-[22px]">
              {year}
            </h2>
            <ul className="flex flex-col">
              {yearRows.map((post) => (
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

      {totalPages > 1 ? (
        <div className="flex flex-col items-center gap-3">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  disabled={page === 1}
                  href={hrefForPage(page - 1)}
                  onClick={goTo(page - 1)}
                />
              </PaginationItem>
              {pageItems(page, totalPages).map((item, index) =>
                item === null ? (
                  <PaginationItem key={`gap-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={item}>
                    <PaginationLink
                      href={hrefForPage(item)}
                      isActive={item === page}
                      aria-label={`${item} ページ目へ`}
                      onClick={goTo(item)}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationNext
                  disabled={page === totalPages}
                  href={hrefForPage(page + 1)}
                  onClick={goTo(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-faint text-[12px] font-bold tracking-[0.02em] md:text-[13px]">
            {start + 1}–{start + rows.length} / {visible.length}
          </p>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Drawn on the server while the browser has not told us which page is asked
 * for: the first page of every post, which is what `/posts/` itself means.
 */
export function PostsIndexFallback({ posts }: { posts: PostRow[] }) {
  return <PostsIndexView posts={posts} filter="all" page={1} />;
}

export function PostsIndex({ posts }: { posts: PostRow[] }) {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>("all");

  const totalPages = useMemo(
    () => pageCount(filterPosts(posts, filter).length),
    [posts, filter],
  );

  /*
   * The page lives in the URL rather than in state, so the back button, a
   * reload and a pasted link all land on the same list. Anything that is not a
   * page of the current filter — `?page=abc`, `?page=99`, `?page=0` — reads as
   * the first one.
   */
  const requested = Number(searchParams.get("page"));
  const page =
    Number.isInteger(requested) && requested >= 1 && requested <= totalPages
      ? requested
      : 1;

  /*
   * `history.pushState` is the App Router's shallow routing: it updates the URL
   * and `useSearchParams` with it, without asking the server for anything.
   */
  const onPageChange = (next: number) => {
    window.history.pushState(null, "", hrefForPage(next));
  };

  const onFilterChange = (next: Filter) => {
    setFilter(next);
    // A page number from the previous filter means nothing under the new one.
    if (searchParams.has("page")) {
      window.history.replaceState(null, "", hrefForPage(1));
    }
  };

  // Only a move between pages scrolls back up; the first render must not.
  const shownPage = useRef(page);
  useEffect(() => {
    if (shownPage.current === page) return;
    shownPage.current = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <PostsIndexView
      posts={posts}
      filter={filter}
      page={page}
      onFilterChange={onFilterChange}
      onPageChange={onPageChange}
    />
  );
}
