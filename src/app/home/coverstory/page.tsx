"use client";
import { useGetAllCoverstoryMutation } from "@/(service)/api/coverStory.api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { News } from "@/types/newsTypes";
import { ArrowLeftToLine, ArrowRightToLine, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const coverStoryNews = useSelector(
    (state: any) => state?.cache?.coverStoryNews
  );
  const [coverStoryData, setCoverStoryData] = useState<News[]>(
    coverStoryNews || []
  );
  const [coverStory, { data, isSuccess: isCoverStoryFetched }] =
    useGetAllCoverstoryMutation();
  const fetchApi = useCallback(async () => {
    await coverStory({ page: 1, limit: 10 });
  }, [coverStoryData]);
  useEffect(() => {
    if (coverStoryNews.length === 0) {
      fetchApi();
    } else if (coverStoryNews.length) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isCoverStoryFetched) {
      setCoverStoryData(data?.data as News[]);
      setLoading(false);
    }
  }, [isCoverStoryFetched]);
  return (
    <>
      {loading && <Loading />}
      {coverStoryData.length > 0 && (
        <div className="md:container mt-5 p-3">
          <div className="flex justify-between">
            <div className="w-10 h-10 bg-sky-950 text-white flex justify-center items-center rounded-full cursor-pointer">
              <ChevronLeft onClick={() => router.back()} />
            </div>
            <h1 className="text-2xl md:text-5xl font-bold text-sky-950 dark:text-white">
              कभर स्टोरी
            </h1>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            {coverStoryData[0]?.bannerImage && (
              <AspectRatio ratio={16 / 7}>
                <Image
                  src={coverStoryData[0]?.bannerImage}
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            )}
            <Link href={`/home/coverstory/${coverStoryData[0]?._id}`}>
              <p className=" text-xl md:text-5xl text-center text-sky-800 dark:text-white">{`‘${coverStoryData[0]?.newsTitle.slice(0, 300)}’`}</p>
            </Link>
            <p className="text-sm md:text-xl text-center line-clamp-3">
              {coverStoryData[0]?.shortDescription}
            </p>
            <div className="flex items-center gap-3 justify-center">
              <Avatar className="border-2">
                <AvatarImage
                  src={coverStoryData[0]?.owner?.avatar}
                  alt="owner"
                  className="object-cover"
                />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <p>{coverStoryData[0]?.owner?.fullName}</p>
            </div>
            <hr className="mt-2 mb-2" />
          </div>
          {coverStoryData.length > 1 &&
            coverStoryData.map((data, index) => (
              <Link className="mt-4" key={index} href={data?._id}>
                <div className="w-full flex gap-4">
                  <img
                    src={data?.bannerImage || "/no-photo.png"}
                    alt="news-image"
                    className={`w-[150px] lg:w-[200px] h-[100px] md:h-[200px] ${data?.bannerImage ? "object-cover" : "object-contain"} ${!data?.bannerImage && "opacity-10"}`}
                  />
                  <div className="flex flex-col justify-between ">
                    <h1 className=" text-xl md:text-3xl font-bold line-clamp-2 hover:text-sky-950 dark:text-white">
                      {data?.newsTitle?.slice(0, 240)}
                    </h1>
                    <p className="hidden md:flex">{data?.shortDescription}</p>
                    <div className=" items-center gap-3 justify-end hidden md:flex">
                      <Avatar className="border-2 shadow-lg">
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
                <p className="mt-2 md:hidden">{data?.shortDescription}</p>
                <div className=" items-center gap-3 justify-end flex md:hidden">
                  <Avatar className="border-2 shadow-lg">
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
          <div className="flex gap-2 justify-center mt-5">
            <div className="w-14 h-14 bg-sky-900 rounded-sm flex justify-center items-center text-white cursor-pointer">
              <ArrowLeftToLine />
            </div>
            <h1 className="w-14 h-14 text-sky-900 font-bold text-2xl flex justify-center items-center border rounded-sm dark:text-white">
              1
            </h1>
            <div className="w-14 h-14 bg-sky-900 rounded-sm flex justify-center items-center text-white cursor-pointer">
              <ArrowRightToLine />
            </div>
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
      <div className="md:container grid grid-cols-12">
        <div className="col-span-12 flex justify-between">
          <Skeleton className="w-[50px] h-[50px] rounded-full" />
          <Skeleton className="w-[20%] h-[50px]" />
        </div>
        <div className="w-full h-[500px] col-span-12 mt-2">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
      <div className="grid grid-cols-12 md:container mt-2">
        <div className="col-span-12 flex gap-3">
          <Skeleton className="w-[20%] h-[200px]" />
          <Skeleton className="w-[80%] h-[200px]" />
        </div>
        <hr className="mt-2 mb-2 col-span-12" />
        <div className="col-span-12 flex gap-3">
          <Skeleton className="w-[20%] h-[200px]" />
          <Skeleton className="w-[80%] h-[200px]" />
        </div>
        <hr className="mt-2 mb-2 col-span-12" />
        <div className="col-span-12 flex gap-3">
          <Skeleton className="w-[20%] h-[200px]" />
          <Skeleton className="w-[80%] h-[200px]" />
        </div>
        <hr className="mt-2 mb-2 col-span-12" />
        <div className="col-span-12 flex gap-3">
          <Skeleton className="w-[20%] h-[200px]" />
          <Skeleton className="w-[80%] h-[200px]" />
        </div>
        <hr className="mt-2 mb-2 col-span-12" />
      </div>
    </>
  );
};
