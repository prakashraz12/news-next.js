"use client";
import React, { useCallback, useEffect } from "react";
import { VarticalNewsCardCompoent } from "../vartical-news-card.compoent";
import { numsFormatter } from "@/utils/number-formatter.util";
import { ChevronRight } from "lucide-react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { province } from "@/constant";
import { News } from "@/types/newsTypes";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import Link from "next/link";
import { AdsViewComponent } from "../ads-view.component";
import { useDispatch, useSelector } from "react-redux";
import { setProvinceNews } from "@/(store)/slices/cache.slice";

export const ProvinceNewsComponent = () => {
  const dispatch = useDispatch();
  const provinceNews:News[] = useSelector((state: any) => state?.cache?.provinceNews);
  
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews }] =
    useGetNewsMutation();

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 15, isShowNewsOnProvince: true });
  }, []);
  useEffect(() => {
    if (provinceNews?.length === 0) {
      fetchNews();
    }
  }, [provinceNews]);

  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      dispatch(setProvinceNews(data?.data))
    }
  }, [isSuccessOnFetchedNews]);

  return (
    <div className="p-3 mt-3">
      <div className="w-full flex justify-between mb-2 md:mb-3 items-center">
        <h1 className="text-3xl  md:text-5xl font-bold text-green-800 dark:text-green-100">
          प्रदेश समाचार
        </h1>
        <div>
          <ul className="gap-2 hidden md:flex">
            {province?.map((pr, index) => (
              <li
                key={index}
                className="p-2 bg-green-800 w-10 h-10 flex justify-center align-middle items-center cursor-pointer rounded-full text-xl font-medium text-white"
              >
                <Link
                  href={`/home/province/${pr?.order}`}
                  aria-label="details news page"
                >
                  {numsFormatter(pr?.order)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-full md:p-2 p-1 w-10 h-10 bg-green-800 text-white flex justify-center items-center">
          <Link href={"/home/province"} aria-label="province-news-page">
            <ChevronRight />
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex whitespace-nowrap gap-3 w-full overflow-x-auto overflow-y-hidden">
          {province?.map((pr, index) => (
            <li
              key={index}
              className="whitespace-nowrap w-full"
              aria-label="details news page"
            >
              <Link href={`/home/province/${pr.order}`}>{pr.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {provinceNews && provinceNews
          ?.slice(0, 3)
          .map((item, index) => (
            <VarticalNewsCardCompoent key={index} item={item} type="province" />
          ))}
      </div>
      <hr className="mt-2 mb-2"></hr>
      <p className="text-sm font-extralight text-center">Advertisement</p>
      <AdsViewComponent searchStatus="province1" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {provinceNews && provinceNews
          ?.slice(3, 10)
          .map((item, index) => <HorizontalNewsCard item={item} key={index} />)}
      </section>
      <hr className="mt-2 mb-2"></hr>
      <p className="text-sm font-extralight text-center">Advertisement</p>
      <AdsViewComponent searchStatus="province2" />
    </div>
  );
};
