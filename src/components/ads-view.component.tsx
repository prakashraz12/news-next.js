"use client";
import { useLazyGetAdsByPositionQuery } from "@/(service)/api/ads.api";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setAdsSlice } from "@/(store)/slices/ads.slice";

export const AdsViewComponent = ({
  searchStatus,
}: {
  searchStatus: string;
}) => {
  const ads = useSelector((state:any) => state?.ads?.adsSlice);
  const dispatch = useDispatch();
  const [getAds, { isLoading, data, isSuccess }] = useLazyGetAdsByPositionQuery();

  const fetchAds = useCallback(async () => {
    await getAds(searchStatus);
  }, [searchStatus]);

  useEffect(() => {
    if (searchStatus !== undefined) {
      fetchAds();
    }
  }, [searchStatus, ads]);

  useEffect(() => {
    if (isSuccess) {
      const newData = { ...ads, [searchStatus]: data?.data }; // Merge new data with existing data
      dispatch(setAdsSlice(newData));
    }
  }, [isSuccess, searchStatus, data, ads]);
  
  console.log(ads)
  return (
    <>
      {isSuccess && (
        <div className="flex justify-center cursor-pointer">
          {/* <Image
            width={0}
            height={0}
            src={data?.data?.adsImage}
            alt="ads-image"
            className="w-full h-[100px] sm:p-1 object-fit rounded-md"
            loading="lazy"
          /> */}
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
