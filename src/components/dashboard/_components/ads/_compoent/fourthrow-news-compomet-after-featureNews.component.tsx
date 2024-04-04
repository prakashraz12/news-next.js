import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./line-ads-placeholder.component";
import { LineNewsCardComponentPlaceHolder } from "./second-row-news-placeholder.component";

export const FourthrowNewsCompometAfterFeatureNewsComponent = () => {
  return (
    <div className="w-full">
      <FourthrowNewsCompometAfterFeatureNewsComponentMainCard />
    </div>
  );
};

const FourthrowNewsCompometAfterFeatureNewsComponentMainCard = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 h-[400px] bg-slate-300">
      <div className="col-md-6">
        <Skeleton className="w-full h-full rounded-none"/>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <Skeleton className="w-full h-[30px]"/>
        <Skeleton className="w-full h-[30px]"/>
        <Skeleton className="w-full h-[30px]"/>
        <Skeleton className="w-full h-[30px]"/>
       <br/>
        <Skeleton className="w-full h-[20px]"/>
        <Skeleton className="w-full h-[20px]"/>
        <Skeleton className="w-full h-[20px]"/>
      </div>
      </div>
      <LineAdsPlaceholderComponent />
      <hr className="mt-3 mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-9">
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
        </div>
        <div  className="flex flex-col gap-9">
        <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
          <LineNewsCardComponentPlaceHolder/>
        </div>
        <div className="flex flex-col gap-4">
          <LineAdsPlaceholderComponent className="w-[90%] h-[200px]"/>
          <LineAdsPlaceholderComponent className="w-[90%] h-[200px]"/>
          <LineAdsPlaceholderComponent className="w-[90%] h-[200px]"/>
        </div>
      </div>
    </React.Fragment>
  );
};
