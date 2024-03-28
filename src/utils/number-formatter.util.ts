import { numsObject } from "@/constant";

/**
 * Formats a number into a Nepali numeral string.
 * @param num The number to format.
 * @returns The formatted Nepali numeral string.
 * @throws Error if the input is not a valid number.
 */
export const numsFormatter = (num: number): string => {
  if (isNaN(num)) {
    throw new Error("Invalid input. Please provide a valid number.");
  }

  const numStr = num.toString();
  let nepaliNum = "";
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    nepaliNum += numsObject[digit] || digit;
  }
  return nepaliNum;
};
