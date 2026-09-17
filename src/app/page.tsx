import Link from "next/link";

import { CategoryChip } from "@/components/category-chip";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { formatDate, getAllPosts, getAllWorks } from "@/lib/content";

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
      <div className="flex flex-col gap-10 md:gap-16">
        <h1 className="sr-only">dachi</h1>
        <section className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold tracking-wide md:text-2xl">
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
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}/`} className="block h-full">
                  <Card className="hover-lift h-full justify-between gap-4 rounded-2xl p-5 md:min-h-44 md:gap-6 md:rounded-(--radius) md:p-6">
                    <CardTitle className="text-base leading-normal md:text-lg">
                      {post.title}
                    </CardTitle>
                    <CardFooter className="justify-between">
                      <span className="text-faint text-xs font-bold tracking-wide">
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
          <h2 className="text-xl font-bold tracking-wide md:text-2xl">Works</h2>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
            {works.map((work) => (
              <li key={work.slug}>
                <Link href={`/works/${work.slug}/`} className="block">
                  <Card className="hover-lift overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/works/${work.slug}/cover.jpg`}
                      alt={work.title}
                      className="bg-rule block aspect-1200/630 w-full object-cover"
                    />
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-xl font-bold tracking-wide md:text-2xl">
            Career
          </h2>
          <Card className="gap-5 p-6 md:gap-8 md:p-8">
            <ul className="flex flex-1 flex-col gap-4">
              {career.map((item) => (
                <li key={item.company} className="flex gap-3">
                  <span className="text-faint shrink-0 pt-px text-xs font-bold tracking-wide">
                    {item.period}
                  </span>
                  <span className="flex flex-col leading-relaxed">
                    <span className="text-base font-bold">{item.company}</span>
                    <small className="text-muted text-xs">{item.stack}</small>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-rule flex flex-1 flex-col gap-3 border-t-2 border-dashed pt-5">
              <h3 className="text-base font-bold">著書</h3>
              <p className="linky text-soft text-sm leading-loose">
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
