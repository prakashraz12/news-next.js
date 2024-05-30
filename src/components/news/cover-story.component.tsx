import React, { useCallback, useEffect, useState } from "react";
import { CoverStoryCard } from "../cover-story-card";

import {  ChevronRight } from "lucide-react";
import { useGetAllCoverstoryMutation } from "@/(service)/api/coverStory.api";
import { News } from "@/types/newsTypes";

export const CoverStoryComponent = () => {
  const[coverStoryData, setCoverStoryData] = useState<News[]>([])
  const [coverStory,{data, isSuccess:isCoverStoryFetched}] = useGetAllCoverstoryMutation();
  const fetchApi = useCallback(async () => {
  await   coverStory({page:1, limit:10})
  }, [])
  useEffect(() => {
    fetchApi()
  }, [])
  console.log(data)
  useEffect(() => {
    if (isCoverStoryFetched) {
      setCoverStoryData(data?.data as News[])
    }
  },[isCoverStoryFetched])
  return (
    <>
      {
        isCoverStoryFetched && coverStoryData?.length > 0 &&  <div className="w-full p-3">
        <div className="flex mb-10 justify-between w-full">
          <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">कभर स्टोरी</h1>
          <div className="p-3 rounded-full bg-sky-800 text-white">
            <ChevronRight/>
          </div>
        </div>
          <div className="grid  gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
              coverStoryData?.map((cover, index) => (
                <CoverStoryCard cover={ cover} key={index}/>
              ))
            }
        </div>
      </div>
      }
    </>
  );
};
