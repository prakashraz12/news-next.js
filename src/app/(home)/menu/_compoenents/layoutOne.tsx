import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VarticalNewsCardCompoent } from "@/components/vartical-news-card.compoent";
import { ChevronRight, NotebookPen } from "lucide-react";
import React from "react";



export const LayoutOne = () => {
  return (
    <div>
      <div className="w-full p-3">
        <div className="flex justify-between p-3 items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800">
            मार्केट
          </h1>
          <div className="w-[30px] h-[30px] rounded-full bg-orange-800 flex justify-center items-center text-white">
            <ChevronRight />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  bg-orange-800">
          <div className="md:col-span-6 overflow-hidden">
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2023/01/nagdhunga-tunnel-surung-2-1024x768.jpg"
              alt="news-image"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 duration-500 ease-in-out"
            />
          </div>
          <div className="md:col-span-6 flex items-center justify-around flex-col p-10  cursor-pointer">
            <h1 className="text-lg md:text-3xl font-medium md:font-bold text-white line-clamp-3">
              स्थानीय अवरोधले नागढुंगा सुरुङ ‘ब्रेक थ्रु’ ढिला जापानी दूतावासका
              मिसन उपप्रमुखद्वारा केएनपी फ्याक्ट्रीको अवलोकन
            </h1>
            <p className=" text-sm text-center text-white mt-5 line-clamp-4">
              एनएसडब्लु राज्यका प्रभावशाली राजनीतिज्ञहरूको उपस्थितिमा
              पार्लियामेन्ट्री फ्रेन्ड्स अफ नेपाल गठन भएको छ। अस्ट्रेलियास्थित
              नेपाली राजदूत कैलाशराज पोखरेल, पूर्व महावाणिज्यदूत दीपक खड्का र
              एनआरएन अस्ट्रेलियाका अध्यक्ष अनिल पोखरेलको उपस्थितिमा यसै साता
              एनएसडब्लु संसद फ्रेन्ड्स अफ नेपालको गठन भएको छ।
            </p>
            <p className="text-sm md:text-md text-white text-center mt-3 flex  gap-2">
              <NotebookPen size={"15px"} />
              कैलाशराज पोखरेल
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <VarticalNewsCardCompoent />
          </div>
          <div>
            <VarticalNewsCardCompoent />
          </div>
          <div>
            <VarticalNewsCardCompoent />
          </div>
          <div>
            <VarticalNewsCardCompoent />
          </div>
        </div>
      </div>
      <div className="w-full bg-sky-950 pr-20 pl-20 pt-3 pb-3">
        <div className="pt-4 pb-4 flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">फेसन/सौन्दर्य</h1>
          <div className="text-sky-900 cursor-pointer bg-white w-[30px] h-[30px] flex justify-center items-center rounded-full">
            <ChevronRight />
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full/3"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basic-1/1 md:basis-1/2 lg:basis-1/4 relative"
              >
                <div className="relative">
                  <Card className="border-none">
                    <CardContent className="w-full aspect-square h-full p-0 relative">
                      <img
                        src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/GT-vs-Mumbai.jpg"
                        alt="news-image"
                        className="w-full h-full object-cover rounded"
                      />
                      <span
                        className="text-2xl font-semibold absolute bottom-0 left-0 p-2 w-full text-white rounded"
                        style={{
                          backgroundImage:
                            "linear-gradient(0deg, rgba(5,5,6,0.9528186274509804) 0%, rgba(94,84,84,0.5326505602240896) 32%, rgba(23,28,29,0.3337710084033614) 84%)",
                        }}
                      >
                        स्थानीय अवरोधले नागढुंगा सुरुङ ‘ब्रेक थ्रु’ ढिला
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
