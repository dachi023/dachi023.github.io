import { renderSiteOgCard } from "@/components/og-card";

export const dynamic = "force-static";

export function GET() {
  return renderSiteOgCard();
}
