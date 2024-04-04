"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { formatNepaliDate } from "@/utils/format-neplai-version-date.util";

const todayDate = new Date();
interface PopUpAdsOnDetailsPageProps {
    setIsAdsShown: React.Dispatch<React.SetStateAction<boolean>>;
  }
export const PopUpAdsOnDetailsPage = ({
  setIsAdsShown,
}: PopUpAdsOnDetailsPageProps) => {
  return (
    <div className="w-full fixed bg-slate-200 h-screen z-50 top-0 overflow-hidden flex justify-center items-center flex-col transition-all ease-in-out duration-1000">
      <div className="flex flex-col mb-5">
        <h1 className="text-5xl text-sky-900 font-bold">नेपाल खबर</h1>
        <p className="text-sm text-sky-900 text-end">
          {formatNepaliDate(todayDate)}
        </p>
      </div>
      <div className="w-full md:w-[500px] h-[300px]  relative">
        <img
          src="https://www.onlinekhabar.com/wp-content/uploads/2024/04/850_450.png"
                  className="aspect-video sm:w-full h-full"
                  loading="lazy"
        />
        <Badge className="bg-red-600 absolute top-[-40px] right-0 p-2 cursor-pointer" onClick={()=>{setIsAdsShown(false)}}>
          SKIP THIS ADS
        </Badge>
      </div>
    </div>
  );
};
