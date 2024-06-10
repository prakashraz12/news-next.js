"use client";
import { useLazyGetAdsByPositionQuery } from "@/(service)/api/ads.api";
import React, { useCallback, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
export const SideBarAdsCompoent = ({ searchStatus }: { searchStatus: string }) => {
  const [getAds, { isLoading, data, isSuccess }] = useLazyGetAdsByPositionQuery();

  const fetchAds = useCallback(async () => {
    await getAds(searchStatus)
  }, [searchStatus]);

  useEffect(() => {
    if (searchStatus !== undefined) {
      fetchAds()
    }
  }, [searchStatus])

  return (
    <>
      {
        isSuccess && <div className="mt-1 cursor-pointer w-[100%]">
          <img
            src={data?.data?.adsImage}
            alt="ads-image"
            loading="lazy"
            className="md:w-[90%] w-full h-[200px] md:object-cover object-contain rounded"
          />
        </div>
      }
      {
        isLoading && <Skeleton className="w-full h-[200px]" />
      }
    </>
  );
};
