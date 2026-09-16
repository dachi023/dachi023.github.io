/**
 * Loads Zen Kaku Gothic New from Google Fonts for use with `next/og`.
 *
 * satori cannot read woff2, so the CSS API is asked with a legacy user agent,
 * which makes it answer with a TrueType URL. `text=` keeps the download to the
 * glyphs a given image actually needs, which matters a lot for Japanese.
 */
const LEGACY_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; WOW64)";

export type FontWeight = 400 | 500 | 700 | 900;

const cache = new Map<string, Promise<ArrayBuffer>>();

async function fetchSubset(
  weight: FontWeight,
  characters: string,
): Promise<ArrayBuffer> {
  const url =
    "https://fonts.googleapis.com/css2" +
    `?family=Zen+Kaku+Gothic+New:wght@${weight}` +
    `&text=${encodeURIComponent(characters)}`;

  const css = await fetch(url, {
    headers: { "User-Agent": LEGACY_USER_AGENT },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Google Fonts CSS request failed: ${response.status}`);
    }
    return response.text();
  });

  const fontUrl = /src:\s*url\((https:[^)]+)\)/.exec(css)?.[1];
  if (!fontUrl) {
    throw new Error(
      `No font URL in Google Fonts response for weight ${weight}`,
    );
  }

  const font = await fetch(fontUrl).then((response) => {
    if (!response.ok) {
      throw new Error(`Font download failed: ${response.status}`);
    }
    return response.arrayBuffer();
  });

  return font;
}

export function loadFont(weight: FontWeight, text: string) {
  // Only the set of glyphs matters, so unrelated titles can share a download.
  const characters = [...new Set(text)].sort().join("");
  const key = `${weight}:${characters}`;

  let font = cache.get(key);
  if (!font) {
    font = fetchSubset(weight, characters);
    cache.set(key, font);
  }

  return font;
}
