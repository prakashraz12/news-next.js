import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const FeatureNewsPlaceholder = () => {
  return (
    <div className="w-full bg-slate-200 p-6">
      <Skeleton className="w-[200px] h-[60px]" />
      <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-4">
        <div className="flex gap-2 flex-row justify-center items-center">
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div>
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div>
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div className="flex gap-2 flex-row justify-center items-center">
          <Skeleton className="w-full h-[300px]" />
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        </div>
      </div>
    </div>
  );
};
