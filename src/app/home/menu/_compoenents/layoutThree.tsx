"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { VarticalNewsCardCompoent } from "@/components/vartical-news-card.compoent";
import { News } from "@/types/newsTypes";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface LayoutProps {
  news: {
    submenu: string;
    news: News[];
  };
}
export const LayoutThree = ({ news }: LayoutProps) => {
  return (
    <div className="md:container">
      <div className="flex justify-between mt-5 mb-5 items-center">
        <p className="text-3xl md:text-5xl font-bold dark:text-white text-sky-950">
          {news?.submenu}
        </p>
        <div className="w-10 h-10 bg-sky-950 text-white flex justify-center items-center rounded-full">
          <ChevronRight />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {news?.news[0]?.bannerImage && (
          <AspectRatio ratio={16 / 9}>
            <Image
              src={news?.news[0]?.bannerImage}
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        )}
        <p className=" text-xl md:text-5xl text-center text-sky-800 dark:text-white">{`"${news?.news[0]?.newsTitle}"`}</p>
        <p className="text-sm md:text-xl text-center line-clamp-3">
          {news?.news[0]?.shortDescription.slice(0, 300)}
        </p>
        <div className="flex items-center gap-3 justify-center">
          <Avatar>
            <AvatarImage src={news?.news[0]?.owner?.avatar} alt="owner" className="object-cover" />
            <AvatarFallback>
              {news?.news[0]?.owner?.fullName?.slice(1)}
            </AvatarFallback>
          </Avatar>
          <p>{news?.news[0]?.owner?.fullName}</p>
        </div>
        <hr className="mt-2 mb-2" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        {news?.news?.length > 1 &&
          news?.news?.slice(1)?.map((item, index) => (
            <div className="col-span-12 md:col-span-3" key={index}>
              <VarticalNewsCardCompoent item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export const LayoutThreeLoading = () => {
  return (
    <div className="md:container">
      <div className="flex justify-between mb-3">
        <Skeleton className="w-[20%] h-[70px]" />
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>
      <Skeleton className="w-full h-[450px]" />
      <div className="flex justify-center flex-col items-center w-full">
        <Skeleton className="w-[90%] h-[70px] mt-2" />
        <div className="w-full mt-3 flex flex-col gap-1 items-center">
          <Skeleton className="w-[100%] h-[10px]" />
          <Skeleton className="w-[90%] h-[10px]" />
          <Skeleton className="w-[70%] h-[10px]" />
          <Skeleton className="w-[90%] h-[10px]" />
          <div className="flex items-center w-full justify-center gap-3">
            <Skeleton className="w-[55px] h-[55px] rounded-full" />
            <Skeleton className="w-[20%] h-[10px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-4">
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[350px]" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[350px]" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[350px]" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[350px]" />
        </div>
      </div>
    </div>
  );
};
