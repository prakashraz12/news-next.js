import React from "react";
import Image from "next/image";
import { News } from "@/types/newsTypes";
export const FallbackNewsLayout = ({
  allNewsData,
}: {
  allNewsData: News[];
}) => {
  return (
    <div className="md:container grid grid-cols-12 gap-3 p-4">
      {allNewsData?.length > 0 && (
        <div className="col-span-12 md:col-span-4 relative overflow-hidden rounded-md">
          <div className="relative group">
            <img
              src={allNewsData[0]?.bannerImage || "/no-photo.png"}
              loading="lazy"
              className={`w-full h-[350px]  ${allNewsData[0]?.bannerImage ? "object-cover" : "object-contain"}  ${allNewsData[0]?.bannerImage && "transition-transform duration-300 transform scale-100 group-hover:scale-110"} ${!allNewsData[0]?.bannerImage && "opacity-10"} rounded-md`}
              alt="news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-2 pb-5">
              <p className="text-white text-center text-xl">
                {allNewsData[0]?.newsTitle}
              </p>
            </div>
          </div>
        </div>
      )}
      {allNewsData?.length > 1 && (
        <div className="col-span-12 md:col-span-4 relative overflow-hidden rounded-md">
          <div className="relative group rounded-md">
            <img
              src={allNewsData[1]?.bannerImage || "/no-photo.png"}
              loading="lazy"
              className={`w-full h-[350px]  ${allNewsData[1]?.bannerImage ? "object-cover" : "object-contain"}  ${allNewsData[1]?.bannerImage && "transition-transform duration-300 transform scale-100 group-hover:scale-110"} ${!allNewsData[1]?.bannerImage && "opacity-10"} rounded-md`}
              alt="news"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-2 pb-5">
              <p className="text-white text-center text-xl">
                {allNewsData[1]?.newsTitle}
              </p>
            </div>
          </div>
        </div>
      )}
      {allNewsData?.length > 2 && (
        <div className="col-span-12 md:col-span-4">
          {allNewsData.slice(2)?.map((item, index) => (
            <div
              className="flex gap-1 cursor-pointer hover:text-sky-950 mt-1 mb-2"
              key={index}
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
  );
};
