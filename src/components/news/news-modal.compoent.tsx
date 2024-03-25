import React from "react";
import { HorizontalNewsCard } from "./horizontal-news-card.compoent";
import { Button } from "../ui/button";
import { SideBarAdsCompoent } from "./side-bar-ads.compoent";
interface NewsModalComponentProps {
  newsHeadLine: String;
  news?: [];
}
export const NewsModalComponent = ({
  newsHeadLine,
}: NewsModalComponentProps) => {
  return (
    <React.Fragment>
      <div className="w-full mb-3 p-3">
        <h1 className="text-5xl font-bold text-sky-800">{newsHeadLine}</h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-3">
        <div className="relative">
          <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/Holi-Celebrating-@Basantapur-4.jpg"
            alt="news-image"
            loading="lazy"
            className="w-full rounded object-cover min-h-96 h-full transition-transform transform hover:scale-105  ease-in cursor-pointer"
          />

          <p className="text-xl font-bold absolute bottom-7 text-white left-3 shadow-md	backdrop-opacity-10 backdrop-invert bg-black/30">
            होली खेलिसकेपछि कसरी गर्ने अनुहारको स्याहार ? होली खेलिसकेपछि कसरी
            गर्ने अनुहारको स्याहार ?
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <HorizontalNewsCard />
          <HorizontalNewsCard />
          <HorizontalNewsCard />
          <Button className="bg-sky-800 text-xl">थप समाचार</Button>
        </div>
        <div className="flex flex-col hidden md:block">
          <SideBarAdsCompoent />
          <SideBarAdsCompoent />
        </div>
      </div>
      <hr className="mb-3 mt-3" />
    </React.Fragment>
  );
};
