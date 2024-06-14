"use client";
import {
  useLazyClickOnAdsQuery,
  useLazyGetAdsByPositionQuery,
} from "@/(service)/api/ads.api";
import React, { useCallback, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setAdsSlice } from "@/(store)/slices/ads.slice";
export const SideBarAdsCompoent = ({
  searchStatus,
}: {
  searchStatus: string;
}) => {
  const ads = useSelector((state: any) => state?.ads?.adsSlice);
  const dispatch = useDispatch();
  const [getAds, { isLoading, data, isSuccess }] =
    useLazyGetAdsByPositionQuery();
  const [clickOnAds] = useLazyClickOnAdsQuery();
  const fetchAds = useCallback(async () => {
    await getAds(searchStatus);
  }, [searchStatus]);

  useEffect(() => {
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
        <div className="mt-1 cursor-pointer w-[100%]" onClick={handleClickOnAds}>
          <img
            src={ads[searchStatus]?.adsImage}
            alt="ads-image"
            loading="lazy"
            className="md:w-[90%] w-full h-[200px] md:object-cover object-cover rounded"
          />
        </div>
      )}
      {isLoading && <Skeleton className="w-full h-[200px]" />}
    </>
  );
};
