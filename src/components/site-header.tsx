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
    <header className="mx-auto flex w-full max-w-[1040px] items-center justify-between px-5 pt-5 md:px-10 md:pt-8">
      <Link
        href="/"
        aria-current={pathname === "/" ? "page" : undefined}
        className="bg-ink text-paper inline-flex h-10 items-center rounded-full px-4 text-[20px] leading-none font-black tracking-[0.02em] md:h-11 md:px-5 md:text-[26px]"
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
