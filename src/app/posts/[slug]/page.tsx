import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import externalLinks from "remark-external-links";

import { createMetadata } from "@/libs/metadata";
import { getAllPosts, getPostBySlug } from "@/libs/post";

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

  const content = await remark()
    .use(externalLinks)
    .use(html, { sanitize: false })
    .process(post.content);

  return (
    <main>
      <h1 className="text-2xl text-gray-800 font-bold">{post.data.title}</h1>
      <p className="mt-4 text-sm text-gray-600">{post.data.description}</p>

      <section
        className="mt-20 markdown"
        dangerouslySetInnerHTML={{ __html: content.toString() }}
      />

      <div className="mt-20">
        <Link
          className="border border-primary py-1.5 rounded-lg px-4"
          href="/posts"
        >
          <span className="text-sm text-primary font-medium">一覧に戻る</span>
        </Link>
      </div>
    </main>
  );
}
