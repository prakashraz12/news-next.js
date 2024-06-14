import React, { useCallback, useEffect } from "react";
import { TrendingNewsCardCompoent } from "../trending-news-card-compoent";
import { useGetTrendingNewsMutation } from "@/(service)/api/news.api";
import { Skeleton } from "../ui/skeleton";
import { AdsViewComponent } from "../ads-view.component";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingNews } from "@/(store)/slices/cache.slice";

interface TrendingNews {
  newsTitle: string;
  _id: string;
}
interface TrendingNewsProps {
  colSpan?: number;
  menu?: string;
  limit?: number;
}
export const TrendingNews = ({ colSpan, menu, limit }: TrendingNewsProps) => {
  const dispatch = useDispatch();
  const trendingNews = useSelector((state: any) => state?.cache?.trendingNews);

  const [getTrendingNews, { isSuccess, data, isLoading }] =
    useGetTrendingNewsMutation();

  const fetchNews = useCallback(async () => {
    await getTrendingNews({
      menuId: menu ? menu : undefined,
      limit: limit ? limit : 10,
    });
  }, [menu]);

  useEffect(() => {
    if (trendingNews?.length === 0) {
      fetchNews();
    }
  }, [trendingNews]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setTrendingNews(data?.data))
    }
  },[isSuccess])
  return (
    <div className="w-full p-3">
      <h1 className="text-2xl md:text-5xl font-bold text-sky-800 dark:text-white">
        ट्रेन्डिङ
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 md:gap-4 mt-5 gap-2">
          {trendingNews &&
           trendingNews?.slice(0, 6).map((item: TrendingNews, index: number) => (
              <div
                className={`col-span-12 md:col-span-${colSpan ? colSpan : 6}`}
                key={index}
              >
                <TrendingNewsCardCompoent
                  newsOrder={index + 1}
                  newsTitle={item?.newsTitle}
                  id={item._id}
                />
              </div>
            ))}
        </div>
      )}
      <section>
        <p className="text-sm font-extralight text-center">Advertisement</p>

        <AdsViewComponent searchStatus="trending" />
      </section>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="grid grid-cols-12 md:gap-4 mt-5 gap-2">
      {Array.from({ length: 10 }).map((i, index) => (
        <div
          className={`col-span-12 md:col-span-${6} flex w-full gap-5`}
          key={index}
        >
          <Skeleton className="w-[12%] h-[60px]" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[100%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      ))}
    </div>
  );
};
