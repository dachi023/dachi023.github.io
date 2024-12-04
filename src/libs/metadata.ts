import { Metadata } from "next";

export const baseUrl = "https://www.dachi.one";

const siteName = "dachi";

const ogImageUrl = `${baseUrl}/img/og.png`;

const base: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "",
    siteName,
    url: "",
    description: "",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    creator: "@dachi_023",
    images: [ogImageUrl],
  },
};

type MetaDataArgs = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata(
  { title, description, path }: MetaDataArgs = {
    title: "",
    description: "",
    path: "",
  },
  rest: Partial<Metadata> = {},
): Metadata {
  const url = path ? `${baseUrl}/${path}` : baseUrl;
  const metadata: Metadata = {
    ...base,
    title: title || base.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...base.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...base.twitter,
      title,
      description,
    },
    ...rest,
  };

  return metadata;
}
