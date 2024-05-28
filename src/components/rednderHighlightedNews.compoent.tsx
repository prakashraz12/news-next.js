"use client";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import React, { useCallback, useEffect, useState } from "react";
import { HighlightedTopNews } from "./news/highlighted-top.componet";
import { News } from "@/types/newsTypes";

export const RednderHighlightedNews = () => {

  const [
    searchparams,
    { data: newsDataFetched, isSuccess: isSuccessfullyFetched },
  ] = useGetNewsMutation();

  const [newsData, setNewsData] = useState<News[]>([]);

  const fetchData = useCallback(async () => {
    searchparams({ page: 0, rowsPerPage: 2, isHighlighted: true });
  }, []);
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isSuccessfullyFetched) {
      setNewsData(newsDataFetched?.data);
    }
  }, [isSuccessfullyFetched]);

  return (
    <>
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
