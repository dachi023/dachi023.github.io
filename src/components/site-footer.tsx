import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/lib/site";

/*
 * The social links live here rather than on the home page, so that every page
 * carries them. The footer stays flat on purpose: a dashed rule and the muted
 * type are all that separate it from the page above.
 */
export function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-[1040px] flex-col gap-5 px-5 pt-10 md:px-10 md:pt-14">
      <div className="border-rule flex flex-col gap-5 border-t-2 border-dashed pt-8 md:flex-row md:items-center md:justify-between md:gap-8">
        <span className="text-muted text-[12px] md:text-[13px]">
          連絡はXのDMからお願いします。
        </span>
        <nav aria-label="ソーシャル" className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "pill", size: "sm" })}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <span className="text-muted text-[12px] font-bold tracking-[0.02em] md:text-[13px]">
        © dachi
      </span>
    </footer>
  );
}
