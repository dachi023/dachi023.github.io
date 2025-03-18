import dayjs from "dayjs";
import { promises as fs } from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { join } from "path";

export interface Work extends GrayMatterFile<string> {
  data: {
    title: string;
    description: string;
    date: string;
    slug?: string;
  };
}

const FILE_ENCODING = "utf8";

export async function getAllWorks(): Promise<Work[]> {
  const works = await readAll();

  return works.reverse();
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  const works = await readAll();

  return works.find(({ data }) => data.slug === slug) || null;
}

async function readAll(): Promise<Work[]> {
  const dir = join(process.cwd(), "works");
  const names = await fs.readdir(dir);
  const files = await Promise.all(
    names
      .filter((name) => /\.md$/.test(name))
      .map((name) =>
        fs.readFile(join(dir, name), FILE_ENCODING).then((str) => {
          const value = matter(str.trim());
          const data = {
            ...value.data,
            slug: name.replace(".md", ""),
          };

          return { ...value, data };
        }),
      ),
  );

  return files as Work[];
}
