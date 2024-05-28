"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NewsModalComponent } from "./news/news-modal.compoent";
import { ColNewsViewsCompoent } from "./news/col-news-viewer.compoent";
import { NarratorNewsCompoent } from "./news/narrator-news.compoent";
import { AppSettingsPorps } from "@/types/newsTypes";

export const RenderNewsList = () => {
  const [isClient, setIsClient] = useState(false);

  const appSettings = useSelector(({ app }: { app: AppSettingsPorps }) => {
    if ("appSettings" in app) {
      return app?.appSettings;
    }
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient &&
        appSettings?.menus?.map((menuItem, index) => {
          const matchedLayout = appSettings?.layout.find(
            (item) => item._id === menuItem?.layout
          );

          if (matchedLayout) {
            switch (matchedLayout.layoutTitle) {
              case "row":
                return <NewsModalComponent item={menuItem} key={index} />;
              case "half_N_half":
                return <ColNewsViewsCompoent item={menuItem} key={index} />;
              default:
                return <NarratorNewsCompoent item={menuItem} key={index} />;
            }
          } else {
            return null;
          }
        })}
    </>
  );
};
