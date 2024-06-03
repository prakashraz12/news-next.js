import React, { useCallback, useEffect } from "react";
import { CoverStoryCard } from "../cover-story-card";

import { ChevronRight } from "lucide-react";
import { useGetAllCoverstoryMutation } from "@/(service)/api/coverStory.api";
import { News } from "@/types/newsTypes";
import { Skeleton } from "../ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setCoverStoryNews } from "@/(store)/slices/cache.slice";
import Link from "next/link";

export const CoverStoryComponent = () => {
  const dispatch = useDispatch();
  const coverStoryNews = useSelector(
    (state: any) => state?.cache?.coverStoryNews
  );
  const [coverStory, { data, isSuccess: isCoverStoryFetched, isLoading }] =
    useGetAllCoverstoryMutation();

  const fetchApi = useCallback(async () => {
    await coverStory({ page: 1, limit: 9 });
  }, [coverStoryNews]);

  useEffect(() => {
    if (coverStoryNews.length === 0) {
      fetchApi();
    }
  }, []);

  useEffect(() => {
    if (isCoverStoryFetched) {
      dispatch(setCoverStoryNews(data?.data as News[]));
    }
  }, [isCoverStoryFetched]);

  return (
    <>
      {isLoading && <Loading />}
      {coverStoryNews?.length > 0 && (
        <div className="w-full p-3">
          <div className="flex md:mb-10  mb-2 justify-between w-full">
            <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">
              कभर स्टोरी
            </h1>
            <div className="p-2 md:p-3 rounded-full bg-sky-800 text-white">
              <Link href={`/home/coverstory`}>
                <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="grid  gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {coverStoryNews?.map((cover: News, index: number) => (
              <CoverStoryCard cover={cover} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const Loading = () => {
  return (
    <div className="md:container grid grid-cols-12 gap-4">
      <div className="col-span-12 flex justify-between items-center">
        <Skeleton className="w-[30%] h-[80px]" />
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="col-span-12 md:col-span-4" key={index}>
          <Skeleton className="w-full h-[400px]" />
        </div>
      ))}
    </div>
  );
};
