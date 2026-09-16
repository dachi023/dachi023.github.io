import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/site-shell";
import {
  formatDate,
  getAllWorks,
  getWork,
  splitWork,
  workSummary,
} from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllWorks().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};

  const url = `/works/${work.slug}/`;
  const description = workSummary(work);

  return {
    title: work.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${work.title} | dachi`,
      description,
      url,
      images: [{ url: `/works/${work.slug}/cover.jpg` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | dachi`,
      description,
      images: [`/works/${work.slug}/cover.jpg`],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const { intro, body } = splitWork(work);
  const introHtml = await renderMarkdown(intro);
  const bodyHtml = await renderMarkdown(body);

  return (
    <SiteShell>
      <article className="mx-auto flex w-full max-w-[820px] flex-col gap-7 md:gap-10">
        <header className="flex flex-col gap-3.5 md:gap-[18px]">
          <div className="flex items-center gap-2.5 md:gap-3">
            <span className="rounded-full bg-ink px-3 py-1 text-[12px] font-bold tracking-[0.02em] text-paper md:text-[13px]">
              Works
            </span>
            <span className="text-[13px] font-bold tracking-[0.02em] text-faint md:text-[14px]">
              {formatDate(work.date)}
            </span>
          </div>
          <h1 className="text-[28px] leading-[1.4] font-bold tracking-[0.01em] text-pretty md:text-[40px] md:leading-[1.35]">
            {work.title}
          </h1>
        </header>

        <div
          className="prose work-intro"
          dangerouslySetInnerHTML={{ __html: introHtml }}
        />

        {body ? (
          <div className="prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        ) : null}

        <nav className="border-t-2 border-dashed border-rule pt-7 md:pt-10">
          <Link
            href="/"
            className="inline-block rounded-full border-2 border-ink bg-card px-4 py-2.5 text-[14px] font-bold tracking-[0.02em] hover:text-accent md:px-[18px] md:text-[15px]"
          >
            ← トップへ戻る
          </Link>
        </nav>
      </article>
    </SiteShell>
  );
}
