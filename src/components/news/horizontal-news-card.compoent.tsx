"use client";
import { News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";

import React from "react";

export const HorizontalNewsCard = ({ item }: { item: News }) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex align-middle gap-4 cursor-pointer ease-linear duration-200  hover:text-sky-800 md:p-3 sm:p-1 rounded mt-2 "
      onClick={() => router.push(`/home/news/${item?._id}`)}
    >
      <div className="overflow-hidden">
        <img
          src={item?.bannerImage || "/no-photo.png"}
          alt="news-images"
          loading="lazy"
          className={`w-[180px] h-[90px] ${item?.bannerImage ? "object-cover" : "object-contain"} rounded ${item?.bannerImage && " hover:scale-110 ease-in-out duration-500"} ${!item.bannerImage && "opacity-75"} `}
        />
      </div>
      <div className="flex flex-col justify-between p-1 w-full">
        <p className="text-md font-bold line-clamp-2">{item?.newsTitle}</p>
        <p className="line-clamp-2 text-sm">{item?.shortDescription}</p>
      </div>
    </div>
  );
};
