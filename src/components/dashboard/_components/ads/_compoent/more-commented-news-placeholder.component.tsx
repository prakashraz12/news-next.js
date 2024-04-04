import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";

export const MoreCommentedNewsPlaceholderComponent = () => {
  return (
    <div className="w-full">
      <Skeleton className="w-[20%] h-[90px]" />
      <hr className="mt-3 mb-3" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MoreCommentedNewsPlaceholder />
        <MoreCommentedNewsPlaceholder />
        <MoreCommentedNewsPlaceholder />
        <MoreCommentedNewsPlaceholder />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <div>
          <LineAdsPlaceholderComponent />
        </div>
        <div>
          <LineAdsPlaceholderComponent />
        </div>
        <div>
          <LineAdsPlaceholderComponent />
        </div>
      </div>
    </div>
  );
};

export const MoreCommentedNewsPlaceholder = () => {
  return (
    <div className="w-full flex gap-5 mt-3">
      <Skeleton className="w-[90px] h-[90px]" />
      <div className="flex flex-col w-full gap-3">
        <Skeleton className="w-full h-[10px]" />
        <Skeleton className="w-full h-[10px]" />
        <Skeleton className="w-full h-[10px]" />
        <Skeleton className="w-full h-[10px]" />
      </div>
    </div>
  );
};
