import { cva } from "class-variance-authority";

/**
 * Only the grouped form is used on this site, so the file keeps the shared
 * variants and `toggle-group.tsx` owns the component itself.
 *
 * `aria-pressed:hover:*` is spelled out so that the pressed colours win over
 * `hover:text-accent` on specificity rather than on rule order.
 *
 * No `outline-none` here: the focus ring lives in the base layer of
 * globals.css, and a utility-layer `outline-style: none` would win over it.
 */
const toggleVariants = cva(
  "cursor-pointer whitespace-nowrap disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        pill: "border-ink bg-card hover:text-accent aria-pressed:bg-ink aria-pressed:text-paper aria-pressed:hover:text-paper inline-flex items-center justify-center rounded-full border-2 font-bold tracking-wide",
      },
      /* Same pill metrics as `button.tsx`, so the filters line up with the nav. */
      size: {
        sm: "h-10 min-w-12 px-3.5 text-xs md:h-9 md:px-4 md:text-sm",
      },
    },
    defaultVariants: {
      variant: "pill",
      size: "sm",
    },
  },
);

export { toggleVariants };
