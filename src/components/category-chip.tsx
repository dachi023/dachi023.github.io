import { Badge } from "@/components/ui/badge";
import { CATEGORY_LABELS, type Category } from "@/lib/categories";

export function CategoryChip({ category }: { category: Category }) {
  return <Badge variant={category}>{CATEGORY_LABELS[category]}</Badge>;
}
