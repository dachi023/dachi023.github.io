import fs from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

import type { Category } from "@/lib/categories";
import { loadFont } from "@/lib/og-font";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#fbf6ec";
const INK = "#2b2622";
const DOT = "#e8dcc6";

const WORDMARK = "dachi";

const CATEGORY_COLORS: Record<Category, string> = {
  life: "#f3c74a",
  work: "#b9e3dc",
};

/*
 * The paper texture the site draws with `radial-gradient`, which satori does
 * not understand. A 28px SVG tile at the same spacing repeats to the same
 * effect.
 */
const DOT_TILE = `data:image/svg+xml;base64,${Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">' +
    `<circle cx="14" cy="14" r="2" fill="${DOT}" /></svg>`,
).toString("base64")}`;

/*
 * satori cannot open a file, so the avatar is inlined. The build asks for it
 * once per image; reading it once for the whole run is 75 reads saved.
 */
let avatar: string | undefined;
function avatarDataUrl(): string {
  avatar ??= `data:image/jpeg;base64,${fs
    .readFileSync(path.join(process.cwd(), "src/assets/avatar.jpg"))
    .toString("base64")}`;
  return avatar;
}

/**
 * The dotted paper, edge to edge, with a band of colour along the bottom: the
 * category's on a post, the life yellow on the site card.
 */
function Frame({
  band,
  children,
  ...layout
}: {
  band: string;
  children: ReactNode;
  alignItems?: "center";
  justifyContent?: "center" | "space-between";
  padding?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: PAPER,
        backgroundImage: `url(${DOT_TILE})`,
        backgroundRepeat: "repeat",
        backgroundSize: "28px 28px",
        borderBottom: `24px solid ${band}`,
        ...layout,
      }}
    >
      {children}
    </div>
  );
}

/*
 * "dachi" has ascenders and no descenders, so a box centred on the em square
 * looks low. The padding is shifted up by the same share the header logo is.
 */
function Wordmark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        padding: `${Math.round(fontSize * 0.12)}px ${Math.round(fontSize * 0.5)}px ${Math.round(fontSize * 0.3)}px`,
        borderRadius: 999,
        background: INK,
        color: PAPER,
        fontFamily: "ZenKakuMark",
        fontSize,
        lineHeight: 1.2,
      }}
    >
      {WORDMARK}
    </div>
  );
}

function Avatar({ size, shadow }: { size: number; shadow?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={avatarDataUrl()}
      alt=""
      width={size}
      height={size}
      style={{
        borderRadius: Math.round(size * 0.2),
        border: `${size > 100 ? 6 : 4}px solid ${INK}`,
        ...(shadow ? { boxShadow: `${shadow}px ${shadow}px 0 ${INK}` } : {}),
      }}
    />
  );
}

/**
 * Renders the Open Graph card of the site itself: just the avatar. The name is
 * already in the title of every link preview, so the card does not repeat it.
 */
export function renderSiteOgCard() {
  return new ImageResponse(
    <Frame
      band={CATEGORY_COLORS.life}
      alignItems="center"
      justifyContent="center"
    >
      <Avatar size={300} shadow={14} />
    </Frame>,
    OG_SIZE,
  );
}

/**
 * satori clips rather than shrinks, and three lines is what the space below
 * the byline holds at the larger size, so a long title is set smaller instead.
 */
function titleFontSize(title: string): number {
  return title.length > 20 ? 72 : 80;
}

/**
 * Renders the Open Graph card of one post: the avatar and the wordmark as a
 * byline in the top left, and the title below. The band along the bottom
 * carries the category.
 */
export async function renderPostOgCard({
  title,
  category,
}: {
  title: string;
  category: Category;
}) {
  const [titleFont, markFont] = await Promise.all([
    loadFont(700, title),
    loadFont(900, WORDMARK),
  ]);

  return new ImageResponse(
    <Frame band={CATEGORY_COLORS[category]} padding="64px 88px 72px">
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Avatar size={72} />
        <Wordmark fontSize={32} />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          fontFamily: "ZenKakuTitle",
          fontSize: titleFontSize(title),
          lineHeight: 1.35,
          color: INK,
        }}
      >
        {title}
      </div>
    </Frame>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "ZenKakuTitle", data: titleFont, weight: 700, style: "normal" },
        { name: "ZenKakuMark", data: markFont, weight: 900, style: "normal" },
      ],
    },
  );
}
