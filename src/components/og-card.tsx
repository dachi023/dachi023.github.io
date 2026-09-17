import fs from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

import { CATEGORY_LABELS, type Category } from "@/lib/categories";
import { loadFont } from "@/lib/og-font";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#fbf6ec";
const INK = "#2b2622";
const FAINT = "#8a837b";
const DOT = "#e8dcc6";

const WORDMARK = "dachi";
const DOMAIN = "dachi.one";

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

/** Paper, dots, and the white panel every card is drawn inside. */
function Frame({
  children,
  ...panel
}: {
  children: ReactNode;
  flexDirection?: "row" | "column";
  alignItems?: "center";
  justifyContent?: "center" | "space-between";
  gap?: number;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 56,
        background: PAPER,
        backgroundImage: `url(${DOT_TILE})`,
        backgroundRepeat: "repeat",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          padding: 56,
          background: "#ffffff",
          border: `6px solid ${INK}`,
          borderRadius: 40,
          ...panel,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Wordmark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        padding: `${Math.round(fontSize * 0.2)}px ${Math.round(fontSize * 0.5)}px`,
        borderRadius: 999,
        background: INK,
        color: PAPER,
        fontFamily: "ZenKakuMark",
        fontSize,
      }}
    >
      {WORDMARK}
    </div>
  );
}

/** Renders the Open Graph card of the site itself: the avatar and the name. */
export async function renderSiteOgCard() {
  const [markFont, metaFont] = await Promise.all([
    loadFont(900, WORDMARK),
    loadFont(500, DOMAIN),
  ]);

  return new ImageResponse(
    <Frame alignItems="center" justifyContent="center" gap={64}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarDataUrl()}
        alt=""
        width={300}
        height={300}
        style={{ borderRadius: 24, border: `6px solid ${INK}` }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <Wordmark fontSize={72} />
        <div
          style={{
            display: "flex",
            paddingLeft: 8,
            fontFamily: "ZenKakuMeta",
            fontSize: 32,
            color: FAINT,
          }}
        >
          {DOMAIN}
        </div>
      </div>
    </Frame>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "ZenKakuMark", data: markFont, weight: 900, style: "normal" },
        { name: "ZenKakuMeta", data: metaFont, weight: 500, style: "normal" },
      ],
    },
  );
}

/**
 * satori clips rather than shrinks, and three lines is all the panel holds, so
 * a long title is set smaller instead.
 */
function titleFontSize(title: string): number {
  return title.length > 18 ? 56 : 66;
}

/** Renders the Open Graph card of one post. */
export async function renderPostOgCard({
  title,
  date,
  category,
}: {
  title: string;
  date: string;
  category: Category;
}) {
  const chip = CATEGORY_LABELS[category];
  const [titleFont, markFont, metaFont] = await Promise.all([
    loadFont(700, title),
    loadFont(900, WORDMARK),
    loadFont(500, `${chip}${date}${DOMAIN}`),
  ]);

  return new ImageResponse(
    <Frame flexDirection="column" justifyContent="space-between" gap={40}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarDataUrl()}
          alt=""
          width={72}
          height={72}
          style={{ borderRadius: 16, border: `4px solid ${INK}` }}
        />
        <Wordmark fontSize={30} />
        <div
          style={{
            display: "flex",
            padding: "10px 24px",
            borderRadius: 999,
            background: CATEGORY_COLORS[category],
            color: INK,
            fontFamily: "ZenKakuMeta",
            fontSize: 26,
          }}
        >
          {chip}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "ZenKakuMeta",
            fontSize: 26,
            color: FAINT,
          }}
        >
          {date}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "ZenKakuTitle",
          fontSize: titleFontSize(title),
          lineHeight: 1.4,
          letterSpacing: "0.01em",
          color: INK,
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "ZenKakuMeta",
          fontSize: 26,
          color: FAINT,
        }}
      >
        {DOMAIN}
      </div>
    </Frame>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "ZenKakuTitle", data: titleFont, weight: 700, style: "normal" },
        { name: "ZenKakuMark", data: markFont, weight: 900, style: "normal" },
        { name: "ZenKakuMeta", data: metaFont, weight: 500, style: "normal" },
      ],
    },
  );
}
