import React from "react";
import { VarticalNewsCardCompoent } from "../vartical-news-card.compoent";
import { numsFormatter } from "@/utils/number-formatter.util";
import { ChevronRight } from "lucide-react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { province } from "@/constant";

export const ProvinceNewsComponent = () => {
  return (
    <div className="p-3 mt-3">
      <div className="w-full flex justify-between mb-3">
        <h1 className="text-3xl  md:text-5xl font-bold text-green-800">
          प्रदेश समाचार
        </h1>
        <div>
          <ul className="gap-5 hidden md:flex">
            {province?.map((pr, index) => (
              <li
                key={index}
                className="p-2 bg-green-800 w-10 h-10 flex justify-center align-middle cursor-pointer rounded-sm text-xl font-medium text-white"
              >
                {numsFormatter(pr?.order)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-full p-2 bg-green-800 text-white">
          <ChevronRight />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <VarticalNewsCardCompoent />
        <VarticalNewsCardCompoent />
        <VarticalNewsCardCompoent />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
        <HorizontalNewsCard />
      </div>
    </div>
  );
};
