import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryChip } from "@/components/category-chip";
import { SiteShell } from "@/components/site-shell";
import {
  formatDate,
  getAllPosts,
  getLegacyPosts,
  getPost,
  legacySlug,
  type Post,
} from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { siteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [
    ...getAllPosts().map((post) => ({ slug: post.slug })),
    ...getLegacyPosts().map((post) => ({ slug: legacySlug(post.date) })),
  ];
}

function findLegacyTarget(slug: string): Post | undefined {
  if (!/^\d+$/.test(slug)) return undefined;
  return getLegacyPosts().find((post) => legacySlug(post.date) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const legacyTarget = findLegacyTarget(slug);

  if (legacyTarget) {
    return {
      title: legacyTarget.title,
      alternates: { canonical: `/posts/${legacyTarget.slug}/` },
      robots: { index: false, follow: true },
    };
  }

  const post = getPost(slug);
  if (!post) return {};

  const url = `/posts/${post.slug}/`;
  const description = post.description || post.title;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.title} | dachi`,
      description,
      url,
      publishedTime: post.date.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | dachi`,
      description,
    },
  };
}

function LegacyRedirect({ post }: { post: Post }) {
  const href = `/posts/${post.slug}/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <SiteShell>
        <div className="mx-auto flex w-full max-w-[720px] flex-col items-start gap-5 py-10">
          <p className="text-[14px] text-muted">
            このページは移動しました。自動で移動しない場合は下のリンクからどうぞ。
          </p>
          <Link
            href={href}
            className="linky text-[20px] leading-[1.5] font-bold tracking-[0.01em] text-accent md:text-[24px]"
          >
            移動しました: {post.title}
          </Link>
        </div>
      </SiteShell>
    </>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const legacyTarget = findLegacyTarget(slug);
  if (legacyTarget) return <LegacyRedirect post={legacyTarget} />;

  const post = getPost(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.body);
  const canonical = `${siteUrl}/posts/${post.slug}/`;
  const shareX = `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonical)}`;
  const shareBluesky = `https://bsky.app/intent/compose?text=${encodeURIComponent(`${post.title} ${canonical}`)}`;

  return (
    <SiteShell>
      <article className="mx-auto flex w-full max-w-[720px] flex-col gap-7 md:gap-10">
        <header className="flex flex-col gap-3.5 md:gap-[18px]">
          <div className="flex items-center gap-2.5 md:gap-3">
            <CategoryChip category={post.category} />
            <span className="text-[13px] font-bold tracking-[0.02em] text-faint md:text-[14px]">
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="text-[26px] leading-[1.5] font-bold tracking-[0.01em] text-pretty md:text-[38px] md:leading-[1.45]">
            {post.title}
          </h1>
          {post.description ? (
            <p className="text-[14px] leading-[1.8] text-muted md:text-[15px]">
              {post.description}
            </p>
          ) : null}
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

        <nav className="flex flex-col gap-3 border-t-2 border-dashed border-rule pt-7 md:flex-row md:items-center md:justify-between md:pt-10">
          <Link
            href="/posts/"
            className="self-start rounded-full border-2 border-ink bg-card px-4 py-2.5 text-[14px] font-bold tracking-[0.02em] hover:text-accent md:px-[18px] md:text-[15px]"
          >
            ← 記事一覧
          </Link>
          <div className="flex gap-2 text-[13px] font-bold tracking-[0.02em] md:text-[14px]">
            <a
              href={shareX}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink bg-card px-3.5 py-2 hover:text-accent md:px-4"
            >
              X で共有
            </a>
            <a
              href={shareBluesky}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink bg-card px-3.5 py-2 hover:text-accent md:px-4"
            >
              Bluesky で共有
            </a>
          </div>
        </nav>
      </article>
    </SiteShell>
  );
}
