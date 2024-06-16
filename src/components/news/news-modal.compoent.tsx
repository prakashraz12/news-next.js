"use client";
import React, { useCallback, useEffect } from "react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { Button } from "../ui/button";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { Menu, News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setRowsNews } from "@/(store)/slices/cache.slice";
interface NewsModalComponentProps {
  item: Menu;
}

export const NewsModalComponent = ({ item }: NewsModalComponentProps) => {
  const router = useRouter();
  const news = useSelector((state: any) => state.cache.rows);
  const dispatch = useDispatch();
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews, isLoading }] =
    useGetNewsMutation();

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 4, menu: item?._id });
  }, [item?._id]);

  useEffect(() => {
    if (news?.length === 0 || !news[item?._id]) {
      fetchNews();
    }
  }, [news]);

  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      const newData: any = {
        [item._id]: data?.data as News[],
      };
      dispatch(setRowsNews(newData));
    }
  }, [isSuccessOnFetchedNews]);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {news && news[item._id]?.length > 0 && (
        <>
          <div className="w-full pt-2 pb-3 p-2">
            <h1 className="text-2xl md:text-4xl  ld:text-5xl font-bold text-sky-800 dark:text-white">
              {item?.menuTitle}
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-3 p-2">
            <div
              className="relative overflow-hidden rounded-md col-span-12 lg:col-span-5"
              onClick={() => {
                router.push(`/home/news/${news[item._id][0]?._id}`);
              }}
            >
              <img
                src={news[item._id][0]?.bannerImage || "/no-photo.png"}
                alt="news-image"
                loading="lazy"
                className={`w-full rounded ${news[item._id][0]?.bannerImage ? "object-cover" : "object-contain"} min-h-96 h-full ${news[item._id][0]?.bannerImage && "transition-transform transform duration-500 hover:scale-105  ease-in cursor-pointer"} ${!news[item._id][0]?.bannerImage && "opacity-20"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent cursor-pointer "></div>
              <p className="text-xl font-bold absolute bottom-7 w-full flex  items-center  h-16 text-white left-3">
                <span>{news[item._id][0]?.newsTitle}</span>
              </p>
            </div>
            <div className="flex flex-col gap-5 col-span-12 md:col-span-7 lg:col-span-4">
              {news[item._id]
                ?.slice(1)
                ?.map((item: any, index: number) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}

              <Button className="bg-sky-800  dark:text-white text-xl dark:hover:bg-sky-950">
                <Link
                  href={`/home/menu/${item?._id}`}
                  aria-label="View Details"
                >
                  थप समाचार
                </Link>
              </Button>
            </div>
            <section className="flex-col gap-4 hidden md:flex  items-center w-[100%] col-span-12 md:col-span-5 lg:col-span-3">
              <hr></hr>
              <p className="text-sm font-extralight text-center">
                Advertisement
              </p>
              <SideBarAdsCompoent searchStatus={`${item?.menuTitle}1`} />
              <SideBarAdsCompoent searchStatus={`${item?.menuTitle}2`} />
            </section>
          </div>
          <hr className="mb-3 mt-3" />
        </>
      )}
    </React.Fragment>
  );
};

const Loading = () => {
  return (
    <div className="md:container grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-4">
        <Skeleton className="w-[100%] h-[400px]" />
      </div>
      <div className="col-span-12 md:col-span-4 w-full flex flex-col  gap-3 p-3">
        <div className="flex w-full gap-2">
          <Skeleton className="w-[150px] h-[100px]" />
          <div className="w-full flex flex-col gap-2 p-2">
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <Skeleton className="w-[150px] h-[100px]" />
          <div className="w-full flex flex-col gap-2 p-2">
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <Skeleton className="w-[150px] h-[100px]" />
          <div className="w-full flex flex-col gap-2 p-2">
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
            <Skeleton className="w-[100%] h-[10px]" />
          </div>
        </div>
        <Skeleton className="w-[100%] h-[50px]" />
      </div>
      <div className="col-span-12 md:col-span-4 hidden md:flex flex-col gap-2 w-[100%]">
        <Skeleton className="w-[100%] h-[200px]" />
        <Skeleton className="w-[100%] h-[200px]" />
      </div>
    </div>
  );
};
