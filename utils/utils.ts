import { twMerge } from "tailwind-merge";
import { clsx, ClassArray } from "clsx";

const addSpace = (value: string) => value.replace(/\d{4}(?=.)/g, "$& ");
const removeNonNumeric = (value: string) => value.replace(/[^0-9]/g, "");

export function formatToCardNumber(value: string) {
  return addSpace(removeNonNumeric(value)).substring(0, 19);
}

export function formatToCVV(value: string) {
  return removeNonNumeric(value).substring(0, 3);
}

export function cn(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}
