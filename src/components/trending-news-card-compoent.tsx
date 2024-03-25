import { NumsFormatter } from "@/utils/number-formatter";
import React from "react";

interface TrendingNewsCardCompoentProps {
  newsOrder: number;
  newsTitle: string;
}
export const TrendingNewsCardCompoent: React.FC<
  TrendingNewsCardCompoentProps
> = ({ newsOrder, newsTitle }: TrendingNewsCardCompoentProps) => {
  return (
    <React.Fragment>
      <div className="w-full flex  items-start mt-2  md:p-3 sm:1 cursor-pointer">
        <div className="flex w-full  md:gap-5 gap-2">
          <h1 className="md:text-5xl sm:text-2xl font-bold rounded-sm bg-sky-800 hover:bg-slate-100 hover:text-sky-800 ease-in  w-[60px] h-[60px] flex justify-center items-center text-white ">
            {NumsFormatter(newsOrder)}
          </h1>
          <p className="md:text-xl sm:text-sm font-semibold  hover:text-sky-800 ease-in">{newsTitle}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
};
