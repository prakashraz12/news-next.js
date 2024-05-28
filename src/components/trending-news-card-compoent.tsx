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
      <div className="w-full flex items-start mt-2 md:p-3 p-1 cursor-pointer" onClick={()=>router.push(`/news/${id}`)}>
        <div className="grid grid-cols-12 md:gap-8 gap-3  w-full">
          <h1 className="md:text-5xl text-2xl font-bold rounded-sm bg-sky-800 hover:bg-slate-100 hover:text-sky-800 ease-in w-10 h-10 md:w-[60px] md:h-[60px] flex justify-center items-center text-white col-span-2">
            {numsFormatter(newsOrder)}
          </h1>
          <p className="line-clamp-3 md:text-xl sm:text-sm font-semibold hover:text-sky-800 ease-in col-span-10">
            {newsTitle}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};
