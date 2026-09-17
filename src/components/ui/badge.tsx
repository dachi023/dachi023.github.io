import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * The base deliberately sets no `display`: the chips sit both inside flex rows
 * (where a `<span>` is blockified anyway) and inline in a line of text, and an
 * `inline-flex` box would sit on a different baseline in the second case.
 */
const badgeVariants = cva("shrink-0 rounded-full whitespace-nowrap", {
  variants: {
    variant: {
      life: "bg-life px-2.5 py-1 text-[12px] leading-normal font-medium",
      work: "bg-work px-2.5 py-1 text-[12px] leading-normal font-medium",
      ink: "bg-ink text-paper px-3 py-1 text-[12px] font-bold tracking-[0.02em] md:text-[13px]",
    },
  },
  defaultVariants: {
    variant: "life",
  },
});

function Badge({
  className,
  variant = "life",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
