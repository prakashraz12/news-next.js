"use client";
import { useGetNewsBySubMenuMutation } from "@/(service)/api/news.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { News } from "@/types/newsTypes";
import { Pen } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const subMenu = useSelector((state: any) => state.app.appSettings.subMenus);
  const params = useParams();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [getSubMenus, { data, isSuccess }] = useGetNewsBySubMenuMutation();

  const fetchApi = useMemo(
    () => async () => {
      await getSubMenus({ page, limit: 10, subMenuId: params?.id });
    },
    [getSubMenus, page, params.id]
  );

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (params.id) {
      fetchApi();
    }
  }, [params.id, fetchApi]);

  useEffect(() => {
    if (isSuccess) {
      setNews(data?.data);
      setLoading(false);
    }
  }, [isSuccess]);

  const matchedSubMenu = subMenu?.length && subMenu?.find((item:any) => item._id === params.id);
const subMenuTitle = matchedSubMenu ? matchedSubMenu.subMenuTitle : "";
  return (
    <>
      {loading && <Loading />}
      {isSuccess && news?.length > 0 && (
        <div className="md:container p-5 w-full">
          <p className="text-2xl md:text-5xl font-bold text-sky-950 dark:text-white">
            {subMenuTitle}
          </p>
          <div className=" grid grid-cols-12 mt-3 h-[400px] cursor-pointer">
            {news[0]?.bannerImage && (
              <div className="col-span-12 md:col-span-6">
                <img
                  src={news[0]?.bannerImage}
                  alt="news-image"
                  loading="lazy"
                  className="w-full h-[400px] aspect-auto object-cover"
                />
              </div>
            )}
            <div
              className={`col-span-12 md:col-span-${news[0]?.bannerImage ? "6" : "12"} bg-slate-50 dark:bg-slate-800 rounded-lg`}
            >
              <div className="flex flex-col items-center justify-around gap-3 w-full h-full p-4">
                <p className="text-xl md:text-4xl text-center">
                  {`‘${news[0]?.newsTitle}’`}
                </p>
                <p className="text-center">
                  {news[0]?.shortDescription?.slice(0, 200)}
                </p>
                <p className="text-center flex gap-2 items-center">
                  <Pen size={"15px"} />
                  {news[0]?.owner?.fullName}
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          <div className="grid grid-cols-12 gap-5">
            {news.length > 1 &&
              news.slice(1).map((item, index) => (
                <Card
                  className="col-span-12 md:col-span-4 lg:col-span-3 cursor-pointer hover:shadow-xl transition-all ease-linear duration-75"
                  key={index}
                >
                  <img
                    src={item?.bannerImage || "/no-photo.png"}
                    alt="news-image"
                    className={`w-full h-[200px] ${item?.bannerImage ? "object-cover" : "object-contain"}  ${!item?.bannerImage && "opacity-10"} `}
                  />
                  <CardContent className="p-3">
                    <p className="text-md md:text-xl font-semibold mt-2 line-clamp-3 text-sky-950 dark:text-white">
                      {item?.newsTitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="flex justify-center w-full mt-5">
            <Button type="button" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

const Loading = () => {
  return (
    <>
      <div className="lg:container grid grid-cols-12 w-full gap-4">
        <Skeleton className="w-[30%] h-[40px] col-span-12 " />
        <div className="col-span-12 md:col-span-6">
          <Skeleton className="w-full h-[400px]" />
        </div>
        <div className="md:col-span-6 hidden md:flex flex-col w-full justify-around items-center p-7">
          <Skeleton className="w-full h-[40px]" />
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-[80%] h-[10px]" />
          </div>
          <Skeleton className="w-[80%] h-[10px]" />
        </div>
      </div>
      <hr className="mt-3 mb-3" />
      <div className="grid grid-cols-12 lg:container gap-3 mt-6">
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <Skeleton className="w-full h-[200px]" />
          <CardContent className="flex justify-start mt-4 flex-col gap-2">
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-[80%] h-[10px]" />
            <Skeleton className="w-[98%] h-[10px]" />
          </CardContent>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <Skeleton className="w-full h-[200px]" />
          <CardContent className="flex justify-start mt-4 flex-col gap-2">
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-[80%] h-[10px]" />
            <Skeleton className="w-[98%] h-[10px]" />
          </CardContent>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <Skeleton className="w-full h-[200px]" />
          <CardContent className="flex justify-start mt-4 flex-col gap-2">
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-[80%] h-[10px]" />
            <Skeleton className="w-[98%] h-[10px]" />
          </CardContent>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3 hidden lg:block">
          <Skeleton className="w-full h-[200px]" />
          <CardContent className="flex justify-start mt-4 flex-col gap-2">
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-full h-[10px]" />
            <Skeleton className="w-[90%] h-[10px]" />
            <Skeleton className="w-[80%] h-[10px]" />
            <Skeleton className="w-[98%] h-[10px]" />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
