import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

import type { Category } from "./categories";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  category: Category;
  body: string;
};

export type Work = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  body: string;
};

/**
 * An empty frontmatter value (`description:`) is parsed as `null` by YAML, and
 * a missing key as `undefined`. Both are normalised to an empty string.
 */
const optionalText = z
  .union([z.string(), z.null(), z.undefined()])
  .transform((value) => value ?? "");

const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: optionalText,
  date: z.date(),
  category: z.enum(["life", "work"]),
});

const workFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: optionalText,
  date: z.date(),
});

const POSTS_DIR = path.join(process.cwd(), "posts");
const WORKS_DIR = path.join(process.cwd(), "works");

function readMarkdownFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => ({
      slug: name.replace(/\.md$/, ""),
      file: path.join(dir, name),
      raw: fs.readFileSync(path.join(dir, name), "utf8"),
    }));
}

function parse<T>(schema: z.ZodType<T>, data: unknown, file: string): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${path.relative(process.cwd(), file)}:\n${z.prettifyError(result.error)}`,
    );
  }

  return result.data;
}

/** Newest first; same-day posts fall back to a descending slug comparison. */
function byNewest(
  a: { date: Date; slug: string },
  b: { date: Date; slug: string },
) {
  const diff = b.date.getTime() - a.date.getTime();
  return diff !== 0 ? diff : b.slug.localeCompare(a.slug);
}

let postsCache: Post[] | undefined;

export function getAllPosts(): Post[] {
  if (!postsCache) {
    postsCache = readMarkdownFiles(POSTS_DIR)
      .map(({ slug, file, raw }) => {
        const { data, content } = matter(raw);
        const frontmatter = parse(postFrontmatterSchema, data, file);
        return { slug, ...frontmatter, body: content };
      })
      .sort(byNewest);
  }

  return postsCache;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

let worksCache: Work[] | undefined;

export function getAllWorks(): Work[] {
  if (!worksCache) {
    worksCache = readMarkdownFiles(WORKS_DIR)
      .map(({ slug, file, raw }) => {
        const { data, content } = matter(raw);
        const frontmatter = parse(workFrontmatterSchema, data, file);
        return { slug, ...frontmatter, body: content };
      })
      .sort(byNewest);
  }

  return worksCache;
}

export function getWork(slug: string): Work | undefined {
  return getAllWorks().find((work) => work.slug === slug);
}

/**
 * Splits a work into the block shown next to the title (lead paragraph plus
 * cover image and its caption) and the rest of the document, which starts at
 * the first level-2 heading.
 */
export function splitWork(work: Work): { intro: string; body: string } {
  const index = work.body.search(/^## /m);
  return index === -1
    ? { intro: work.body.trim(), body: "" }
    : {
        intro: work.body.slice(0, index).trim(),
        body: work.body.slice(index).trim(),
      };
}

/** A one line summary: the frontmatter description, or the lead paragraph. */
export function workSummary(work: Work): string {
  if (work.description) return work.description;

  const lead = work.body.trim().split(/\n\s*\n/, 1)[0] ?? "";
  return lead
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** `2025.03.04` */
export function formatDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export function getYear(date: Date): number {
  return date.getUTCFullYear();
}

/**
 * The previous site addressed posts by the UNIX timestamp of their date at
 * 00:00 UTC. Those URLs are kept alive as redirect pages.
 */
export function legacySlug(date: Date): string {
  return `${Math.floor(date.getTime() / 1000)}`;
}

const LEGACY_URL_CUTOFF = Date.UTC(2020, 0, 1);

export function getLegacyPosts(): Post[] {
  return getAllPosts().filter(
    (post) => post.date.getTime() >= LEGACY_URL_CUTOFF,
  );
}
