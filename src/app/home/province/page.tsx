"use client";
import { useGetProvinceNewsQuery } from "@/(service)/api/news.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { province } from "@/constant";
import { News } from "@/types/newsTypes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface ProvinceData {
  [key: string]: News[];
}
const Page = () => {
  const [provinceData, setProvinceData] = useState<ProvinceData>({});
  const { data, isSuccess, isLoading } = useGetProvinceNewsQuery({});
  useEffect(() => {
    if (isSuccess) {
      setProvinceData(data?.data);
    }
  }, [isSuccess]);

  return (
    <div className="md:container mt-5 mb-6">
      {isLoading && <Loading />}
      {isSuccess &&
        Object.entries(provinceData).map(([provinceName, news]) => (
          <div key={provinceName} className="mt-7">
            {news?.length > 0 && (
              <div className=" flex justify-between items-center p-2">
                <p className="text-2xl md:text-4xl font-bold text-sky-900 dark:text-white">
                  {
                    province.find((i) => i?.order?.toString() === provinceName)
                      ?.label
                  }
                </p>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sky-900 flex justify-center items-center cursor-pointer text-white">
                  <Link href={`/home/province/${provinceName}`}>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            )}
            {news?.length > 0 &&
              news?.map((data: News, index: number) => (
                <Link href={`/home/news/${data?._id}`} key={index}>
                  <div className="w-full flex gap-4 mt-5 flex-col md:flex-row">
                    <img
                      src={data?.bannerImage || "/no-photo.png"}
                      alt="news-image"
                      className={` w-full lg:w-[200px] h-[200px] md:h-[200px] ${data?.bannerImage ? "object-cover" : "object-contain"} ${!data?.bannerImage && "opacity-10"}`}
                    />
                    <div className="flex flex-col justify-between p-3">
                      <h1 className="text-xl md:text-3xl font-bold line-clamp-2 hover:text-sky-950 dark:text-white">
                        {data?.newsTitle?.slice(0, 240)}
                      </h1>
                      <p className="hidden md:flex">{data?.shortDescription}</p>
                      <div className=" items-center gap-3 justify-end hidden md:flex">
                        <Avatar className="border-2">
                          <AvatarImage
                            src={data?.owner?.avatar}
                            alt="owner"
                            className="object-cover"
                          />
                          <AvatarFallback>
                            {data?.owner?.fullName?.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        <p>{data?.owner?.fullName}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 md:hidden p-3">{data?.shortDescription}</p>
                  <div className=" items-center gap-3 justify-end flex md:hidden p-2">
                    <Avatar className="border-2">
                      <AvatarImage
                        src={data?.owner.avatar}
                        alt="owner"
                        className="object-cover"
                      />
                      {data?.owner?.fullName?.slice(0, 1)}
                    </Avatar>
                    <p>{data?.owner?.fullName}</p>
                  </div>

                  <hr className="mt-2 mb-2" />
                </Link>
              ))}
          </div>
        ))}

      <div></div>
    </div>
  );
};

export default Page;

const Loading = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <Skeleton className="w-[30%] h-[40px]" />
        <Skeleton className="w-[40px] h-[40px] rounded-full" />
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          <Skeleton className="w-[100%] h-[200px]" />
          <div className="mt-4 p-2">
            <Skeleton className="w-[70%] h-[30px]" />
            <Skeleton className="w-[100%] h-[10px] mt-3" />
            <Skeleton className="w-[100%] h-[10px] mt-1" />
            <Skeleton className="w-[100%] h-[10px] mt-2" />
            <Skeleton className="w-[100%] h-[10px] mt-2" />
            <Skeleton className="w-[100%] h-[10px]" />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-[40%] h-[10px]" />
          </div>
          <hr className="mt-2 mb-3" />
        </div>
      ))}
    </div>
  );
};
