import React from "react";

// interface HorizontalAdsCardProps {
//   adsImageUrl: string;
//   adsLink: string;
// }
export const HorizontalAdsCard = () => {

  return (
    <div className="w-full cursor-pointer">
      <img
        src="https://www.onlinekhabar.com/wp-content/uploads/2024/02/300x150gif.gif"
        alt="ads-image"
        className="aspect-square w-full h-[250px] object-contain"
      />
    </div>
  );
};
