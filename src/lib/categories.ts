export const CATEGORY_LABELS = {
  life: "生活",
  work: "仕事",
} as const;

export type Category = keyof typeof CATEGORY_LABELS;
