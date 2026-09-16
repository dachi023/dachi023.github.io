import type { MetadataRoute } from "next";

import { getAllPosts, getAllWorks } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const works = getAllWorks();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: posts[0]?.date,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/posts/`,
      lastModified: posts[0]?.date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...works.map((work) => ({
      url: `${siteUrl}/works/${work.slug}/`,
      lastModified: work.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
