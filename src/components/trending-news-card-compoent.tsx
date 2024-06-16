import { numsFormatter } from "@/utils/number-formatter.util";
import { useRouter } from "next/navigation";
import React from "react";

interface TrendingNewsCardCompoentProps {
  newsOrder: number;
  newsTitle: string;
  id:string
}

export const TrendingNewsCardCompoent: React.FC<TrendingNewsCardCompoentProps> = ({ newsOrder, newsTitle, id }: TrendingNewsCardCompoentProps) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="w-[90%] flex items-start mt-2 md:p-2 p-1 cursor-pointer" onClick={()=>router.push(`/home/news/${id}`)}>
        <div className="grid grid-cols-12 md:gap-7 gap-3  w-full">
          <h1 className="md:text-3xl lg:text-5xl text-2xl font-bold rounded-sm bg-sky-800 hover:bg-slate-100 hover:text-sky-800 ease-in w-10 h-10 md:w-[50px] md:h-[50px] flex justify-center items-center text-white col-span-2">
            {numsFormatter(newsOrder)}
          </h1>
          <p className="line-clamp-3 md:text-xl sm:text-sm  hover:text-sky-800 ease-in col-span-10 w-full md:w-[90%]">
            {newsTitle}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};
