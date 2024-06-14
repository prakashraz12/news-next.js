"use client";
import React, { useCallback, useEffect } from "react";
import { AdsViewComponent } from "../ads-view.component";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { ChevronRight, NotebookPen } from "lucide-react";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { Menu, News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";
import { HorizontalAdsCompoent } from "../horizontal-ads-compoent";
import Link from "next/link";
import { setHalfAndHalf } from "@/(store)/slices/cache.slice";
import { useDispatch, useSelector } from "react-redux";

export const ColNewsViewsCompoent = ({ item }: { item: Menu }) => {
  const router = useRouter();
  const news = useSelector((state: any) => state.cache.half_half);
  const dispatch = useDispatch();
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews }] =
    useGetNewsMutation();

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 4, menu: item?._id });
  }, [item?._id]);



  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      const newData: any = {
        [item._id]: data?.data as News[],
      };
      dispatch(setHalfAndHalf(newData));
    }
  }, [isSuccessOnFetchedNews]);

  useEffect(() => {
    if (news?.length === 0 || !news[item?._id]) {
      fetchNews();
    }
  }, [news]);

  return (
    <div className="w-full p-3">
      {news && news[item?._id]?.length > 0 && (
        <>
          <div className="md:mb-5 mb-2 flex justify-between items-center">
            <h1 className="text-3xl  md:text-5xl font-bold text-sky-800 dark:text-white">
              {item?.menuTitle}
            </h1>
            <div className="w-10 h-10 bg-sky-800 rounded-full flex justify-center items-center text-white">
              <Link href={`/home/menu/${item?._id}`} aria-label="View Details">
                <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div
              className="grid grid-cols-12 gap-4  bg-sky-800 rounded-sm"
              onClick={() => {
                router.push(`/home/news/${news[item?._id][0]?._id}`);
              }}
            >
              {news[item?._id][0]?.bannerImage && (
                <div className="md:col-span-6 overflow-hidden col-span-12">
                  <img
                    src={news[item?._id][0]?.bannerImage || "/no-photo.png"}
                    alt="news-image"
                    loading="lazy"
                    className={`w-full h-[200px] md:h-[400px] lg:h-[500px] ${news[item?._id][0]?.bannerImage ? "object-cover" : "object-contain"} ${news[item?._id][0]?.bannerImage && "hover:scale-105 duration-500 ease-in-out"} ${!news[item?._id][0]?.bannerImage && "opacity-20"}`}
                  />
                </div>
              )}
              <div
                className={`${news[item?._id][0]?.bannerImage ? "md:col-span-6" : "md:col-span-12"} col-span-12 flex items-center justify-around flex-col p-10  cursor-pointer w-full md:h-[400px] lg:h-[500px]`}
              >
                <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
                  {news[item?._id][0]?.newsTitle}
                </h1>
                <p className=" text-sm text-center text-white mt-5 line-clamp-4">
                  {news[item?._id][0]?.shortDescription}
                </p>
                <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2">
                  <NotebookPen size={"15px"} />
                  {news[item?._id][0]?.owner?.fullName}
                </p>
              </div>
            </div>
            <br />
            <AdsViewComponent searchStatus={`${item?.menuTitle}1`} />
            <div className="grid grid-cols-12 gap-2 mt-2">
              <div className="col-span-12 md:col-span-5 mt-2">
                {news[item?._id]?.slice(1, 5).map((item:News, index:number) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-4 mt-2">
                {news[item?._id]?.slice(5, 10).map((item:News, index:number) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-3 mt-2 flex justify-center flex-col items-center">
                <hr />
                <p className="text-sm font-extralight text-center">
                  Advertisment
                </p>
                <SideBarAdsCompoent searchStatus={`${item?.menuTitle}2`} />
                <SideBarAdsCompoent searchStatus={`${item?.menuTitle}3`} />
              </div>
            </div>
          </div>
        </>
      )}
      <hr />
      <p className="text-sm font-extralight text-center">Advertisment</p>
      <HorizontalAdsCompoent menuTitle={item?.menuTitle} />
    </div>
  );
};
