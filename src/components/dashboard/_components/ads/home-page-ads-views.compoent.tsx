import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./_compoent/line-ads-placeholder.component";
import { HighlightedNewsPlaceholderCompoent } from "./_compoent/highlighted-news-placeholder.compoent";
import { SecondRowNewsPlaceholderComponent } from "./_compoent/second-row-news-placeholder.component";
import { ThirdRowNewsPlaceholderComponent } from "./_compoent/third-row-news-placeholder.component";
import { FeatureNewsPlaceholder } from "./_compoent/feature-news-placeholder";
import { FourthrowNewsCompometAfterFeatureNewsComponent } from "./_compoent/fourthrow-news-compomet-after-featureNews.component";
import { TrandingNewsPlaceholderComponent } from "./_compoent/tranding-news-placeholder.component";
import { CoverStoryNewsPlaceholderCompoent } from "./_compoent/cover-story-news-placeholder.compoent";
import { ProvinceNewsPlaceholderCompoent } from "./_compoent/province-news-placeholder.compoent";
import { MoreCommentedNewsPlaceholderComponent } from "./_compoent/more-commented-news-placeholder.component";
import { FooterPlaceholderCompoent } from "./_compoent/footer-placeholder.compoent";

export const HomePageAdsViewsCompoent = () => {
  return (
    <div className="w-full  mb-12">
      <Skeleton className="h-[155px] w-full flex justify-center items-center rounded-none">
        <p className="text-slate-500">Logo bar</p>
      </Skeleton>
      <Skeleton className="h-[60px] w-full  mt-1 flex justify-center items-center rounded-none">
        <p className="text-slate-500">Menu bar</p>
      </Skeleton>
      <div className="md:container">
        <LineAdsPlaceholderComponent />
        <HighlightedNewsPlaceholderCompoent />
        <hr className="mt-3 mb-3" />
        <LineAdsPlaceholderComponent />
        <HighlightedNewsPlaceholderCompoent />
        <hr className="mt-3 mb-3" />
        <SecondRowNewsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <ThirdRowNewsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <FeatureNewsPlaceholder />
        <hr className="mt-3 mb-3" />
        <LineAdsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <FourthrowNewsCompometAfterFeatureNewsComponent />
        <hr className="mt-3 mb-3" />
        <TrandingNewsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <CoverStoryNewsPlaceholderCompoent />
        <hr className="mt-3 mb-3" />
        <FeatureNewsPlaceholder />
        <hr className="mt-3 mb-3" />
        <ProvinceNewsPlaceholderCompoent />
        <hr className="mt-3 mb-3" />
        <ThirdRowNewsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <SecondRowNewsPlaceholderComponent />
        <hr className="mt-3 mb-3" />
        <MoreCommentedNewsPlaceholderComponent />
      </div>
      <FooterPlaceholderCompoent />
    </div>
  );
};
