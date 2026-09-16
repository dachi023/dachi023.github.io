import { renderOgCard } from "@/components/og-card";

export const dynamic = "force-static";

export function GET() {
  return renderOgCard({
    title: "つくることと、伝えること。",
    meta: "www.dachi.one",
  });
}
