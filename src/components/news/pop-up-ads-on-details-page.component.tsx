"use client";
import React, { useCallback, useEffect } from "react";
import { Badge } from "../ui/badge";
import { formatNepaliDate } from "@/utils/format-neplai-version-date.util";
import {
  useLazyClickOnAdsQuery,
  useLazyGetAdsByPositionQuery,
} from "@/(service)/api/ads.api";

const todayDate = new Date();
interface PopUpAdsOnDetailsPageProps {
  setIsAdsShown: React.Dispatch<React.SetStateAction<boolean>>;
  searchStatus: string;
}
export const PopUpAdsPage = ({
  setIsAdsShown,
  searchStatus,
}: PopUpAdsOnDetailsPageProps) => {
  const [getAds, { data, isSuccess }] = useLazyGetAdsByPositionQuery();
  const [clickOnAds] = useLazyClickOnAdsQuery();
  const fetchAds = useCallback(async () => {
    await getAds(searchStatus);
  }, [searchStatus]);
  const handleClickOnAds = async () => {
    await clickOnAds(data?.data?._id);
    window.open(`${data?.data?.adsUrl}`, "_blank");
  };

  useEffect(() => {
    if (searchStatus !== undefined) {
      fetchAds();
    }
  }, [searchStatus]);
  return (
    <>
      {isSuccess && (
        <div className="w-full fixed bg-slate-200 h-screen z-50 top-0 overflow-hidden flex justify-center items-center flex-col transition-all ease-in-out duration-1000">
          <div className="flex flex-col mb-5">
            <h1 className="text-5xl text-sky-900 font-bold">नेपाल खबर</h1>
            <p className="text-sm text-sky-900 text-end mt-2">
              {formatNepaliDate(todayDate)}
            </p>
          </div>
          <div className="w-full md:w-[500px] h-[300px]  relative">
            <img
              src={data?.data?.adsImage}
              className="aspect-video sm:w-full h-full"
              loading="lazy"
              onClick={handleClickOnAds}
            />
            <Badge
              className="bg-red-600 absolute top-[-40px] right-2 p-2 cursor-pointer"
              onClick={() => {
                setIsAdsShown(false);
              }}
            >
              SKIP THIS ADS
            </Badge>
          </div>
        </div>
      )}
    </>
  );
};
