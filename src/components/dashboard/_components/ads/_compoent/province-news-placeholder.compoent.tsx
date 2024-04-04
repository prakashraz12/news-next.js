import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineNewsCardComponentPlaceHolder } from "./second-row-news-placeholder.component";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";

export const ProvinceNewsPlaceholderCompoent = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <Skeleton className="w-[150px] h-[80px]" />
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
          <Skeleton className="w-[50px] h-[50px]" />
        </div>
        <div>
          <Skeleton className="w-[50px] h-[50px] rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <VarticalNewsCardPlaceholder />
        <VarticalNewsCardPlaceholder />
        <VarticalNewsCardPlaceholder />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
        </div>
        <div className="flex flex-col gap-4">
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
        </div>
        <div className="flex flex-col gap-4">
          <LineNewsCardComponentPlaceHolder />
          <LineNewsCardComponentPlaceHolder />
        </div>
      </div>
      <hr className="mt-3 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <LineAdsPlaceholderComponent className="h-[200px]" />
        </div>
        <div>
          <LineAdsPlaceholderComponent className="h-[200px]" />
        </div>
        <div>
          <LineAdsPlaceholderComponent className="h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export const VarticalNewsCardPlaceholder = () => {
  return (
    <div className="w-full h-[500px]">
      <Skeleton className="w-full h-[250px] bg-slate-500 rounded-none" />
      <div className="w-full flex flex-col gap-5 p-4 bg-slate-300">
        <div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[20px]" />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
