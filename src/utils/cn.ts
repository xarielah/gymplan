import { twMerge } from "tailwind-merge";

export default function cn(...classes: (string | undefined)[]): string {
  return twMerge(classes);
}
