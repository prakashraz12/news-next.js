"use client";
import {
  useLazyClickOnAdsQuery,
  useLazyGetAdsByPositionQuery,
} from "@/(service)/api/ads.api";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setAdsSlice } from "@/(store)/slices/ads.slice";

export const AdsViewComponent = ({
  searchStatus,
}: {
  searchStatus: string;
}) => {
  const ads = useSelector((state: any) => state?.ads?.adsSlice);
  const dispatch = useDispatch();

  const [clickOnAds] = useLazyClickOnAdsQuery();
  const [getAds, { isLoading, data, isSuccess }] =
    useLazyGetAdsByPositionQuery();
  const fetchAds = useCallback(async () => {
    await getAds(searchStatus);
  }, [searchStatus]);

  useLayoutEffect(() => {
    if (searchStatus !== undefined && (!ads || !ads[searchStatus])) {
      fetchAds();
    }
  }, [searchStatus, ads]);

  const handleClickOnAds = async () => {
    await clickOnAds(ads && ads[searchStatus]?._id);
    window.open(`${ads && ads[searchStatus]?.adsUrl}`, "_blank");
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAdsSlice({ [searchStatus]: data?.data }));
    }
  }, [isSuccess]);

  return (
    <>
      {!isLoading && ads && (
        <div
          className="flex justify-center cursor-pointer"
          onClick={handleClickOnAds}
          aria-label="advertisement"
        >
          {ads[searchStatus]?.adsImage && (
            <img
              src={ads[searchStatus]?.adsImage || ""}
              alt="ads-image"
              className="w-full h-[100px] sm:p-1 md:object-cover object-contain rounded-md"
              loading="lazy"
            />
          )}
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
