"use client";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { News } from "@/types/newsTypes";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { VarticalNewsCardCompoent } from "../vartical-news-card.compoent";

interface RelatedNewsProps {
  menu?: string;
  subMenu?: string;
  newsId: string;
}
export const RelatedNews = ({ menu, subMenu, newsId }: RelatedNewsProps) => {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState<News[]>([]);
  const [searchParams, { data, isSuccess }] = useGetNewsMutation();
  const fetchNews = useCallback(async () => {
    await searchParams({ page, rowsPerPage: 20, menu, subMenu });
  }, [menu, subMenu, page, setPage]);

  useEffect(() => {
    if (menu) {
      fetchNews();
    }
  }, [menu]);

  useEffect(() => {
    if (isSuccess) {
      setNewsData(data?.data as News[]);
    }
  }, [isSuccess]);

  return (
    <>
      {isSuccess && newsData?.length > 0 && (
        <>
          <div className="mt-1 md:p-6 p-2">
            <h1 className="text-2xl md:text-5xl font-bold text-sky-900 dark:text-white">
              सम्बन्धित खबर
            </h1>
            <hr className="mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-6 p-2">
            {newsData
              .filter((i) => i._id !== newsId)
              .map((item, index) => (
                <div key={index}>
                  <VarticalNewsCardCompoent item={item} />
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};
