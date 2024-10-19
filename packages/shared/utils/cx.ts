import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cx = (...args: ClassValue[]) => twMerge(clsx(...args));
