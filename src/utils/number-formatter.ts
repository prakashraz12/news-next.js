import { numsObject } from "@/constant";

export const NumsFormatter = (num: number) => {
  const numStr = num.toString();
  let nepaliNum = "";

  for (let i = 0; i < numStr.length; i++) {
    const degit = numStr[i];
    nepaliNum += numsObject[degit] || degit;
  }
  return nepaliNum;
};
