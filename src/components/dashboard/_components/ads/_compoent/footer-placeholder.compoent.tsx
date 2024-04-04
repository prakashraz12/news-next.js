import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const FooterPlaceholderCompoent = () => {
  return (
    <div className="w-full bg-slate-400 mt-5 p-5 mb-12">
      <div className="grid grid-cols-3">
        <div>
          <Skeleton className="w-[150px] h-[50px]" />
          <div className="flex flex-col gap-3 mt-5">
            <Skeleton className="w-[200px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
          </div>
              </div>
              <div>
          <Skeleton className="w-[100px] h-[50px]" />
          <div className="flex flex-col gap-3 mt-5">
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
          </div>
              </div>
              <div>
          <Skeleton className="w-[100px] h-[50px]" />
          <div className="flex flex-col gap-3 mt-5">
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
            <Skeleton className="w-[150px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
