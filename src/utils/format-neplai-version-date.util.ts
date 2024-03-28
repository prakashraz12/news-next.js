import { englishToNepaliDateConvorter } from "./english-to-nepali-date-convorter.util";
import { getNepaliMonth } from "./nepali-month-formatter";
import { numsFormatter } from "./number-formatter.util";
import { getNepaliWeekday } from "./weekendFormatter.util";

/**
 * Formats the current date in Nepali.
 * @param {Date} date - The current date.
 * @returns {string} The formatted Nepali date string.
 * expected output  बिहिबार, १५ चैत २०८०
 */
export const formatNepaliDate = (date: Date): string => {
    const nepaliVersion = englishToNepaliDateConvorter(date);
    const nepaliDate = nepaliVersion.split(" ");
    const weekDay = getNepaliWeekday(nepaliDate[0]);
    const month = getNepaliMonth(nepaliDate[2]);
    const day = numsFormatter(parseFloat(nepaliDate[1]));
    const year = numsFormatter(parseFloat(nepaliDate[3]));
    return `${weekDay}, ${day} ${month} ${year}`;
};

