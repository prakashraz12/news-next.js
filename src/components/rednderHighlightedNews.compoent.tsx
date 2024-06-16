"use client";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import React, { useEffect, useState } from "react";
import { HighlightedTopNews } from "./news/highlighted-top.componet";
import { News } from "@/types/newsTypes";
import { Skeleton } from "./ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { cachedHighlightedNews } from "@/(store)/slices/cache.slice";
import { AdsViewComponent } from "./ads-view.component";

export const RednderHighlightedNews = () => {
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const cachedHightlighted = useSelector(
    (state: any) => state?.cache?.highlightedNews as News[]
  );
  const page = 0;
  const rowsPerPage = 3;
  const isHighlighted = true;
  const [
    searchparams,
    { data: newsDataFetched, isSuccess: isSuccessfullyFetched },
  ] = useGetNewsMutation();

  const fetchData = async () => {
    searchparams({ page, rowsPerPage, isHighlighted });
  };

  useEffect(() => {
    if (cachedHightlighted.length === 0) {
      fetchData();
    } else if (cachedHightlighted.length) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isSuccessfullyFetched) {
      dispatch(cachedHighlightedNews(newsDataFetched?.data));
      setIsLoading(false);
    }
  }, [isSuccessfullyFetched]);

  return (
    <>
      <AdsViewComponent searchStatus="highlightAds1" />
      {loading &&
        Array.from({ length: 3 }).map((_, index) => <Loading key={index} />)}
      {cachedHightlighted.length > 0 &&
        cachedHightlighted?.map((item, index) => (
          <HighlightedTopNews
            bannerImage={item?.bannerImage}
            title={item?.newsTitle}
            key={index}
            author={item?.owner}
            createTime={item?.createdAt}
            id={item?._id}
          />
        ))}
      <>
        <p className="text-sm font-extralight text-center">Advertisement</p>
        <AdsViewComponent searchStatus="highlightedAds2" />
      </>
    </>
  );
};

const Loading = () => {
  return (
    <div className="md:container p-4 flex flex-col items-center">
      <Skeleton className="w-[100%] h-[50px] md:h-[80px]" />
      <Skeleton className="w-[70%]  h-[50px] md:h-[80px] mt-5" />
      <div className="flex w-full justify-center items-center gap-4 mt-2">
        <Skeleton className="md:w-[70px] md:h-[70px]  w-[50px] h-[50px] rounded-full" />
        <Skeleton className="w-[20%] h-[1rem]" />
        <Skeleton className="w-[20px] h-[20px] rounded-full" />
        <Skeleton className="w-[10%] h-[1rem] " />
      </div>
      <Skeleton className="w-[100%] h-[300px] md:h-[450px] mt-6" />
    </div>
  );
};
