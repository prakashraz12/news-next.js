'use client';
import Image from "next/image";
import React from "react";
interface AdsViewProps {
  width?: number;
}
export const AdsViewComponent = () => {
  return (
    <div className="flex justify-center">
      <Image
        width={0}
        height={0}
        src={
          "https://www.onlinekhabar.com/wp-content/uploads/2023/11/FTTH__900-x-100.gif"
        }
        alt="ads-image"
        className="sm:w-full md:w-[900px] h-fit sm:p-1 md:p-4 object-contain"
      />
    </div>
  );
};
