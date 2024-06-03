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
    <div className="grid grid-cols-12 w-full cursor-pointer">
      <div className="relative col-span-2 w-10 h-10 md:w-20 md:h-20 mb-6 rounded-sm bg-sky-800 flex justify-center items-center">
        <div className="absolute md:w-[25px] md:h-[25px] w-5 h-5 left-[25%] bottom-[-15%] z-[-9] transform rotate-45 bg-sky-800"></div>
        <p className="text-4xl font-bold text-white">
          {numsFormatter(index + 1)}
        </p>
      </div>
      <div className="col-start-3 col-span-10">
        <p className="text-sm md:text-xl line-clamp-2 hover:text-sky-800 hover:font-bold ease-in cursor-pointer">
          <Link href={`/home/news/${item?._id}`}>{item?.newsTitle}</Link>
        </p>
        <div className="w-full flex justify-end">
          <p className="text-sm  bg-red-700 text-white  rounded-sm p-1">
            {item?.owner?.fullName}
          </p>
        </div>
      </div>
    </div>
  );
};
