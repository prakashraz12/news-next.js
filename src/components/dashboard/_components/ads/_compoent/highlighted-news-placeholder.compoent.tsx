import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const HighlightedNewsPlaceholderCompoent = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center mt-2 p-7 items-center">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-[40%] mt-2" />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Skeleton className="h-10 w-10 mt-2 rounded-full" />
        <Skeleton className="h-5 w-[15%] mt-2" />
        <Skeleton className="h-5 w-5 mt-2 rounded-full" />
        <Skeleton className="h-5 w-[10%] mt-2" />
      </div>
      <Skeleton className="w-full h-[500px] rounded-sm mt-5" />
    </React.Fragment>
  );
};
