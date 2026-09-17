import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  dots = false,
}: {
  children: ReactNode;
  dots?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-paper relative flex min-h-screen flex-col pb-14 md:pb-[72px]",
        dots && "dot-grid",
      )}
    >
      {/*
        Parked above the viewport instead of `sr-only`, so that showing it on
        focus never depends on which of two `position` utilities Tailwind emits
        last.
      */}
      <a
        href="#main"
        className="border-ink bg-card absolute top-3 left-3 z-50 -translate-y-24 rounded-full border-2 px-4 py-2.5 text-[14px] font-bold tracking-[0.02em] focus:translate-y-0"
      >
        本文へ移動
      </a>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto mt-12 w-full max-w-[1040px] px-5 md:mt-[72px] md:px-10"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
