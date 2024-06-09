import React, { useEffect, useRef, useState } from "react";
import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { News } from "@/types/newsTypes";
import { type CarouselApi } from "@/components/ui/carousel";
import { X } from "lucide-react";
import { useDeviceType } from "../../../hook/useDeviceType";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
interface StoryOverCompoentPorps {
  open: boolean;
  setOpen: (type: boolean) => void;
  news: News[];
  selectedItems: News;
}

export const StoryOverCompoent = ({
  open,
  setOpen,
  news,
  selectedItems,
}: StoryOverCompoentPorps) => {
  const isMobile = useDeviceType();
  const selectedCardRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (open && selectedCardRef.current && api) {
      const index = news.findIndex((item) => item._id === selectedItems._id);
      if (index !== -1) {
        api.scrollTo(isMobile ? index : index - 1);
      }
    }
  }, [open, selectedItems, api, news]);

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerContent className="h-screen overflow-hidden p-0 border-none">
        <DrawerHeader className="md:flex justify-end w-full hidden">
          <div
            className="md:flex hidden mx-auto mt-4 h-[50px] w-[50px] rounded-full hover:bg-slate-300  justify-center items-center  ease-linear duration-100 transition-all text-slate-600 cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            <X />
          </div>
        </DrawerHeader>
        <Carousel
          className="md:container h-screen relative"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {news?.map((data, index) => (
              <CarouselItem
                defaultValue={6}
                key={index}
                className="md:basis-1/1 lg:basis-1/3"
              >
                <Link href={`/home/story/${data?._id}`}>
                  <div className="flex  items-center h-screen md:h-[90vh] w-full">
                    <div
                      className={`w-full relative h-full`}
                      ref={
                        selectedItems?._id === data?._id
                          ? selectedCardRef
                          : null
                      }
                    >
                      <div className="relative group overflow-hidden cursor-pointer h-full p-0">
                        <img
                          src={data?.bannerImage || "/no-photo.png"}
                          className={` ${data?.bannerImage ? "object-cover" : "object-contain"} ${!data?.bannerImage && "opacity-75"} h-full w-full`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

                        <div className="absolute inset-0 flex items-start justify-end pointer-events-none p-2 pb-8 flex-col pl-4">
                          <p className="text-2xl font-semibold  pb-3 text-white line-clamp-2">
                            {data?.newsTitle}
                          </p>

                          <div className=" flex items-center gap-4">
                            <Avatar className="border-2 border-white">
                              <AvatarImage
                                src={data?.owner?.avatar}
                                alt={data?.owner?.fullName}
                                className="object-cover"
                              />
                              <AvatarFallback>
                                {data?.owner?.fullName?.slice(0, 1)}
                              </AvatarFallback>
                            </Avatar>
                            <p className="text-white">
                              {data?.owner?.fullName}.
                              <span className="font-medium text-sm">
                                २०८१ जेठ २० गते १४:११
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 left-3 shadow-lg bg-sky-950 text-white" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 right-3 shadow-lg bg-sky-950 text-white" />
        </Carousel>
      </DrawerContent>
    </Drawer>
  );
};
