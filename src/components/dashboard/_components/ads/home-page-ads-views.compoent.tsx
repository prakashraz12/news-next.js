import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./_compoent/line-ads-placeholder.component";
import { HighlightedNewsPlaceholderCompoent } from "./_compoent/highlighted-news-placeholder.compoent";
import { SecondRowNewsPlaceholderComponent } from "./_compoent/second-row-news-placeholder.component";
import { ThirdRowNewsPlaceholderComponent } from "./_compoent/third-row-news-placeholder.component";
import { FeatureNewsPlaceholder } from "./_compoent/feature-news-placeholder";
import { FourthrowNewsCompometAfterFeatureNewsComponent } from "./_compoent/fourthrow-news-compomet-after-featureNews.component";

export const HomePageAdsViewsCompoent = () => {
  return (
    <div className="w-full md:container mb-5">
      <Skeleton className="h-[155px] w-full flex justify-center items-center">
        <p className="text-slate-500">Logo bar</p>
      </Skeleton>
      <Skeleton className="h-[60px] w-full  mt-1 flex justify-center items-center">
        <p className="text-slate-500">Menu bar</p>
      </Skeleton>
      <LineAdsPlaceholderComponent />
      <HighlightedNewsPlaceholderCompoent />
      <hr className="mt-3 mb-3" />
      <LineAdsPlaceholderComponent />
      <HighlightedNewsPlaceholderCompoent />
      <hr className="mt-3 mb-3" />
      <hr className="mt-3 mb-3" />
      <SecondRowNewsPlaceholderComponent />
      <hr className="mt-3 mb-3" />
      <ThirdRowNewsPlaceholderComponent />
      <hr className="mt-3 mb-3" />
      <FeatureNewsPlaceholder />
      <hr className="mt-3 mb-3" />
      <LineAdsPlaceholderComponent />
      <hr className="mt-3 mb-3" />
      <FourthrowNewsCompometAfterFeatureNewsComponent/>
    </div>
  );
};
