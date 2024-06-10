import React, { useEffect, useState } from "react";
import { MoreCmmentedNewsCardCompoent } from "../more-commented-news-card.compoent";
import { useGetMoreCommentedNewsQuery } from "@/(service)/api/news.api";
import { News } from "@/types/newsTypes";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";

export const MoreCommentedNews = () => {
  const [commentNews, setCommentNews] = useState<News[]>([]);
  const { data, isSuccess } = useGetMoreCommentedNewsQuery({});

  useEffect(() => {
    if (isSuccess) {
      setCommentNews(data?.data);
    }
  }, [isSuccess]);
  
  return (
    <>
      {isSuccess && (
        <div className="p-3 md:container mt-4 mb-4">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 dark:text-white">
              धेरै कमेन्ट गरिएका
            </h1>
          </div>
          <hr className="mb-5" />
          <div className="grid grid-cols-12 gap-3">
            {commentNews?.map((item, index) => (
              <MoreCmmentedNewsCardCompoent key={index} item={item} index={index} />
            ))}
          </div>
          <hr className="mt-2 mb-2" />
          <p className="text-center text-sm">Advertisement</p>
          <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <SideBarAdsCompoent searchStatus="more-c-1"/>
          </div>
          <div className="col-span-12 md:col-span-4">
            <SideBarAdsCompoent searchStatus="more-c-2"/>
          </div>
          <div className="col-span-12 md:col-span-4">
            <SideBarAdsCompoent searchStatus="more-c-3"/>
          </div>
          </div>
        </div>
      )}
    </>
  );
};
