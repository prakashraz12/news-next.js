import React, { useCallback, useEffect, useState } from "react";
import { AdsViewComponent } from "../ads-view.component";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { NotebookPen } from "lucide-react";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { Menu, News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";


export const ColNewsViewsCompoent = ({ item }: { item: Menu }) => {
  const router = useRouter();
  const [newsData, setNewsData] = useState<News[]>([]);
  const [searchNews, { data, isSuccess: isSuccessOnFetchedNews }] =
    useGetNewsMutation();

  const fetchNews = useCallback(() => {
    searchNews({ page: 1, rowsPerPage: 4, menu: item?._id });
  }, [item?._id]);
  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (isSuccessOnFetchedNews) {
      setNewsData(data?.data);
    }
  }, [isSuccessOnFetchedNews]);


  return (
    <div className="w-full p-3">
      {isSuccessOnFetchedNews && newsData?.length > 0 && (
        <>
          <div className="flex mb-10">
            <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">
              {item?.menuTitle}
            </h1>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4  bg-sky-800 rounded-sm" onClick={()=>{router.push(`/news/${newsData[0]?._id}`)}}>
              <div className="md:col-span-6 overflow-hidden">
                <img
                  src={newsData[0]?.bannerImage || "/no-photo.png"}
                  alt="news-image"
                  loading="lazy"
                  className={`w-full h-[300px] md:h-[500px] ${newsData[0]?.bannerImage ? "object-cover":"object-contain"} ${newsData[0]?.bannerImage && "hover:scale-105 duration-500 ease-in-out"} ${!newsData[0]?.bannerImage && "opacity-20" }`}
                />
              </div>
              <div className="md:col-span-6 flex items-center justify-around flex-col p-10  cursor-pointer">
                <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
                  {newsData[0]?.newsTitle}
                </h1>
                <p className=" text-sm text-center text-white mt-5 line-clamp-4">
                  {newsData[0]?.shortDescription}
                </p>
                <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2">
                  <NotebookPen size={"15px"} />
                  {newsData[0]?.owner?.fullName}
                </p>
              </div>
            </div>
            <br />
            <AdsViewComponent />
            <div className="grid grid-cols-12 gap-2 mt-2">
              <div className="col-span-12 md:col-span-5 mt-2">
                {newsData.slice(0, 5).map((item, index) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-5 mt-2">
                {newsData.slice(0, 5).map((item, index) => (
                  <HorizontalNewsCard key={index} item={item} />
                ))}
              </div>
              <div className="col-span-12 md:col-span-2 mt-2">
                <SideBarAdsCompoent />
                <SideBarAdsCompoent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
