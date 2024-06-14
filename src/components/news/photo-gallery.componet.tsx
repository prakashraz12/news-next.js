"use client";
import { ArrowRightCircleIcon } from "lucide-react";
import React, { useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useGetGalleryNewsMutation } from "@/(service)/api/gallery.api";
import { News } from "@/types/newsTypes";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { AdsViewComponent } from "../ads-view.component";
import { useDispatch, useSelector } from "react-redux";
import { setGalleryNews } from "@/(store)/slices/cache.slice";

export const PhotoGalleryComponet = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const galleryNews: News[] = useSelector(
    (state: any) => state?.cache?.galleryNews
  );
  const [searchPhotoGallery, { data, isSuccess }] = useGetGalleryNewsMutation();
  const fetchApi = useCallback(async () => {
    await searchPhotoGallery({ page: 1, limit: 10 });
  }, []);

  useEffect(() => {
    if (galleryNews?.length === 0) {
      fetchApi();
    }
  }, [galleryNews]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setGalleryNews(data?.data));
    }
  }, [isSuccess]);

  return (
    <>
      {galleryNews?.length > 0 && (
        <div className="bg-rose-900 w-full h-auto p-9">
          <div className="md:container">
            <div className="flex justify-between">
              <h1 className="text-3xl  md:text-5xl font-bold text-white">
                ग्यालरी
              </h1>
              <ArrowRightCircleIcon className="text-white cursor-pointer" />
            </div>
            <div className="flex justify-center align-middle mt-5">
              <Carousel
                className="w-11/12"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent className="-ml-1">
                  {galleryNews?.map((data, index) => (
                    <CarouselItem
                      key={index}
                      onClick={() => router.push(`/home/gallery/${data?._id}`)}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="border-none rounded-sm">
                          <CardContent className="p-0">
                            <div className="relative  overflow-hidden cursor-pointer ">
                              <img
                                src={data?.bannerImage || "/no-photo.png"}
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
                                {data?.newsTitle}
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
          <div>
            <hr className="mt-2 mb-2" />
            <p className="text-sm text-center text-white">Advertisement</p>
            <div className="md:container">
              <AdsViewComponent searchStatus="gallery" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
