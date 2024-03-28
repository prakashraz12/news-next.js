import React from "react";
import { AdsViewComponent } from "../ads-view.component";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
import {  NotebookPen,} from "lucide-react";

export const ColNewsViewsCompoent = () => {
  return (
    <div className="w-full p-3">
      <div className="flex mb-10">
        <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">मनोरन्जन</h1>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  bg-sky-800">
          <div className="md:col-span-6 overflow-hidden">
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2023/01/nagdhunga-tunnel-surung-2-1024x768.jpg"
              alt="news-image"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 duration-500 ease-in-out"
            />
          </div>
          <div className="md:col-span-6 flex items-center justify-around flex-col p-10  cursor-pointer">
            <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
              स्थानीय अवरोधले नागढुंगा सुरुङ ‘ब्रेक थ्रु’ ढिला जापानी दूतावासका मिसन उपप्रमुखद्वारा केएनपी फ्याक्ट्रीको अवलोकन
            </h1>
            <p className=" text-sm text-center text-white mt-5 line-clamp-4" >
              एनएसडब्लु राज्यका प्रभावशाली राजनीतिज्ञहरूको उपस्थितिमा
              पार्लियामेन्ट्री फ्रेन्ड्स अफ नेपाल गठन भएको छ। अस्ट्रेलियास्थित
              नेपाली राजदूत कैलाशराज पोखरेल, पूर्व महावाणिज्यदूत दीपक खड्का र
              एनआरएन अस्ट्रेलियाका अध्यक्ष अनिल पोखरेलको उपस्थितिमा यसै साता
              एनएसडब्लु संसद फ्रेन्ड्स अफ नेपालको गठन भएको छ।
            </p>
            <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2"><NotebookPen size={"15px"}/>कैलाशराज पोखरेल</p>
          </div>
        </div>
        <br />
        <AdsViewComponent />
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
    </div>
  );
};
