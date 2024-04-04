import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";

export const TrandingNewsPlaceholderComponent = () => {
  return (
    <div className="w-full">
      <Skeleton className="h-[70px] w-[200px]" />
      <div className="grid grid-cols-2 w-full mt-5 gap-3">
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <Skeleton className="w-[90px] h-[90px]" />
          <div className="flex flex-col w-full gap-3">
            <Skeleton className="w-[90%] h-[20px]" />
            <Skeleton className="w-[90%] h-[20px]" />
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <LineAdsPlaceholderComponent />
    </div>
  );
};
