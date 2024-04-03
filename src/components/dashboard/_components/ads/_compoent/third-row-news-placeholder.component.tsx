import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";
import { LineNewsCardComponentPlaceHolder } from "./second-row-news-placeholder.component";

export const ThirdRowNewsPlaceholderComponent = () => {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between items-center">
        <Skeleton className="w-[300px] h-[80px]" />
        <div className="flex gap-2">
          <Skeleton className="w-[20px] h-[20px]" />
          <Skeleton className="w-[20px] h-[20px]" />
          <Skeleton className="w-[20px] h-[20px]" />
          <Skeleton className="w-[20px] h-[20px]" />
          <Skeleton className="w-[20px] h-[20px]" />
        </div>
        <Skeleton className="h-[30px] w-[30px] rounded-full" />
      </div>
      <Skeleton className="h-[300px] mt-5" />
      <LineAdsPlaceholderComponent />
      <hr className="mt-4 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-10">
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
        </div>
        <div className="flex flex-col gap-10">
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
        </div>
        <div className="flex flex-col gap-4">
          <LineAdsPlaceholderComponent className="w-[90%]  h-[200px]" />
          <LineAdsPlaceholderComponent className="w-[90%]  h-[200px]" />
          <LineAdsPlaceholderComponent className="w-[90%]  h-[200px]" />
        </div>
          </div>
          <hr className="mt-4 mb-4" />
          <LineAdsPlaceholderComponent/>
    </div>
  );
};
