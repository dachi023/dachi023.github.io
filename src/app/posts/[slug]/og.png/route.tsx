import { renderPostOgCard } from "@/components/og-card";
import { getAllPosts, getPost } from "@/lib/content";

export const dynamic = "force-static";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return renderPostOgCard({
    title: post.title,
    category: post.category,
  });
}
