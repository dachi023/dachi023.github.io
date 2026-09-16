import { ImageResponse } from "next/og";

import { CATEGORY_LABELS, type Category } from "@/lib/categories";
import { loadFont } from "@/lib/og-font";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#fbf6ec";
const INK = "#2b2622";
const FAINT = "#8a837b";
const CATEGORY_COLORS: Record<Category, string> = {
  life: "#f3c74a",
  work: "#b9e3dc",
};

/** Renders the shared Open Graph card: paper background, white panel, title. */
export async function renderOgCard({
  title,
  meta,
  category,
}: {
  title: string;
  meta: string;
  category?: Category;
}) {
  const chip = category ? CATEGORY_LABELS[category] : "";
  const [titleFont, metaFont, markFont] = await Promise.all([
    loadFont(700, title),
    loadFont(500, `${meta}${chip}`),
    loadFont(900, "dachi"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 56,
        background: PAPER,
        fontFamily: "ZenKakuTitle",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#ffffff",
          border: `6px solid ${INK}`,
          borderRadius: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 26px",
              borderRadius: 999,
              background: INK,
              color: PAPER,
              fontFamily: "ZenKakuMark",
              fontSize: 30,
            }}
          >
            dachi
          </div>
          {chip ? (
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                background: CATEGORY_COLORS[category!],
                color: INK,
                fontFamily: "ZenKakuMeta",
                fontSize: 26,
              }}
            >
              {chip}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 56 : 66,
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
          {meta}
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "ZenKakuTitle", data: titleFont, weight: 700, style: "normal" },
        { name: "ZenKakuMeta", data: metaFont, weight: 500, style: "normal" },
        { name: "ZenKakuMark", data: markFont, weight: 900, style: "normal" },
      ],
    },
  );
}
