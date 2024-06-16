"use client";
import { News } from "@/types/newsTypes";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { NewsDetailsPage } from "@/components/details-page.compeont";
import { useLazyGetNewsByIdQuery } from "@/(service)/api/news.api";


const DetailsPage = () => {
  const [newsData, setNewsData] = useState<News | any>(undefined);
  const params = useParams();
  const [
    getNewsById,
    { isSuccess: isNewsfetched, data: newsDatas, isLoading: isNewsFetching },
  ] = useLazyGetNewsByIdQuery();

  const fetchNews = useCallback(async () => {
    await getNewsById(params.id);
  }, [params?.id]);

  useEffect(() => {
    if (params?.id) {
      fetchNews();
    }
  }, [params?.id]);

  useEffect(() => {
    if (isNewsfetched) {
      setNewsData(newsDatas?.data as News);
    }
  }, [isNewsfetched]);

  return (
    <NewsDetailsPage
      isNewsFetching={isNewsFetching}
      newsData={newsData}
      isNewsfetched={isNewsfetched}
      type="news"
    />
  );
};

export default DetailsPage;




