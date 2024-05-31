import { formatNepaliDate } from "./format-neplai-version-date.util";
import { numsFormatter } from "./number-formatter.util";

export const formatRelativeNepaliDate = (date: any): string => {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - date.getTime();
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedWeeks = Math.floor(elapsedDays / 7);
  const elapsedMonths = Math.floor(elapsedDays / 30);

  if (elapsedMonths >= 1) {
    return formatNepaliDate(date);
  } else if (elapsedWeeks >= 2) {
    return `${numsFormatter(elapsedWeeks)} 
    हप्ता अघि`;
  } else if (elapsedWeeks === 1) {
    return `${numsFormatter(1)} 
    हप्ता अघि`;
  } else if (elapsedDays >= 2) {
    return `${numsFormatter(elapsedDays)} दिन पहिले`;
  } else if (elapsedDays === 1) {
    return `${numsFormatter(1)} दिन पहिले`;
  } else if (elapsedHours >= 1) {
    return `${numsFormatter(elapsedHours)} घण्टा अघि`;
  } else if (elapsedMinutes >= 1) {
    return `${numsFormatter(elapsedMinutes)} मिनेट पहिले`;
  } else {
    return "भर्खरै";
  }
};
