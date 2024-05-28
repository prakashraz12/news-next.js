import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export const PhotoGalleryComponet = () => {
  return (
    <div className="bg-rose-900 w-full h-auto p-9">
      <div className="md:container">
      <div className="flex justify-between">
        <h1 className="text-3xl  md:text-5xl font-bold text-white">ग्यालरी</h1>
        <ArrowRightCircleIcon className="text-white cursor-pointer" />
      </div>
      <div className="flex justify-center align-middle mt-5">
        <Carousel className="w-11/12">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-none rounded-sm">
                    <CardContent className="p-0">
                      <div className="relative  overflow-hidden cursor-pointer ">
                        <img
                          src="https://www.onlinekhabar.com/wp-content/uploads/2023/06/Rara-taaal-rara-lake-13-1024x646.jpg"
                          alt="photo-image"
                          loading="lazy"
                          className="w-full h-[400px] object-cover overflow-hidden rounded-sm hover:scale-150 duration-1000"
                        />
                        <div
                          className="absolute bottom-0 h-32 w-full rounded-sm"
                          style={{
                            background:
                              "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(43,45,46,0) 50%)",
                          }}
                        ></div>
                        <p className="text-xl font-bold text-white absolute bottom-5 left-3 rounded-sm">
                          वाउ कर्णाली ! घुम्ने हैन त यसपालि ?
                        </p>
                      </div>
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
    </div>
  );
};
