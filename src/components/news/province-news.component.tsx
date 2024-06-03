"use client";
import React, { useCallback, useEffect, useState } from "react";
import { VarticalNewsCardCompoent } from "../vartical-news-card.compoent";
import { numsFormatter } from "@/utils/number-formatter.util";
import { ChevronRight } from "lucide-react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { province } from "@/constant";
import { News } from "@/types/newsTypes";
import { useGetNewsMutation } from "@/(service)/api/news.api";

export const ProvinceNewsComponent = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews }] =
    useGetNewsMutation();

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 4, isShowNewsOnProvince: true });
  }, []);
  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      setNewsData(data?.data as News[]);
    }
  }, [isSuccessOnFetchedNews]);

  return (
    <div className="p-3 mt-3">
      <div className="w-full flex justify-between mb-2 md:mb-3 items-center">
        <h1 className="text-3xl  md:text-5xl font-bold text-green-800">
          प्रदेश समाचार
        </h1>
        <div>
          <ul className="gap-2 hidden md:flex">
            {province?.map((pr, index) => (
              <li
                key={index}
                className="p-2 bg-green-800 w-12 h-12 flex justify-center align-middle cursor-pointer rounded-full text-xl font-medium text-white"
              >
                {numsFormatter(pr?.order)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-full md:p-2 p-1 w-10 h-10 bg-green-800 text-white flex justify-center items-center">
          <ChevronRight />
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex whitespace-nowrap gap-3 w-full overflow-x-auto overflow-y-hidden">
          {province?.map((pr, index) => (
            <li key={index} className="whitespace-nowrap w-full">
              {pr.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsData
          ?.slice(0, 3)
          .map((item, index) => (
            <VarticalNewsCardCompoent key={index} item={item} type="province" />
          ))}
        {newsData?.map((item, index) => (
          <HorizontalNewsCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
