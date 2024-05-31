"use client";
import React from "react";
import { Card } from "../ui/card";

export const SideBarAdsCompoent = () => {
  return (
    <Card className="mt-1 cursor-pointer w-[100%]">
      <img
        src="https://www.onlinekhabar.com/wp-content/uploads/2023/09/300-x-200.gif"
        alt="ads-image"
        className="md:w-full/2 w-full h-[200px] md:object-cover object-contain rounded"
      />
    </Card>
  );
};
