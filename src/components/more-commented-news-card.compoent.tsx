import { News } from "@/types/newsTypes";
import { numsFormatter } from "@/utils/number-formatter.util";
import Link from "next/link";
import React from "react";

export const MoreCmmentedNewsCardCompoent = ({
  item,
  index,
}: {
  item: News;
  index: number;
}) => {
  return (
    <div className="col-span-12 md:col-span-4 w-full cursor-pointer ">
     <div className="flex w-full gap-3">
     <div className="relative col-span-2 min-w-10 min-h-10 md:w-[20px] md:h-[20px] mb-6 rounded-sm bg-sky-800 flex justify-center items-center">
        <div className="absolute md:w-[25px] md:h-[25px] w-5 h-5 left-[25%] bottom-[-15%] z-[-9] transform rotate-45 bg-sky-800"></div>
        <p className="text-2xl font-bold text-white">
          {numsFormatter(index + 1)}
        </p>
      </div>
      <div className="w-full">
        <p className="text-sm md:text-xl line-clamp-2 hover:text-sky-800  ease-in cursor-pointer ">
          <Link href={`/home/news/${item?._id}`}>{item?.newsTitle}</Link>
        </p>
      
      </div>
     </div>
      <hr />
    </div>
  );
};
