import { clsx, type ClassValue } from "clsx";

/**
 * Merge conditional class names. Kept intentionally simple (no
 * tailwind-merge dependency) since the project avoids installing
 * libraries for functionality that's easy to implement directly.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
