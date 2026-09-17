import type { ComponentProps } from "react";
import { cn } from "cn";

/**
 * `--radius` (20px) is the card radius of this design. Cards that use a
 * different corner — the post cards on mobile, the wide cards on desktop —
 * override it per usage.
 */
function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "border-ink bg-card text-card-foreground flex flex-col rounded-(--radius) border-2",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-bold", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

export { Card, CardTitle, CardContent, CardFooter };
