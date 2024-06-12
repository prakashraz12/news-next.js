"use client";
import {
  useLazyClickOnAdsQuery,
  useLazyGetAdsByPositionQuery,
} from "@/(service)/api/ads.api";
import React, { useCallback, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export const AdsViewComponent = ({
  searchStatus,
}: {
  searchStatus: string;
}) => {
  const [adsData, setAdsData] = useState<any>({});
  const [clickOnAds] = useLazyClickOnAdsQuery();
  const [getAds, { isLoading, data, isSuccess }] =
    useLazyGetAdsByPositionQuery();
  const fetchAds = useCallback(async () => {
    await getAds(searchStatus);
  }, [searchStatus]);

  useEffect(() => {
    if (searchStatus !== undefined) {
      fetchAds();
    }
  }, [searchStatus]);

  const handleClickOnAds = async () => {
    await clickOnAds(adsData?._id);
    window.open(`${adsData?.adsUrl}`, "_blank");
  };

  useEffect(() => {
    if (isSuccess) {
      setAdsData(data?.data);
    }
  }, [isSuccess]);
  
  return (
    <>
      {isSuccess && adsData &&  (
        <div
          className="flex justify-center cursor-pointer"
          onClick={handleClickOnAds}
        >
          <img
            src={adsData?.adsImage || ""}
            alt="ads-image"
            className="w-full h-[100px] sm:p-1 md:object-cover object-contain rounded-md"
            loading="lazy"
          />
        </div>
      )}
      {isLoading && (
        <div className="">
          <Skeleton className="w-full h-[100px]" />
        </div>
      )}
    </>
  );
};
