"use client";
import { ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { AdsViewComponent } from "../ads-view.component";
import { useSelector } from "react-redux";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { AppSettingsPorps, Menu, News, SubMenu } from "@/types/newsTypes";
import { Skeleton } from "../ui/skeleton";

export const NarratorNewsCompoent = ({ item }: { item: Menu }) => {
  const appSettings = useSelector(({ app }: { app: AppSettingsPorps }) => {
    if ("appSettings" in app) {
      return app?.appSettings;
    }
  });

  const [newsData, setNewsData] = useState<News[]>([]);
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews, isLoading }] =
    useGetNewsMutation();

  const filterSubMenu = appSettings?.subMenus?.filter(
    (items: SubMenu) => items?.menu === item?._id
  );

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 4, menu: item?._id });
  }, [item?._id]);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      setNewsData(data?.data as News[]);
    }
  }, [isSuccessOnFetchedNews]);

  return (
    <>
      {isLoading && <Loading />}
      {isSuccessOnFetchedNews && newsData?.length > 0 && (
        <div className="w-full mt-10 p-3">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">
              {item?.menuTitle}
            </h1>
            <div>
              <ul className="gap-10 hidden md:flex">
                {filterSubMenu?.map((menu: SubMenu, index: number) => (
                  <li
                    className="text-md  font-bold text-slate-500 cursor-pointer hover:text-sky-800"
                    key={index}
                  >
                    {menu?.subMenuTitle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sky-800 rounded-full p-0.5 text-white cursor-pointer">
              <ChevronRight />
            </div>
          </div>
          <div className="md:hidden">
            <ul className="title-cat-menu">
              {filterSubMenu?.map((menu: SubMenu, index: number) => (
                <li key={index} className="font-bold">
                  <a href="">{menu.subMenuTitle}</a> |
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-8 relative cursor-pointer mb-2">
            <div className="overflow-hidden">
              <img
                src={newsData[0]?.bannerImage || "/no-photo.png"}
                alt="news-image"
                loading="lazy"
                className={`w-full h-[400px] ${newsData[0]?.bannerImage ? "object-cover" : "object-contain"}  rounded ${newsData[0]?.bannerImage && "hover:scale-105 duration-300 ease-out"} ${!newsData[0]?.bannerImage && "opacity-20"}`}
              />
            </div>
            <h1 className="md:text-5xl text-xl font-bold absolute bottom-0 left-0 w-full text-white text-center bg-sky-800 bg-opacity-40 p-4">
              {newsData[0]?.newsTitle}
            </h1>
          </div>
          <AdsViewComponent />
          <hr className="hidden md:block" />
          <div className="flex w-full sm:mt-1 md:mt-5">
            <div className="grid grid-cols-12 gap-2 mt-2">
              <div className="col-span-12 md:col-span-5 mt-2">
                {newsData.slice(0, 5).map((item, index) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-4 mt-2">
                {newsData.slice(0, 5).map((item, index) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-3 mt-2 flex flex-col items-center">
                <SideBarAdsCompoent />
                <SideBarAdsCompoent />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Loading = () => {
  return (
    <div className="md:container grid gap-5">
      <div className="flex w-full items-center">
        <Skeleton className="w-[20%] h-[50px]" />
        <div className="flex justify-center w-full gap-4">
          <Skeleton className="w-[10%] h-[10px]" />
          <Skeleton className="w-[10%] h-[10px]" />
          <Skeleton className="w-[10%] h-[10px]" />
        </div>
        <Skeleton className="w-[50px] h-[50px] rounded-full" />
      </div>
      <Skeleton className="w-[100%] h-[400px]" />
      <Skeleton className="w-[100%] h-[100px]" />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-5 flex flex-col gap-2">
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
          <Skeleton className="w-[100%] h-[100px]" />
        </div>
        <div className="col-span-3 flex flex-col gap-3">
          <Skeleton className="w-[100%] h-[200px]" />
          <Skeleton className="w-[100%] h-[200px]" />
        </div>
      </div>
    </div>
  );
};
