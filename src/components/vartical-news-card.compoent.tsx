"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";

import { ProvinceProps, province } from "@/constant";
import { useRouter } from "next/navigation";

export const VarticalNewsCardCompoent = ({
  item,
  type,
}: {
  item: any;
  type?: any;
}) => {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer mt-3 w-full h-[450px]"
      onClick={() => router.push(`/news/${item?._id}`)}
    >
      <div className="overflow-hidden relative">
        <img
          src={item?.bannerImage || "/no-photo.png"}
          loading="lazy"
          alt="news-image"
          className={`w-full h-[200px] ${item?.bannerImage ? "object-cover" : "object-contain"} ${item?.bannerImage && "hover:scale-150 ease-in duration-500"} ${!item?.bannerImage && "opacity-10"}`}
        />
        {type === "province" && (
          <p className="bg-sky-800 w-auto absolute bottom-2 p-2 text-md font-medium text-white">
            {
              province.find(
                (items: ProvinceProps) =>
                  items?.order?.toString() === item?.province?.toString()
              )?.label
            }
          </p>
        )}
      </div>
      <CardContent className="mt-2 p-3">
        <p className="text-2xl md:font-bold font-medium hover:text-sky-800 line-clamp-2">
          {item?.newsTitle}
        </p>
        <p className="mt-2 line-clamp-6">{item?.shortDescription}</p>
      </CardContent>
    </Card>
  );
};
