export const CATEGORIES = [
  "Motivation",
  "Life",
  "Success",
  "Wisdom",
  "Happiness",
  "Growth",
  "Friendship",
  "Love",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: Category;
}
