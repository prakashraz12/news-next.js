"use client";
import React, { useCallback, useEffect, useState } from "react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { Button } from "../ui/button";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { Menu, News } from "@/types/newsTypes";
import { AdsViewComponent } from "../ads-view.component";
import { useRouter } from "next/navigation";
interface NewsModalComponentProps {
  item?: Menu;
}

export const NewsModalComponent = ({ item }: NewsModalComponentProps) => {
  const router = useRouter();
  const [newsData, setNewsData] = useState<News[]>([]);
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews }] =
    useGetNewsMutation();

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
    <React.Fragment>
      {isSuccessOnFetchedNews && newsData.length > 0 && (
        <>
          <div className="w-full mb-3 p-3">
            <h1 className="text-5xl font-bold text-sky-800">
              {item?.menuTitle}
            </h1>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-3">
            <div
              className="relative overflow-hidden rounded-md"
              onClick={() => {
                router.push(`/home/news/${newsData[0]?._id}`);
              }}
            >
              <img
                src={newsData[0]?.bannerImage || "/no-photo.png"}
                alt="news-image"
                loading="lazy"
                className={`w-full rounded ${newsData[0]?.bannerImage ? "object-cover" : "object-contain"} min-h-96 h-full ${newsData[0]?.bannerImage && "transition-transform transform duration-500 hover:scale-105  ease-in cursor-pointer"} ${!newsData[0]?.bannerImage && "opacity-20"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent cursor-pointer "></div>
              <p className="text-xl font-bold absolute bottom-7 w-full flex  items-center  h-16 text-white left-3">
                <span>{newsData[0]?.newsTitle}</span>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {newsData
                ?.slice(1)
                ?.map((item, index) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}

              <Button className="bg-sky-800 text-xl ">थप समाचार</Button>
            </div>
            <div className=" flex-col hidden md:flex w-full">
              <SideBarAdsCompoent />
              <SideBarAdsCompoent />
            </div>
          </div>
          <hr className="mb-3 mt-3" />
          <p className="text-sm text-center">Advertisement</p>
          <AdsViewComponent />
        </>
      )}
    </React.Fragment>
  );
};
