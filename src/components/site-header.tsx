"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Posts", href: "/posts/" },
  { label: "Works", href: "/#works" },
];

function isCurrent(href: string, pathname: string) {
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-5 md:px-10 md:pt-8">
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className="bg-ink text-paper inline-flex h-9 items-center rounded-full px-3.5 pb-1 text-lg leading-none font-black md:h-10 md:px-4 md:pb-1.5 md:text-2xl"
      >
        dachi
      </Link>
      <nav aria-label="メイン" className="flex gap-1.5 md:gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
            className={buttonVariants({ variant: "pill", size: "nav" })}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="/feed.xml"
          className={cn(
            buttonVariants({ variant: "pill-life", size: "nav" }),
            "hidden md:inline-flex",
          )}
        >
          RSS
        </a>
      </nav>
    </header>
  );
}
