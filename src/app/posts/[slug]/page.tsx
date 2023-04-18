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
    throw new Error();
  }

  const content = await remark()
    .use(externalLinks)
    .use(html, { sanitize: false })
    .process(post.content);

  return (
    <main className="px-8 pt-10 pb-16 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl text-gray-800 font-bold">{post.data.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{post.data.description}</p>

      <section
        className="mt-8 markdown"
        dangerouslySetInnerHTML={{ __html: content.toString() }}
      />
    </main>
  );
}
