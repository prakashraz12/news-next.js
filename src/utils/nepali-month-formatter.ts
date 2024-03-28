import { neplaiMonthsMap } from "@/constant";

/**
 * Converts an English months to its corresponding Nepali translation.
 * @param {string} englishMonth - The English month to be translated.
 * @returns {string} The corresponding Nepali translation of the provided English month.
 * @throws {Error} Throws an error if no corresponding Nepali translation is found.
 */

export const getNepaliMonth = (englishMonth: string): string => {
  const neplaiMonth = neplaiMonthsMap[englishMonth];
  if (!neplaiMonth) {
    throw new Error(
      `No corresponding Nepali translation found for '${englishMonth}'.`
    );
  }
  return neplaiMonth;
};
