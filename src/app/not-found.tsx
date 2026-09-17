import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell dots>
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-6 py-10 md:py-16">
        <p className="text-faint text-5xl leading-none font-black tracking-wide md:text-6xl">
          404
        </p>
        <h1 className="text-2xl leading-normal font-bold md:text-3xl">
          ページが見つかりませんでした
        </h1>
        <p className="text-muted text-sm leading-loose">
          URL が変わったか、削除された可能性があります。
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/" className={buttonVariants({ variant: "pill" })}>
            ← トップへ戻る
          </Link>
          <Link href="/posts/" className={buttonVariants({ variant: "pill" })}>
            記事一覧
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
