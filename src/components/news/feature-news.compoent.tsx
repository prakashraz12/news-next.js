import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export const FeatureNewsCompoent = () => {
  return (
    <div className="w-full bg-sky-950 pl-[60px] pr-[60px] pt-[20px]  pb-[55px]">
      <h1 className="text-3xl  md:text-5xl text-white font-bold mb-10 mt-10">
        फिचर
      </h1>

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
  );
};
