"use client";
import React, { useCallback, useEffect } from "react";
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

const HomePage = () => {
  const [getSettings] = useGetSettingsMutation();
  const fetchApi = useCallback(async () => {
    getSettings({});
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <HomePageLayout>
      <main className="md:mx-auto min-h-screen w-full">
        <div className="md:container">
          <StoryCoverContainer />
          <RednderHighlightedNews />
          <hr className="mb-5" />
          <RenderNewsList />
          <TrendingNews colSpan={6} />
        </div>
        {/* <FeatureNewsCompoent /> */}
        <section className="md:container">
          <ProvinceNewsComponent />
        </section>
        <section className="md:container">
          <CoverStoryComponent />
        </section>
        <PhotoGalleryComponet />
      </main>
      <MoreCommentedNews />
    </HomePageLayout>
  );
};

export default HomePage;
