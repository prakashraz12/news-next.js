import { News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";
import React from "react";

export const CoverStoryCard = ({ cover }: { cover: News }) => {
  const router = useRouter();
  return (
    <div
      className="reletive overflow-hidden cursor-pointer rounded-sm"
      onClick={() => router.push(`/coverstory/${cover?._id}`)}
    >
      <div className="relative group">
        <img
          src={cover?.bannerImage || "/no-photo.png"}
          alt="news-image"
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        <div className="absolute inset-0 flex items-end justify-start pointer-events-none p-2 pb-5">
          {" "}
          <p className="text-2xl font-semibold  p-3 text-white line-clamp-2">
            {cover.newsTitle.slice(0, 85)}
          </p>
        </div>
      </div>
    </div>
  );
};
