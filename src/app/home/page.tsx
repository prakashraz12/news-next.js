"use client";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { CoverStoryComponent } from "@/components/news/cover-story.component";
// import { FeatureNewsCompoent } from "@/components/news/feature-news.compoent";
import { PhotoGalleryComponet } from "@/components/news/photo-gallery.componet";
import { ProvinceNewsComponent } from "@/components/news/province-news.component";
import { TrendingNews } from "@/components/news/trending-news.compoent";
import HomePageLayout from "./layout";
import { MoreCommentedNews } from "@/components/news/more-commented.compoent";
import { RednderHighlightedNews } from "@/components/rednderHighlightedNews.compoent";
import { useGetSettingsMutation } from "@/(service)/api/settings.api";
import { RenderNewsList } from "@/components/renderNewsList.compoent";
import { StoryCoverContainer } from "@/components/news/storyContainer.compoent";
import { useDispatch, useSelector } from "react-redux";
import { PopUpAdsPage } from "@/components/news/pop-up-ads-on-details-page.component";
import { setIsFlagged } from "@/(store)/slices/cache.slice";

const HomePage = () => {
  const flagged = useSelector((state: any) => state?.cache?.isFlaged);
  const dispatch = useDispatch();
  const settings = useSelector(
    (state: any) => state?.app?.appSettings?.defaultSettings
  );
  const [isAdsShown, setIsAdsShown] = useState(false);
  const [getSettings] = useGetSettingsMutation();
  const fetchApi = useCallback(async () => {
    getSettings({});
  }, []);

  useLayoutEffect(() => {
    if (settings === null || settings === undefined) {
      fetchApi();
    }
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsAdsShown(false);
      dispatch(setIsFlagged(true));
    }, 4000);
  }, []);

  useLayoutEffect(() => {
    if (
      settings &&
      settings[0]?.isShowPopupAdsOnLandingPage === true &&
      flagged === false
    ) {
      setIsAdsShown(true);
    }
  }, [settings]);

  return (
    <HomePageLayout>
      <main className="md:mx-auto min-h-screen w-full mt-6">
        {isAdsShown && (
          <PopUpAdsPage searchStatus="popup-2" setIsAdsShown={setIsAdsShown} />
        )}
        <div className="max-w-6xl mx-auto">
          <StoryCoverContainer />
          <RednderHighlightedNews />
          <hr className="mb-5" />
          <RenderNewsList />
          <TrendingNews colSpan={6} />
        </div>
        {/* <FeatureNewsCompoent /> */}
        <section className="mx-auto max-w-6xl">
          <ProvinceNewsComponent />
        </section>
        <section className="mx-auto max-w-6xl">
          <CoverStoryComponent />
        </section>
        <PhotoGalleryComponet />
      </main>
      <MoreCommentedNews />
    </HomePageLayout>
  );
};

export default HomePage;
