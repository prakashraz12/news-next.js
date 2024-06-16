"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { News } from "@/types/newsTypes";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { AdsViewComponent } from "@/components/ads-view.component";

interface LayoutTwoProps {
  news: {
    submenu: string;
    news: News[];
    subMenuId: string;
  };
}
export const LayoutTwo = ({ news }: LayoutTwoProps) => {
  const router = useRouter();
  return (
    <div className="w-full bg-sky-950 mb-4 dark:bg-[#1E273B]">
      <div className="md:container pr-16 pl-16 pt-3 pb-3 mt-6">
        <div className="pt-4 pb-4 flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">{news?.submenu}</h1>
          <div className="text-sky-900 cursor-pointer bg-white w-[30px] h-[30px] flex justify-center items-center rounded-full">
            <Link href={`/home/submenu/${news?.subMenuId}`}>
              <ChevronRight />
            </Link>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full/3"
        >
          <CarouselContent>
            {news?.news?.map((data, index) => (
              <CarouselItem
                onClick={() => {
                  router.push(`/news/${data?._id}`);
                }}
                key={index}
                className="sm:basic-1/1 md:basis-1/2 lg:basis-1/4 relative"
              >
                <div className="relative">
                  <Card className="border-none">
                    <CardContent className="w-full aspect-square h-full p-0 relative">
                      <img
                        src={data?.bannerImage || "/no-photo.png"}
                        alt="news-image"
                        className="w-full h-full object-cover rounded"
                      />
                      <span
                        className="text-xl font-semibold absolute bottom-0 left-0 p-2 w-full text-white rounded"
                        style={{
                          backgroundImage:
                            "linear-gradient(0deg, rgba(5,5,6,0.9528186274509804) 0%, rgba(94,84,84,0.5326505602240896) 32%, rgba(23,28,29,0.3337710084033614) 84%)",
                        }}
                      >
                        {data?.newsTitle}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="md:container p-2">
        <hr className="mt-2 mb-2" />
        <p className="text-sm text-center text-white">Advertisement</p>
        <AdsViewComponent searchStatus="menu-c-3"/>
      </div>
    </div>
  );
};

export const LayOutTwoLoading = () => {
  return (
    <div className="w-full bg-slate-200 p-5 ">
      <div className="md:container grid grid-cols-12 gap-3">
        <div className="col-span-1 hidden md:flex items-center">
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div className="col-span-12 md:col-span-3">
          <Skeleton className="w-full h-[300px]" />
        </div>
        <div className="col-span-1  hidden md:flex items-center">
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        </div>
      </div>
    </div>
  );
};
