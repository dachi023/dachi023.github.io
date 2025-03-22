import { createMetadata } from "@/libs/metadata";
import { getAllPosts, getPostBySlug } from "@/libs/post";
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
  const post = await getPostBySlug(slug);

  return createMetadata({
    title: post?.data.title,
    description: post?.data.description,
    path: slug,
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ data }) => ({
    slug: data.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    throw new Error("404 Not Found");
  }

  const date = dayjs(post.data.date);

  const content = await remark()
    .use(externalLinks)
    .use(html, { sanitize: false })
    .process(post.content);

  return (
    <main>
      <h1 className="text-2xl font-bold text-gray-800">{post.data.title}</h1>
      <p className="mt-4 flex gap-2 text-sm text-gray-600">
        <span>{date.format("YYYY-MM-DD")}</span>
        <span>{post.data.description}</span>
      </p>

      <section
        className="markdown mt-12"
        dangerouslySetInnerHTML={{ __html: content.toString() }}
      />

      <div className="mt-20">
        <Link
          className="rounded-lg border-2 border-primary px-6 py-2"
          href="/posts"
        >
          <span className="text-base font-medium text-primary">一覧に戻る</span>
        </Link>
      </div>
    </main>
  );
}
