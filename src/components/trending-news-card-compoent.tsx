import { numsFormatter } from "@/utils/number-formatter.util";
import React from "react";

interface TrendingNewsCardCompoentProps {
  newsOrder: number;
  newsTitle: string;
}

export const TrendingNewsCardCompoent: React.FC<TrendingNewsCardCompoentProps> = ({ newsOrder, newsTitle }: TrendingNewsCardCompoentProps) => {
  return (
    <React.Fragment>
      <div className="w-full flex items-start mt-2 md:p-3 sm:1 cursor-pointer">
        <div className="grid grid-cols-12 gap-2 w-full">
          <h1 className="md:text-5xl text-2xl font-bold rounded-sm bg-sky-800 hover:bg-slate-100 hover:text-sky-800 ease-in w-10 h-10 md:w-[60px] md:h-[60px] flex justify-center items-center text-white col-span-2">
            {numsFormatter(newsOrder)}
          </h1>
          <p className="md:text-xl sm:text-sm font-semibold hover:text-sky-800 ease-in col-span-10">
            {newsTitle}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};
