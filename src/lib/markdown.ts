import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/**
 * The default (GitHub-flavoured) schema extended with just enough to keep the
 * hand written HTML that exists in the posts: SpeakerDeck embeds and a handful
 * of inline `style` attributes.
 */
const schema: typeof defaultSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "iframe", "small"],
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), "target", "rel"],
    br: ["style"],
    div: [...(defaultSchema.attributes?.div ?? []), "style"],
    iframe: [
      ["src", /^https:\/\/speakerdeck\.com\//],
      "allowFullScreen",
      "frameBorder",
      "style",
      "allow",
      "scrolling",
    ],
    img: [...(defaultSchema.attributes?.img ?? []), "style"],
    small: ["style"],
  },
};

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize, schema)
  .use(rehypeExternalLinks, {
    target: "_blank",
    rel: ["noopener", "noreferrer"],
  })
  .use(rehypeStringify);

export async function renderMarkdown(markdown: string): Promise<string> {
  const file = await processor.process(markdown);
  return String(file);
}
