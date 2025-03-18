import { createMetadata } from "@/libs/metadata";
import { getAllWorks, getWorkBySlug } from "@/libs/work";
import dayjs from "dayjs";
import Link from "next/link";
import { remark } from "remark";
import externalLinks from "remark-external-links";
import html from "remark-html";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getWorkBySlug(slug);

  return createMetadata({
    title: post?.data.title,
    description: post?.data.description,
    path: slug,
  });
}

export async function generateStaticParams() {
  const work = await getAllWorks();

  return work.map(({ data }) => ({
    slug: data.slug,
  }));
}

export default async function Work({ params }: { params: { slug: string } }) {
  const work = await getWorkBySlug(params.slug);
  if (!work) {
    throw new Error("404 Not Found");
  }

  const date = dayjs(work.data.date);

  const content = await remark()
    .use(externalLinks)
    .use(html, { sanitize: false })
    .process(work.content);

  return (
    <main>
      <h1 className="text-2xl font-bold text-gray-800">{work.data.title}</h1>
      <p className="mt-4 flex gap-2 text-sm text-gray-600">
        <span>{date.format("YYYY-MM")}</span>
        <span>{work.data.description}</span>
      </p>

      <section
        className="markdown mt-20"
        dangerouslySetInnerHTML={{ __html: content.toString() }}
      />

      {/* <div className="mt-20">
        <Link
          className="rounded-lg border border-primary px-4 py-1.5"
          href="/posts"
        >
          <span className="text-sm font-medium text-primary">一覧に戻る</span>
        </Link>
      </div> */}
    </main>
  );
}
