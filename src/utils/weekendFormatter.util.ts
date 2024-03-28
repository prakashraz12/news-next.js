import { nepaliWeekend } from "@/constant";

/**
 * Converts an English weekday to its corresponding Nepali translation.
 * @param {string} englishWeekday - The English weekday to be translated.
 * @returns {string} The corresponding Nepali translation of the provided English weekday.
 * @throws {Error} Throws an error if no corresponding Nepali translation is found.
 */

export const getNepaliWeekday = (englishWeekday: string): string => {
  const nepaliWeekday = nepaliWeekend[englishWeekday];
  if (!nepaliWeekday) {
    throw new Error(
      `No corresponding Nepali translation found for '${englishWeekday}'.`
    );
  }
  return nepaliWeekday;
};
