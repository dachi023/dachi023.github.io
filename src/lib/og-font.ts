/**
 * Loads Zen Kaku Gothic New from Google Fonts for use with `next/og`.
 *
 * satori cannot read woff2, so the CSS API is asked with a legacy user agent,
 * which makes it answer with a TrueType URL. `text=` keeps the download to the
 * glyphs a given image actually needs, which matters a lot for Japanese.
 */
const LEGACY_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; WOW64)";

const MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 500;

export type FontWeight = 400 | 500 | 700 | 900;

const cache = new Map<string, Promise<ArrayBuffer>>();

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Google Fonts is only reachable over the network, so a single hiccup would
 * otherwise take the whole build down. Retries with a growing delay, then
 * rethrows: a failure here has to fail `next build` rather than quietly ship an
 * OG image with no glyphs in it.
 */
async function withRetry<T>(what: string, run: () => Promise<T>): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      return await run();
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await sleep(RETRY_BASE_DELAY_MS * 2 ** (attempt - 1));
      }
    }
  }

  throw new Error(
    `${what} failed after ${MAX_ATTEMPTS} attempts: ` +
      (lastError instanceof Error ? lastError.message : String(lastError)),
    { cause: lastError },
  );
}

async function fetchSubset(
  weight: FontWeight,
  characters: string,
): Promise<ArrayBuffer> {
  const url =
    "https://fonts.googleapis.com/css2" +
    `?family=Zen+Kaku+Gothic+New:wght@${weight}` +
    `&text=${encodeURIComponent(characters)}`;

  const css = await withRetry(
    `Google Fonts CSS request for weight ${weight}`,
    async () => {
      const response = await fetch(url, {
        headers: { "User-Agent": LEGACY_USER_AGENT },
      });
      if (!response.ok) {
        throw new Error(`responded ${response.status}`);
      }
      return response.text();
    },
  );

  const fontUrl = /src:\s*url\((https:[^)]+)\)/.exec(css)?.[1];
  if (!fontUrl) {
    throw new Error(
      `No font URL in Google Fonts response for weight ${weight}`,
    );
  }

  return withRetry(`Font download from ${fontUrl}`, async () => {
    const response = await fetch(fontUrl);
    if (!response.ok) {
      throw new Error(`responded ${response.status}`);
    }
    return response.arrayBuffer();
  });
}

export function loadFont(weight: FontWeight, text: string) {
  // Only the set of glyphs matters, so unrelated titles can share a download.
  const characters = [...new Set(text)].sort().join("");
  const key = `${weight}:${characters}`;

  let font = cache.get(key);
  if (!font) {
    font = fetchSubset(weight, characters);
    // A rejected promise must not stay cached, or one blip would poison every
    // later image that needs the same glyphs.
    font.catch(() => cache.delete(key));
    cache.set(key, font);
  }

  return font;
}
