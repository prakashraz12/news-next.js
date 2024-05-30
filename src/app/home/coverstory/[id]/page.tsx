"use client";
import { useGetCoverStoryNewsbyIdMutation } from "@/(service)/api/coverStory.api";
import { NewsDetailsPage } from "@/components/details-page.compeont";
import { News } from "@/types/newsTypes";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const GalleryDetailsPage = () => {
  const [newsData, setNewsData] = useState<News | any>(undefined);
  const params = useParams();
  const [
    getNewsById,
    { isSuccess: isNewsfetched, data: newsDatas, isLoading: isNewsFetching },
  ] = useGetCoverStoryNewsbyIdMutation();

  // useEffect(() => {
  //   setIsAdsShown(true);
  //   setTimeout(() => {
  //     setIsAdsShown(false);
  //   }, 1000);
  // }, []);

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
      type="coverstory"
    />
  );
};

export default GalleryDetailsPage;
