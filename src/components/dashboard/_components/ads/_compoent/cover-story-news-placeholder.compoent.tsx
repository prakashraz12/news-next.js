import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";

export const CoverStoryNewsPlaceholderCompoent = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-between items-center">
        <Skeleton className="w-[200px] h-[80px]" />
        <Skeleton className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <CoverStoryCardCompoent />
        <CoverStoryCardCompoent />
        <CoverStoryCardCompoent />
        <CoverStoryCardCompoent />
        <CoverStoryCardCompoent />
        <CoverStoryCardCompoent />
      </div>
      <hr className="mt-2 mb-2" />
      <div className="grid grid-cols-3 gap-3">
        <div>
          <LineAdsPlaceholderComponent className="w-full h-[200px]" />
        </div>
        <div>
          <LineAdsPlaceholderComponent className="w-full h-[200px]" />
        </div>
        <div>
          <LineAdsPlaceholderComponent className="w-full h-[200px]" />
        </div>
      </div>
    </div>
  );
};

const CoverStoryCardCompoent = () => {
  return (
    <div className="relative">
      <Skeleton className="w-full h-[500px] bg-slate-400" />
      <div className="bottom-0 absolute z-10 w-full">
        <Skeleton className="w-full h-[120px] bg-slate-100 rounded-none p-4 flex flex-col gap-2 justify-between">
          <Skeleton className="w-full h-[20px] bg-slate-600" />
          <Skeleton className="w-full h-[20px] bg-slate-600" />
          <Skeleton className="w-full h-[20px] bg-slate-600" />
        </Skeleton>
      </div>
    </div>
  );
};
