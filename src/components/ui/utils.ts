import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/** @description safety merge classes without conflicts  */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
