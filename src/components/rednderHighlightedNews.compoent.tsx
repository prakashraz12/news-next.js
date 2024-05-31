"use client";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import React, { useEffect, useState } from "react";
import { HighlightedTopNews } from "./news/highlighted-top.componet";
import { News } from "@/types/newsTypes";
import { Skeleton } from "./ui/skeleton";

export const RednderHighlightedNews = () => {
  const page = 0;
  const rowsPerPage = 3;
  const isHighlighted = true;
  const [
    searchparams,
    { data: newsDataFetched, isSuccess: isSuccessfullyFetched, isLoading },
  ] = useGetNewsMutation();

  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      searchparams({ page, rowsPerPage, isHighlighted });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isSuccessfullyFetched) {
      setNewsData(newsDataFetched?.data);
    }
  }, [isSuccessfullyFetched]);

  return (
    <>
      {isLoading &&
        Array.from({ length: 3 }).map((_, index) => <Loading key={index} />)}
      {isSuccessfullyFetched &&
        newsData?.map((item, index) => (
          <HighlightedTopNews
            bannerImage={item?.bannerImage}
            title={item?.newsTitle}
            key={index}
            author={item?.owner}
            createTime={item?.createdAt}
            id={item?._id}
          />
        ))}
    </>
  );
};

const Loading = () => {
  return (
    <div className="md:container p-4 flex flex-col items-center">
      <Skeleton className="w-[100%] h-[80px]" />
      <Skeleton className="w-[70%] h-[80px] mt-5" />
      <div className="flex w-full justify-center items-center gap-4 mt-2">
        <Skeleton className="w-[70px] h-[70px] rounded-full" />
        <Skeleton className="w-[20%] h-[1rem] " />
        <Skeleton className="w-[20px] h-[20px] rounded-full" />
        <Skeleton className="w-[10%] h-[1rem] " />
      </div>
      <Skeleton className="w-[100%] h-[450px] mt-6" />
    </div>
  );
};
