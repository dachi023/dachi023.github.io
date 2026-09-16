import { CATEGORY_LABELS, type Category } from "@/lib/categories";

const chipColors: Record<Category, string> = {
  life: "bg-life",
  work: "bg-work",
};

export function CategoryChip({ category }: { category: Category }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[12px] leading-normal font-medium ${chipColors[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
