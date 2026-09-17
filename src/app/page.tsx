import Link from "next/link";

import { CategoryChip } from "@/components/category-chip";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  formatDate,
  getAllPosts,
  getAllWorks,
  workSummary,
} from "@/lib/content";

const career = [
  {
    period: "2021 〜",
    company: "MOSH",
    stack: "Angular, React, AWS ECS, Cloudflare Pages",
  },
  {
    period: "2016 〜",
    company: "コネヒト",
    stack: "PHP, Go, jQuery, Backbone.js, React, AWS ECS",
  },
  {
    period: "2012 〜",
    company: "アクティブ・ワーク",
    stack: "Java, PHP, jQuery, AngularJS",
  },
];

export default function Home() {
  const posts = getAllPosts();
  const works = getAllWorks();

  return (
    <SiteShell dots>
      <div className="flex flex-col gap-12 md:gap-[72px]">
        <h1 className="sr-only">dachi</h1>
        <section className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-[26px] font-bold tracking-[0.02em] md:text-[30px]">
              Posts
            </h2>
            <Link
              href="/posts/"
              className={buttonVariants({ variant: "link", size: "text" })}
            >
              すべての記事 ({posts.length}) →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
            {posts.slice(0, 6).map((post) => (
              <li key={post.slug} className="hover-lift">
                <Link href={`/posts/${post.slug}/`} className="block h-full">
                  <Card className="h-full justify-between gap-[18px] rounded-[18px] p-5 md:min-h-[200px] md:gap-7 md:rounded-(--radius) md:p-6">
                    <CardTitle className="text-[17px] leading-[1.55] md:text-[19px]">
                      {post.title}
                    </CardTitle>
                    <CardFooter className="justify-between">
                      <span className="text-faint text-[13px] font-bold tracking-[0.02em]">
                        {formatDate(post.date)}
                      </span>
                      <CategoryChip category={post.category} />
                    </CardFooter>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="works"
          className="flex scroll-mt-8 flex-col gap-4 md:gap-6"
        >
          <h2 className="text-[26px] font-bold tracking-[0.02em] md:text-[30px]">
            Works
          </h2>
          <ul className="flex flex-col gap-5">
            {works.map((work) => (
              <li key={work.slug} className="hover-lift">
                <Link href={`/works/${work.slug}/`} className="block">
                  <Card className="grid grid-cols-1 items-center gap-3.5 p-3.5 md:grid-cols-[420px_minmax(0,1fr)] md:gap-8 md:rounded-[24px] md:p-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/works/${work.slug}/cover.jpg`}
                      alt={work.title}
                      className="bg-rule block aspect-[1200/630] w-full rounded-xl object-cover md:rounded-[14px]"
                    />
                    <CardContent className="gap-1.5 px-1.5 pb-1.5 md:gap-3 md:px-0 md:pr-4 md:pb-0">
                      <span className="text-faint text-[12px] font-bold tracking-[0.02em] md:text-[13px]">
                        {work.date.getUTCFullYear()}
                      </span>
                      <CardTitle className="text-[19px] leading-[1.4] md:text-[24px]">
                        {work.title}
                      </CardTitle>
                      <span className="text-soft hidden text-[14px] leading-[1.9] md:block">
                        {workSummary(work)}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-[26px] font-bold tracking-[0.02em] md:text-[30px]">
            Career
          </h2>
          <Card className="gap-5 p-6 md:gap-8 md:p-8">
            <ul className="flex flex-1 flex-col gap-4">
              {career.map((item) => (
                <li key={item.company} className="flex gap-3">
                  <span className="text-faint shrink-0 pt-px text-[13px] font-bold tracking-[0.02em]">
                    {item.period}
                  </span>
                  <span className="flex flex-col leading-[1.6]">
                    <span className="text-[17px] font-bold tracking-[0.01em]">
                      {item.company}
                    </span>
                    <small className="text-muted text-[12px]">
                      {item.stack}
                    </small>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-rule flex flex-1 flex-col gap-3 border-t-2 border-dashed pt-5">
              <h3 className="text-[17px] font-bold tracking-[0.01em]">著書</h3>
              <p className="linky text-soft text-[14px] leading-[1.9]">
                2020年に{" "}
                <a
                  href="https://www.amazon.co.jp/dp/4798061778"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  フロントエンド開発入門
                </a>{" "}
                を共著で執筆しました。
              </p>
            </div>
          </Card>
        </section>
      </div>
    </SiteShell>
  );
}
