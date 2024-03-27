"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import { AdsViewComponent } from "../ads-view.component";

const subMenus = [
  {
    label: "अर्थनीति",
  },
  {
    label: "पर्यटन",
  },
  {
    label: "रोजगार",
  },
  {
    label: "बैँक वित्त",
  },
];
export const NarratorNewsCompoent = () => {
  return (
    <div className="w-full mt-10 p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">बिजनेस</h1>
        <div>
          <ul className="gap-10 hidden md:flex">
            {subMenus?.map((menu, index) => (
              <li
                className="text-md  font-bold text-slate-500 cursor-pointer hover:text-sky-800"
                key={index}
              >
                {menu?.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-sky-800 rounded-full p-0.5 text-white cursor-pointer">
          <ChevronRight />
        </div>
      </div>
      <div className="md:hidden">
        <ul className="title-cat-menu">
          {subMenus?.map((menu, index) => (
            <li  key={index}>
              <a href="">{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-8 relative cursor-pointer">
        <div className="overflow-hidden">
          <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/nepalgunj-motorpark_motorbot.jpg"
            alt="news-image"
            loading="lazy"
            className="w-full h-[400px] object-cover rounded hover:scale-105 duration-300 ease-out"
          />
        </div>
        <h1 className="text-5xl font-bold absolute bottom-0 left-0 w-full text-white text-center bg-sky-800 bg-opacity-40 p-4">
          बसन्तपुरको होली उत्सव (तस्वीरहरु)
        </h1>
      </div>
      <AdsViewComponent />
      <hr className="hidden md:block" />
      <div className="flex w-full sm:mt-1 md:mt-5">
        <div>
          <div className="grid sm:grid-cols-1 md:gap-y-10 sm:gap-y-2  md:grid-cols-2 gap-5 mt-5 md:w-11/12 sm:w-full">
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
            <HorizontalNewsCard />
          </div>
        </div>
        <div className=" flex-col w-full hidden md:flex">
          <SideBarAdsCompoent />
          <SideBarAdsCompoent />
          <SideBarAdsCompoent />
        </div>
      </div>
    </div>
  );
};
