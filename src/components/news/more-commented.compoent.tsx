import React, { useEffect, useState } from "react";
import { MoreCmmentedNewsCardCompoent } from "../more-commented-news-card.compoent";
import { useGetMoreCommentedNewsQuery } from "@/(service)/api/news.api";
import { News } from "@/types/newsTypes";

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
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800">
              धेरै कमेन्ट गरिएका
            </h1>
          </div>
          <hr className="mb-5" />
          <div className="grid grid-cols-1 gap-5  md:grid-cols-2">
            {commentNews?.map((item, index) => (
              <MoreCmmentedNewsCardCompoent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
