import type { Metadata } from "next";
import { Suspense } from "react";

import { SiteShell } from "@/components/site-shell";
import { formatDate, getAllPosts, getYear } from "@/lib/content";

import { PostsIndex, PostsIndexFallback, type PostRow } from "./posts-index";

export const metadata: Metadata = {
  title: "Posts",
  description: "これまでに書いた文章です。2017年からの記事を全部置いています。",
  alternates: { canonical: "/posts/" },
  openGraph: {
    title: "Posts | dachi",
    description:
      "これまでに書いた文章です。2017年からの記事を全部置いています。",
    url: "/posts/",
  },
};

export default function PostsPage() {
  const posts: PostRow[] = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: formatDate(post.date),
    year: getYear(post.date),
    category: post.category,
  }));

  return (
    <SiteShell dots>
      {/*
        `PostsIndex` reads `?page=` through `useSearchParams`, which a
        prerendered route can only answer in the browser. The boundary keeps
        that bail-out local, and its fallback is the very same list on its
        first page, so the exported HTML is the page it claims to be.
      */}
      <Suspense fallback={<PostsIndexFallback posts={posts} />}>
        <PostsIndex posts={posts} />
      </Suspense>
    </SiteShell>
  );
}
