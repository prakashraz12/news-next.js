import { useGetStoryNewsQuery } from "@/(service)/api/story.api";
import { News } from "@/types/newsTypes";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { StoryOverCompoent } from "./storyOver.component";

export const StoryCoverContainer = () => {
  const [selectedItems, setSelectedItems] = useState<any>({});
  const [isDrawerOpen, setIsDraweraOpen] = useState<boolean>(false);
  const [storyNews, setStory] = useState<News[]>([]);
  const { data, isSuccess } = useGetStoryNewsQuery({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: -880,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: 880,
        behavior: "smooth",
      });
    }
  };

  const handleNewsSelected = (data: News) => {
    setSelectedItems(data);
    setIsDraweraOpen(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setStory(data?.data);
    }
  }, [isSuccess]);

  return (
    <>
      {isSuccess && (
        <div className="relative mt-6 pl-3 pr-2">
         
          <style>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
          <div className="md:container relative scroll-container">
            <button
              className="md:flex hidden absolute top-[25%] bg-slate-200 dark:bg-slate-700 text-white rounded-full w-10 h-10 justify-center items-center hover:bg-sky-950 transition-all duration-200 z-10"
              style={{ left: -10 }}
              onClick={handleScrollLeft}
            >
              <ArrowLeft />
            </button>
            <div
              ref={containerRef}
              className="flex gap-4 overflow-x-scroll overflow-y-hidden whitespace-no-wrap scroll-container"
              style={{ scrollBehavior: "smooth" }}
            >
              {storyNews?.map((data, index) => (
                <div key={index} onClick={() => handleNewsSelected(data)}>
                  <div className="flex-shrink-0 w-[70px] h-[70px] md:h-[100px] md:w-[100px] rounded-full border-red-900 dark:border-white border border-dashed overflow-hidden flex justify-center items-center">
                    <img
                      src={data?.bannerImage || "/no-photo.png"}
                      className={`md:w-[90px] md:h-[90px] ${data?.bannerImage ? "object-cover" :"object-contain"} ${!data?.bannerImage && "opacity-40"} rounded-full  cursor-pointer h-[60px] w-[60px]`}
                      alt="Image"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 line-clamp-2">
                    {data?.owner?.fullName}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="md:flex hidden absolute top-[25%] bg-slate-200 dark:bg-slate-700 text-white rounded-full w-10 h-10  justify-center items-center hover:bg-sky-950 transition-all duration-200 z-10"
              style={{ right: -10 }}
              onClick={handleScrollRight}
            >
              <ArrowRight />
            </button>
          </div>
        <hr className="mt-2 mb-2" />
        </div>
      )}
      <StoryOverCompoent
        open={isDrawerOpen}
        setOpen={setIsDraweraOpen}
        news={storyNews}
        selectedItems={selectedItems}
      />
    </>
  );
};
