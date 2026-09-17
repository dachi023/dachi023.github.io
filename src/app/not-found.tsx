import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell dots>
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-start gap-6 py-10 md:py-16">
        <p className="text-faint text-[56px] leading-none font-black tracking-[0.02em] md:text-[72px]">
          404
        </p>
        <h1 className="text-[26px] leading-[1.5] font-bold tracking-[0.01em] md:text-[34px]">
          ページが見つかりませんでした
        </h1>
        <p className="text-muted text-[14px] leading-[1.9] md:text-[15px]">
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
