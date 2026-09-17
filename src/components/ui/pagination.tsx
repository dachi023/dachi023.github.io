import type { ComponentProps } from "react";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";

/*
 * The shadcn/ui pagination, redrawn with this site's pills. The stock version
 * builds on `Button` with the `outline` / `ghost` variants and lucide chevrons;
 * neither exists here, so the links carry `buttonVariants` directly — the same
 * way the footer and the header draw their pills — and previous / next are
 * plain text.
 */
function Pagination({ className, ...props }: ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="ページ"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn(
        "flex flex-wrap items-center justify-center gap-1.5 md:gap-2",
        className,
      )}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = ComponentProps<"a"> & { isActive?: boolean };

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "pill-fill" : "pill",
          size: "sm",
        }),
        className,
      )}
      {...props}
    />
  );
}

/*
 * On the first and the last page the step is drawn as a `<span>` rather than a
 * disabled link: an `<a>` without `href` keeps its place in the tab order while
 * doing nothing, which is worse than not being reachable at all.
 *
 * Below `md` the steps show only their arrow, so the row of pills fits on one
 * line of a phone; `label` keeps the accessible name either way.
 */
function PaginationStep({
  className,
  disabled,
  label,
  dataSlot,
  children,
  ...props
}: PaginationLinkProps & {
  disabled?: boolean;
  label: string;
  dataSlot: string;
}) {
  if (disabled) {
    return (
      <span
        data-slot={dataSlot}
        aria-disabled="true"
        aria-label={label}
        className={cn(
          buttonVariants({ variant: "pill", size: "sm" }),
          "pointer-events-none opacity-40",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <PaginationLink
      data-slot={dataSlot}
      aria-label={label}
      className={className}
      {...props}
    >
      {children}
    </PaginationLink>
  );
}

type PaginationStepProps = Omit<
  ComponentProps<typeof PaginationStep>,
  "children" | "label" | "dataSlot"
> & { label?: string };

function PaginationPrevious({
  label = "前のページへ",
  ...props
}: PaginationStepProps) {
  return (
    <PaginationStep dataSlot="pagination-previous" label={label} {...props}>
      ←<span className="hidden md:inline">&nbsp;前へ</span>
    </PaginationStep>
  );
}

function PaginationNext({
  label = "次のページへ",
  ...props
}: PaginationStepProps) {
  return (
    <PaginationStep dataSlot="pagination-next" label={label} {...props}>
      <span className="hidden md:inline">次へ&nbsp;</span>→
    </PaginationStep>
  );
}

function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "text-faint flex h-10 w-6 items-center justify-center text-sm font-bold md:h-9",
        className,
      )}
      {...props}
    >
      …<span className="sr-only">さらにページ</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
