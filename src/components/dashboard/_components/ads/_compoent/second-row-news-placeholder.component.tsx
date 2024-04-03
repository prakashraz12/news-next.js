import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";

export const LineNewsCardComponentPlaceHolder = () => {
  return (
    <div className="flex gap-4 w-full">
      <div>
        {" "}
        <Skeleton className="h-[100px] w-[100px]"></Skeleton>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-[10px] w-full"></Skeleton>
        <Skeleton className="h-[10px] w-full"></Skeleton>
        <Skeleton className="h-[10px] w-full"></Skeleton>
        <Skeleton className="h-[10px] w-full"></Skeleton>
        <Skeleton className="h-[10px] w-full"></Skeleton>
      </div>
    </div>
  );
};

export const SecondRowNewsPlaceholderComponent = () => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
      <div>
        <Skeleton className="h-[400px] w-full" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <LineNewsCardComponentPlaceHolder />
        <LineNewsCardComponentPlaceHolder />
        <LineNewsCardComponentPlaceHolder />
        <Skeleton className="w-full h-10" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <LineAdsPlaceholderComponent className="h-[200px] w-[90%]" />
        <LineAdsPlaceholderComponent className="h-[200px]  w-[90%]" />
      </div>
    </div>
  );
};
