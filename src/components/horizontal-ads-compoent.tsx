import React from "react";
import { HorizontalAdsCard } from "./horizontal-ads-card";

export const HorizontalAdsCompoent = () => {
  return (
    <div className="grid-cols-1 md:grid-cols-3 gap-4  hidden md:grid">
      <HorizontalAdsCard />
      <HorizontalAdsCard />
      <HorizontalAdsCard />
    </div>
  );
};
