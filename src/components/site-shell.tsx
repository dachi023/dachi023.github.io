import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Posts", href: "/posts/" },
  { label: "Works", href: "/#works" },
];

function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1040px] items-center justify-between px-5 pt-5 md:px-10 md:pt-8">
      <Link
        href="/"
        className="bg-ink text-paper rounded-full px-4 py-2 text-[20px] font-black tracking-[0.02em] md:px-5 md:py-2.5 md:text-[26px]"
      >
        dachi
      </Link>
      <nav className="flex gap-1.5 text-[13px] font-bold tracking-[0.02em] md:gap-2 md:text-[15px]">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="border-ink bg-card hover:text-accent rounded-full border-2 px-3.5 py-2 md:px-[18px] md:py-2.5"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="/feed.xml"
          className="border-ink bg-life hover:text-accent hidden rounded-full border-2 px-3.5 py-2 md:block md:px-[18px] md:py-2.5"
        >
          RSS
        </a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="text-muted mx-auto mt-auto flex w-full max-w-[1040px] flex-col gap-2 px-5 pt-14 text-[12px] md:flex-row md:items-baseline md:justify-between md:px-10 md:pt-[72px] md:text-[13px]">
      <span>お問い合わせ・ご依頼は X の DM からお願いします。</span>
      <span className="font-bold tracking-[0.02em]">© dachi</span>
    </footer>
  );
}

export function SiteShell({
  children,
  dots = false,
}: {
  children: ReactNode;
  dots?: boolean;
}) {
  return (
    <div
      className={`bg-paper flex min-h-screen flex-col pb-14 md:pb-[72px] ${dots ? "dot-grid" : ""}`}
    >
      <SiteHeader />
      <main className="mx-auto mt-12 w-full max-w-[1040px] px-5 md:mt-[72px] md:px-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
