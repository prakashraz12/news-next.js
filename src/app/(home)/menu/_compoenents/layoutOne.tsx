"use client";
import { useGetNewsByMenusMutation } from "@/(service)/api/news.api";
import { VarticalNewsCardCompoent } from "@/components/vartical-news-card.compoent";
import { News } from "@/types/newsTypes";
import { ChevronRight, NotebookPen } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { LayoutTwo } from "./layoutTwo";
import { FallbackNewsLayout } from "./fallback-news.layout";
interface NewsProps {
  submenu?: string;
  news: News[];
}

export const LayoutOne = () => {
  const [newsData, setMenuData] = useState<NewsProps[]>([]);
  const [allNewsData, setAllNewsData] = useState<News[]>([]);
  const params = useParams();
  const [menusIds, { data, isSuccess }] = useGetNewsByMenusMutation();
  const fetchNews = useCallback(async () => {
    if (params.id) {
      await menusIds({ menuId: params.id });
    }
  }, [params.id]);

  useEffect(() => {
    if (params?.id) {
      fetchNews();
    }
  }, [params?.id]);

  useEffect(() => {
    if (isSuccess) {
      if (data?.data?.isSubMenuNull === true) {
        setAllNewsData(data?.data?.data);
      } else {
        setMenuData(data?.data?.data);
      }
    }
  }, [isSuccess]);

  return (
    <div>
      {isSuccess && newsData?.length > 0 && (
        <div className="w-full">
          {isSuccess &&
            newsData?.map((news: any, index: number) => {
              if (news?.news?.length > 0) {
                if (index === 0) {
                  return (
                    <div key={index} className="md:container">
                      <div className="flex justify-between p-3 items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-orange-800">
                          {news.submenu}
                        </h1>
                        <div className="w-[30px] h-[30px] rounded-full bg-orange-800 flex justify-center items-center text-white">
                          <ChevronRight />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4  bg-orange-800">
                        <div className="md:col-span-6 overflow-hidden">
                          <img
                            src={news.news[0]?.bannerImage || "/no-photo.png"}
                            alt="news-image"
                            className={`w-full h-[300px] md:h-[500px]  ${news?.news[0]?.bannerImage ? "object-cover" : "object-contain"} object-center  ${news.news[0]?.bannerImage && "hover:scale-105 duration-500 ease-in-out"} ${!news.news[0]?.bannerImage && "opacity-20"}`}
                          />
                        </div>
                        <div className="md:col-span-6 flex items-center justify-around flex-col p-10  cursor-pointer">
                          <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
                            {news.news[0]?.newsTitle}
                          </h1>
                          <p className=" text-sm text-center text-white mt-5 line-clamp-4">
                            {news?.news[0]?.shortDescription}
                          </p>
                          <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2">
                            <NotebookPen size={"15px"} />
                            {news.news[0]?.owner?.fullName}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {news.news
                          .slice(1)
                          .map((item: NewsProps, index: number) => (
                            <div key={index}>
                              <VarticalNewsCardCompoent item={item} />
                            </div>
                          ))}
                      </div>
                    </div>
                  );
                } else {
                  return <LayoutTwo key={index} news={news} />;
                }
              }
            })}
        </div>
      )}

      {isSuccess && allNewsData?.length > 0 && (
        <FallbackNewsLayout allNewsData={allNewsData} />
      )}
    </div>
  );
};
