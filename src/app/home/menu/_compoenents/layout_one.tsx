"use client";
import { AdsViewComponent } from "@/components/ads-view.component";
import { SideBarAdsCompoent } from "@/components/news/side-bar-ads.compoent";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { VarticalNewsCardCompoent } from "@/components/vartical-news-card.compoent";
import { News } from "@/types/newsTypes";
import { ChevronRight, NotebookPen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface LayoutOneProps {
  news: {
    submenu: string;
    news: News[];
    subMenuId: string;
  };
}
export const LayoutOneComponent = ({ news }: LayoutOneProps) => {
  const router = useRouter();
  return (
    <div className="md:container mt-3 mb-3">
      <div className="flex justify-between mb-3 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-800 dark:text-white">
          {news?.submenu}
        </h1>
        <div className="w-[30px] h-[30px] rounded-full bg-orange-800 dark:bg-[#1e273b]  flex justify-center items-center text-white cursor-pointer">
          <Link href={`/home/submenu/${news?.subMenuId}`} aria-label="view  details page">
            <ChevronRight />
          </Link>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-4 cursor-pointer bg-orange-800 dark:bg-[#1e273b] rounded-sm"
        onClick={() => router.push(`/home/news/${news?.news[0]?._id}`)}
      >
        <div className="md:col-span-6 overflow-hidden">
          <img
            src={news?.news[0]?.bannerImage || "/no-photo.png"}
            alt="news-image"
            className={`w-full h-[300px] md:h-[500px]  ${news?.news[0]?.bannerImage ? "object-cover" : "object-contain"} object-center  ${news?.news[0]?.bannerImage && "hover:scale-105 duration-500 ease-in-out"} ${!news?.news[0]?.bannerImage && "opacity-20"}`}
          />
        </div>
        <div className="md:col-span-6 flex items-center justify-around flex-col p-10  cursor-pointer">
          <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
            {news?.news[0]?.newsTitle}
          </h1>
          <p className=" text-sm text-center text-white mt-5 line-clamp-4">
            {news?.news[0]?.shortDescription}
          </p>
          <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2">
            <NotebookPen size={"15px"} />
            {news?.news[0]?.owner?.fullName}
          </p>
        </div>
      </div>
      <div>
        <hr className="mt-2 mb-2" />
        <p className="text-sm text-center">Advertisment</p>
        <AdsViewComponent searchStatus="menu-1"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {news?.news.slice(1).map((item, index) => (
          <div key={index}>
            <VarticalNewsCardCompoent item={item} />
          </div>
        ))}
      </div>
      <div>
        <hr className="mt-2 mb-2" />
        <p className="text-sm text-center">Advertisment</p>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3">
        <SideBarAdsCompoent searchStatus="menu-b-1"/>
        <SideBarAdsCompoent searchStatus="menu-b-2"/>
        <SideBarAdsCompoent searchStatus="menu-b-3"/>
      </div>
    </div>
  );
};

export const LayoutOneLoading = () => {
  return (
    <div className="md:container mb-2">
    
      <Card className="p-0 w-full ">
        <div className="grid grid-cols-12 gap-5 w-full">
          <div className="col-span-12 md:col-span-6">
            <Skeleton className="w-full h-[200px] md:h-[450px]" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col items-center justify-around h-full p-4 gap-2">
              <Skeleton className="w-[50%] h-[30px] " />
              <div className="w-full flex flex-col items-center gap-2 justify-center">
                <Skeleton className="w-[90%] h-[5px] " />
                <Skeleton className="w-[100%] h-[5px] " />
                <Skeleton className="w-[80%] h-[5px] " />
                <Skeleton className="w-[90%] h-[5px] " />
                <Skeleton className="w-[60%] h-[5px] " />
              </div>
              <div className="w-full flex justify-center">
                <Skeleton className="w-[50%] h-[15px]" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className=" col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[200px] md:h-[400px]" />
        </div>
        <div className=" col-span-12 md:col-span-3">
          <Skeleton className="w-full  h-[200px] md:h-[400px]" />
        </div>
        <div className=" col-span-12 md:col-span-3">
          <Skeleton className="w-full  h-[200px] md:h-[400px]" />
        </div>
        <div className=" col-span-12 md:col-span-3">
          <Skeleton className="w-full  h-[200px] md:h-[400px]" />
        </div>
      </div>
    </div>
  );
};
