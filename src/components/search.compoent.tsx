import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearchNewsMutation } from "@/(service)/api/news.api";
import { Skeleton } from "./ui/skeleton";
import { News } from "@/types/newsTypes";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";


export const SearchComponent = () => {
  const [length, setLength] = useState(1);
  const [page, setPage] = useState(1);
  const [newsResults, setNewsResults] = useState<News[]>([]);
  const [galleryResults, setGalleryResults] = useState<News[]>([]);
  const [coverStoryResults, setCoverStoryResults] = useState<News[]>([]);
  const [storyResults, setStoryResults] = useState<News[]>([]);
  const [searchNews, { isLoading, isSuccess, data }] = useSearchNewsMutation();
  const [searchParams, setSearchParams] = useState<string>("");
  const handleSearchParams = async () => {
    await searchNews({ searchParams: searchParams, page });
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (page > 1) {
      handleSearchParams();
    }
  }, [page]);

  useEffect(() => {
    if (isSuccess) {
      setCoverStoryResults((prev) => [
        ...prev,
        ...(data?.data?.CoverStoryNews as News[]),
      ]);
      setStoryResults((prev) => [
        ...prev,
        ...(data?.data?.StoryNews as News[]),
      ]);
      setNewsResults((prev) => [
        ...prev,
        ...(data?.data?.NewsResults as News[]),
      ]);
      setGalleryResults((prev) => [
        ...prev,
        ...(data?.data?.GalleryNews as News[]),
      ]);
      setLength(data?.data?.length);
    }
  }, [isSuccess]);

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Search />
        </Button>
      </DialogTrigger>
     
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] w-full">
        <DialogHeader>
          <DialogTitle className="text-xl text-sky-900 dark:text-white w-full flex justify-between items-center ">
            खोज्नुहोस्  <DialogClose>
      <X/>
      </DialogClose>
          </DialogTitle>
        </DialogHeader>
        <div className=" py-4 w-full flex flex-col gap-2 ">
          <Input
            id="name"
            placeholder="शीर्षक, लेखक, वा स्तम्भमा खोज्नुहोस्"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            className="w-full"
          />
          <Button onClick={handleSearchParams}>
            <Search />
          </Button>
          {
            isSuccess && searchParams?.length > 0 && <p className="text-2xl font-bold text-center mt-2">
            {`"${searchParams}"`} का सर्च रिजल्ट
          </p>
          }
          <div>
            <div className="mt-1 max-h-[500px] overflow-auto" id="scrollableDiv">
              {isLoading && page === 1 &&
                Array.from({ length: 5 }).map((_, index) => (
                  <LoadingAnimation key={index} />
                ))}
              <InfiniteScroll
                dataLength={length}
                next={handleNext}
                hasMore={length === 0 ? false : true}
                loader={<LoadingAnimation />}
                scrollableTarget="scrollableDiv"
              >
                {newsResults?.map((item, index: number) => (
                  <Link href={`/home/news/${item?._id}`} key={index}>
                    <Card
                      className="w-full flex gap-2  md:p-2 cursor-pointer mt-2"
                      key={index}
                    >
                      <img
                        src={item?.bannerImage || "/no-photo.png"}
                        alt="news-image"
                        className="object-cover h-[100px] w-[100px]"
                      />
                      <div>
                        <CardHeader className="p-1">
                          <CardTitle className="text-sm font-medium line-clamp-2">
                            {item?.newsTitle}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item?.shortDescription}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                ))}
                {coverStoryResults?.map((item, index: number) => (
                  <Link href={`/home/coverstory/${item?._id}`} key={index}>
                    <Card
                      className="w-full flex gap-2  md:p-2 cursor-pointer mt-2"
                      key={index}
                    >
                      <img
                        src={item?.bannerImage || "/no-photo.png"}
                        alt="news-image"
                        className="object-cover h-[100px] w-[100px]"
                      />
                      <div>
                        <CardHeader className="p-1">
                          <CardTitle className="text-sm font-medium line-clamp-2">
                            {item?.newsTitle}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item?.shortDescription}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                ))}
                {galleryResults?.map((item, index: number) => (
                  <Link href={`/home/gallery/${item?._id}`} key={index}>
                    <Card
                      className="w-full flex gap-2  md:p-2 cursor-pointer mt-2"
                      key={index}
                    >
                      <img
                        src={item?.bannerImage || "/no-photo.png"}
                        alt="news-image"
                        className="object-cover h-[100px] w-[100px]"
                      />
                      <div>
                        <CardHeader className="p-1">
                          <CardTitle className="text-sm font-medium line-clamp-2">
                            {item?.newsTitle}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item?.shortDescription}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                ))}
                {storyResults?.map((item, index: number) => (
                  <Link href={`/home/story/${item?._id}`} key={index}>
                    <Card
                      className="w-full flex gap-2  md:p-2 cursor-pointer mt-2"
                      key={index}
                    >
                      <img
                        src={item?.bannerImage || "/no-photo.png"}
                        alt="news-image"
                        className="object-cover h-[100px] w-[100px]"
                      />
                      <div>
                        <CardHeader className="p-1">
                          <CardTitle className="text-sm font-medium line-clamp-2">
                            {item?.newsTitle}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item?.shortDescription}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const LoadingAnimation = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mt-4">
        <div className="col-span-2 hidden md:block">
          <Skeleton className="w-full rounded-sm h-[100px]" />
        </div>
        <div className="col-span-12 md:col-span-12 flex flex-col gap-2 justify-center">
          <Skeleton className="w-full h-2" />
          <Skeleton className="w-[90%] h-2" />
          <Skeleton className="w-[60%] h-2" />
          <Skeleton className="w-[93%] h-2" />
          <Skeleton className="w-[85%] h-2" />
          <Skeleton className="w-full h-2" />
        </div>
      </div>
      <hr className="mt-2 mb-2" />
    </>
  );
};
