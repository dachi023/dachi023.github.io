import dayjs from "dayjs";
import { promises as fs } from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { join } from "path";

export interface Post extends GrayMatterFile<string> {
  data: {
    title: string;
    description: string;
    date: string;
    slug?: string;
  };
}

const FILE_ENCODING = "utf8";

export async function getAllPosts(): Promise<Post[]> {
  const posts = await readAll();

  return posts.reverse();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await readAll();

  return posts.find(({ data }) => data.slug === slug) || null;
}

async function readAll(): Promise<Post[]> {
  const dir = join(process.cwd(), "posts");
  const names = await fs.readdir(dir);
  const files = await Promise.all(
    names
      .filter((name) => /\.md$/.test(name))
      .map((name) =>
        fs.readFile(join(dir, name), FILE_ENCODING).then((str) => {
          const value = matter(str.trim());
          const data = {
            ...value.data,
            slug: `${dayjs(value.data.date).unix()}`,
          };

          return { ...value, data };
        }),
      ),
  );

  return files as Post[];
}
