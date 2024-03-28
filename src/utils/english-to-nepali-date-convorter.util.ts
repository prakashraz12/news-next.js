import NepaliDate from "nepali-date-converter";

/**
 * Converts an English date string in ISO 8601 format to a Nepali date string.
 * @param date The English date string (in ISO 8601 format).
 * @returns The corresponding Nepali date string.
 * @throws Error if the conversion fails.
 */
export const englishToNepaliDateConvorter = (date: Date): string => {
    try {
        const nepaliDate = new NepaliDate(date);
        const nepaliDateString = nepaliDate.toString();
        return nepaliDateString;
    } catch (error) {
        throw new Error(`Failed to convert the date to Nepali date`);
    }
};
