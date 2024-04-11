import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LineAdsPlaceholderComponent } from "./_compoent/line-ads-placeholder.component";
import { LineNewsCardComponentPlaceHolder } from "./_compoent/second-row-news-placeholder.component";
import { FooterPlaceholderCompoent } from "./_compoent/footer-placeholder.compoent";
import { Card } from "@/components/ui/card";
import { VarticalNewsCardPlaceholder } from "./_compoent/province-news-placeholder.compoent";

export const NewsDetailsPageAds = () => {
  return (
    <div className="w-full">
      {/* header */}
      <Skeleton className="h-[155px] w-full flex justify-center items-center rounded-none">
        <p className="text-slate-500">Logo bar</p>
      </Skeleton>
      <Skeleton className="h-[60px] w-full  mt-1 flex justify-center items-center rounded-none">
        <p className="text-slate-500">Menu bar</p>
      </Skeleton>
      <div className="md:container mt-3">
        <div className="flex justify-between">
          <Skeleton className="h-[60px] w-[40%]" />
          <Skeleton className="h-[60px] w-[10%]" />
        </div>
        <div className="grid grid-cols-12 mt-5 gap-6">
          <div className="col-span-1">
            {/* social media share */}
            <div className="flex flex-col gap-3">
              <Skeleton className="w-[70px] h-[70px] rounded-full" />
              <Skeleton className="w-[80px] h-[50px] " />
              <Skeleton className="w-[80px] h-[10px] " />
              <Skeleton className="w-[80px] h-[60px] " />
              <Skeleton className="w-[80px] h-[15px] " />
              <Skeleton className="w-[80px] h-[80px] rounded-full" />
              <Skeleton className="w-[80px] h-[80px] rounded-full" />
              <Skeleton className="w-[80px] h-[80px] rounded-full" />
            </div>
          </div>
          <div className="md:col-span-8 col-span-10 ">
            {/* mid container starts */}
            <div>
              <Skeleton className="w-full h-[400px] mb-3 mt-4" />
              <LineAdsPlaceholderComponent />
              <div className="flex flex-col gap-2 mt-5">
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-[80%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
                <Skeleton className="w-full h-[10px] mb-3" />
                <Skeleton className="w-[30%] h-[10px] mb-3" />
              </div>
              <hr className="mt-3 mb-4" />
              <div className="grid grid-cols-3 gap-3">
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
              <div className="mt-5">
                <Card className="p-4 h-[300px] flex justify-around items-center flex-col w-full">
                  <Skeleton className="w-[50%] h-[50px]" />
                  <div className="flex gap-6 flex-wrap w-full justify-around mt-6">
                    <Skeleton className="w-[50px] h-[50px] rounded-full" />
                    <Skeleton className="w-[50px] h-[50px] rounded-full" />
                    <Skeleton className="w-[50px] h-[50px] rounded-full" />
                    <Skeleton className="w-[50px] h-[50px] rounded-full" />
                    <Skeleton className="w-[50px] h-[50px] rounded-full" />
                  </div>
                </Card>
              </div>
              <div>
                <hr className="mb-5 mt-5" />
                <Skeleton className="w-[20%] h-[50px]" />
                <hr className="mb-5 mt-5" />
                <Card className="w-full h-[150px]" />
                <Skeleton className="w-[15%] h-[40px] mt-3" />
                <hr className="mb-5 mt-5" />
                <CommentCardPlaceholder />
                <CommentCardPlaceholder />
                <CommentCardPlaceholder />
                <div className="flex justify-center">
                  <Skeleton className="w-[200px] h-[40px] rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <hr />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <hr className="mt-5 mb-5" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
            <Skeleton className="w-[50%] h-[30px] rounded-md mt-5" />
            <hr className="mt-5 mb-5" />
            <div className="flex flex-col gap-4">
              <LineNewsCardComponentPlaceHolder />
              <LineNewsCardComponentPlaceHolder />
              <LineNewsCardComponentPlaceHolder />
              <hr className="mt-5 mb-5" />
              <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
              <LineAdsPlaceholderComponent className="w-[90%] h-[200px]" />
              <hr className="mt-5 mb-5" />
              <div>
                <Skeleton className="w-[200px] h-[50px]" />
                <div className="flex w-full gap-5 mt-5 mb-3">
                  <Skeleton className="w-[90px] h-[90px]" />
                  <div className="flex flex-col w-full gap-3">
                    <Skeleton className="w-[90%] h-[20px]" />
                    <Skeleton className="w-[90%] h-[20px]" />
                  </div>
                </div>
                <div className="flex w-full gap-5 mt-5 mb-3">
                  <Skeleton className="w-[90px] h-[90px]" />
                  <div className="flex flex-col w-full gap-3">
                    <Skeleton className="w-[90%] h-[20px]" />
                    <Skeleton className="w-[90%] h-[20px]" />
                  </div>
                </div>
                <div className="flex w-full gap-5 mt-5 mb-3">
                  <Skeleton className="w-[90px] h-[90px]" />
                  <div className="flex flex-col w-full gap-3">
                    <Skeleton className="w-[90%] h-[20px]" />
                    <Skeleton className="w-[90%] h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div className="w-full">
          <LineAdsPlaceholderComponent />
          <hr className="mt-5 mb-5" />
          <Skeleton className="w-[200px] h-[50px]"></Skeleton>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <VarticalNewsCardPlaceholder />
            <VarticalNewsCardPlaceholder />
            <VarticalNewsCardPlaceholder />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <LineAdsPlaceholderComponent className="h-[200px]"/>
            </div>
            <div>
              <LineAdsPlaceholderComponent className="h-[200px]"/>
            </div>
            <div>
              <LineAdsPlaceholderComponent className="h-[200px]"/>
            </div>
          </div>
        </div>
      </div>
      <FooterPlaceholderCompoent />
    </div>
  );
};

const CommentCardPlaceholder = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5">
        <div className="flex w-full gap-3">
          <Skeleton className="w-[50px] h-[50px] rounded-full" />
          <Card className="w-full p-5">
            <div className="flex gap-2 items-end">
              <Skeleton className="w-[30%] h-[20px]" />
              <Skeleton className="w-[10%] h-[10px]" />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[80%] h-[10px]" />
            </div>
            <div className="flex justify-end mt-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-[70px] h-[40px]" />
                <Skeleton className="w-[40px] h-[40px]" />
                <Skeleton className="w-[40px] h-[40px]" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
