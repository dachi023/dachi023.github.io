import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * The design only uses pills and one inline text link, so the stock variants
 * (default / outline / secondary / ghost / destructive / link) are replaced by
 * the ones this site actually draws.
 *
 * Links keep `buttonVariants` on a real `<a>` / `<Link>` instead of
 * `<Button render={<a />} nativeButton={false} />`: Base UI's Button puts
 * `role="button"` on whatever it renders, which would hide the link semantics.
 */
/*
 * No `outline-none` here: the focus ring lives in the base layer of
 * globals.css, and a utility-layer `outline-style: none` would win over it.
 */
const buttonVariants = cva(
  "shrink-0 whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        pill: "border-ink bg-card hover:text-accent inline-flex items-center justify-center rounded-full border-2 font-bold tracking-[0.02em]",
        "pill-fill":
          "border-ink bg-ink text-paper inline-flex items-center justify-center rounded-full border-2 font-bold tracking-[0.02em]",
        "pill-life":
          "border-ink bg-life hover:text-accent inline-flex items-center justify-center rounded-full border-2 font-bold tracking-[0.02em]",
        link: "text-accent font-bold tracking-[0.02em]",
      },
      size: {
        sm: "px-3.5 py-2 text-[13px] md:px-4 md:text-[14px]",
        nav: "px-3.5 py-2 text-[13px] md:px-[18px] md:py-2.5 md:text-[15px]",
        lg: "px-4 py-2.5 text-[14px] md:px-[18px] md:text-[15px]",
        text: "text-[14px] md:text-[15px]",
      },
    },
    defaultVariants: {
      variant: "pill",
      size: "lg",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
