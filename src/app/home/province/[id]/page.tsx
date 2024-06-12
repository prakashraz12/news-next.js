"use client";
import { useGetNewsMutation } from "@/(service)/api/news.api";
import { Skeleton } from "@/components/ui/skeleton";
import { province } from "@/constant";
import { News } from "@/types/newsTypes";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [provinceNews, setProvinceNews] = useState<News[]>([]);
  const { id } = useParams();
  const page = 1
  const [searchParams, { data, isSuccess, isLoading }] = useGetNewsMutation();

  const fetchNews = useCallback(async () => {
    await searchParams({ page, rowsPerPage: 20, province: id });
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchNews();
    }
  }, [id]);
  useEffect(() => {
    if (isSuccess) {
      setProvinceNews(data?.data);
    }
  }, [isSuccess]);
  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  return (
    <div>
      {isLoading && <LoadingAnimation/>}
      <div className="md:container mt-6">
        <p className="text-4xl font-bold text-sky-900">
          {isSuccess && province?.find((i) => i?.order?.toString() === id)?.label}
        </p>
      </div>
      <div className="md:container grid grid-cols-12 gap-3 p-4">
        {isSuccess && provinceNews?.length > 0 && (
          <div className="col-span-12 md:col-span-4 relative overflow-hidden rounded-md cursor-pointer">
            <Link href={`/home/news/${provinceNews[0]?._id}`}>
              <div className="relative group">
                <img
                  src={provinceNews[0]?.bannerImage || "/no-photo.png"}
                  loading="lazy"
                  className={`w-full h-[350px]  ${provinceNews[0]?.bannerImage ? "object-cover" : "object-contain"}  ${provinceNews[0]?.bannerImage && "transition-transform duration-300 transform scale-100 group-hover:scale-110"} ${!provinceNews[0]?.bannerImage && "opacity-10"} rounded-md`}
                  alt="news"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
                <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-2 pb-5">
                  <p className="text-white text-center text-xl">
                    {provinceNews[0]?.newsTitle}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
        {provinceNews?.length > 1 && (
          <div
            className="col-span-12 md:col-span-4 relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => router.push(`/home/news/${provinceNews[1]?._id}`)}
          >
            <div className="relative group rounded-md">
              <img
                src={provinceNews[1]?.bannerImage || "/no-photo.png"}
                loading="lazy"
                className={`w-full h-[350px]  ${provinceNews[1]?.bannerImage ? "object-cover" : "object-contain"}  ${provinceNews[1]?.bannerImage && "transition-transform duration-300 transform scale-100 group-hover:scale-110"} ${!provinceNews[1]?.bannerImage && "opacity-10"} rounded-md`}
                alt="news"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
              <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-2 pb-5">
                <p className="text-white text-center text-xl">
                  {provinceNews[1]?.newsTitle}
                </p>
              </div>
            </div>
          </div>
        )}
        {provinceNews?.length > 2 && (
          <div className="col-span-12 md:col-span-4">
            {provinceNews.slice(2)?.map((item, index) => (
              <div
                className="flex gap-1 cursor-pointer hover:text-sky-950 mt-2 mb-2"
                key={index}
                onClick={() => router.push(`/home/news/${item?._id}`)}
              >
                <Image
                  src={item?.bannerImage || "/np-photo.png"}
                  alt="image"
                  width={120}
                  height={100}
                  className={`rounded-md ${item?.bannerImage ? "object-cover" : "object-contain"} ${!item?.bannerImage && "opacity-15"}`}
                />
                <p className="line-clamp-3 font-bold p-1 text-md ">
                  {item?.newsTitle}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

const LoadingAnimation = () => {
  return (
    <div className="md:container mt-6">
      <Skeleton className="w-[25%] h-[50px]" />
      <div className="grid grid-cols-12 mt-2 gap-3">
        <div className="md:col-span-4 col-span-12">
          <Skeleton className="w-[100%] h-[350px]" />
        </div>
        <div className="md:col-span-4 col-span-12">
          <Skeleton className="w-[100%] h-[350px]" />
        </div>
        <div className="md:col-span-4 col-span-12">
          <div className="w-full flex gap-6 p-2">
            <Skeleton className="w-[30%] h-[100px]" />
            <div className="w-[100%] flex flex-col gap-3">
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
            </div>
          </div>
          <div className="w-full flex gap-6 p-2">
            <Skeleton className="w-[30%] h-[100px]" />
            <div className="w-[100%] flex flex-col gap-3">
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
            </div>
          </div>
          <div className="w-full flex gap-6 p-2">
            <Skeleton className="w-[30%] h-[100px]" />
            <div className="w-[100%] flex flex-col gap-3">
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
              <Skeleton className="w-[100%] h-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
