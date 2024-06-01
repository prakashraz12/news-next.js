import React, { useState, useEffect, useCallback } from "react";
import { useGetNewsByMenusMutation } from "@/(service)/api/news.api";
import { useParams } from "next/navigation";
import { LayOutTwoLoading, LayoutTwo } from "./layoutTwo";
import { FallbackNewsLayout } from "./fallback-news.layout";
import { LayoutThree, LayoutThreeLoading } from "./layoutThree";
import { LayoutOneComponent, LayoutOneLoading } from "./layout_one";
import { News } from "@/types/newsTypes";

interface NewsProps {
  submenu?: string;
  news: News[];
}

export const MainMenuPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newsData, setMenuData] = useState<NewsProps[]>([]);
  const [allNewsData, setAllNewsData] = useState<News[]>([]);
  const params = useParams();
  const [menusIds, { data, isSuccess }] = useGetNewsByMenusMutation();

  const fetchNews = useCallback(async () => {
    if (params.id) {
      await menusIds({ menuId: params.id });
    }
  }, [params.id, menusIds]);

  useEffect(() => {
    if (params?.id) {
      fetchNews();
    }
  }, [params?.id, fetchNews]);

  useEffect(() => {
    if (isSuccess) {
      if (data?.data?.isSubMenuNull === true) {
        setAllNewsData(data?.data?.data);
        setLoading(false);
      } else {
        setMenuData(data?.data?.data);
        setLoading(false);
      }
    }
  }, [isSuccess, data]);

  // Shuffle the layout components
  const shuffledLayouts = shuffleArray([
    LayoutOneComponent,
    LayoutTwo,
    LayoutThree,
  ]);

  // Shuffle the loading layout;
  const layoutSuffle = shuffleArray([
    LayoutOneLoading,
    LayOutTwoLoading,
    LayoutThreeLoading,
  ]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <>
          {isSuccess && newsData?.length > 0 && (
            <div className="w-full p-2">
              {isSuccess &&
                newsData?.map((news: any, index: number) => {
                  if (news?.news?.length > 0) {
                    const LayoutComponent =
                      index === 0
                        ? LayoutOneComponent
                        : shuffledLayouts[index % shuffledLayouts.length];
                    return <LayoutComponent news={news} key={index} />;
                  }
                })}
            </div>
          )}
          {loading &&
            Array.from({ length: 3 }).map((_, index) => {
              const LayoutLoading =
                index === 0
                  ? LayoutOneLoading
                  : layoutSuffle[index % layoutSuffle.length];
              return (
                <div className="p-3" key={index}>
                  <LayoutLoading />
                </div>
              );
            })}

          {isSuccess && allNewsData?.length > 0 && (
            <FallbackNewsLayout allNewsData={allNewsData} />
          )}
        </>
      )}
    </>
  );
};

export function shuffleArray(array: any[]): any[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
