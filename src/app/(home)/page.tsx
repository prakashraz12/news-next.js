import React, { useCallback, useEffect } from "react";
import { AdsViewComponent } from "@/components/ads-view.component";
import { CoverStoryComponent } from "@/components/news/cover-story.component";
import { FeatureNewsCompoent } from "@/components/news/feature-news.compoent";
import { PhotoGalleryComponet } from "@/components/news/photo-gallery.componet";
import { ProvinceNewsComponent } from "@/components/news/province-news.component";
import { TrendingNews } from "@/components/news/trending-news.compoent";
import HomePageLayout from "./layout";
import { MoreCommentedNews } from "@/components/news/more-commented.compoent";
import { RednderHighlightedNews } from "@/components/rednderHighlightedNews.compoent";
import { useGetSettingsMutation } from "@/(service)/api/settings.api";
import { RenderNewsList } from "@/components/renderNewsList.compoent";

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
          <RednderHighlightedNews />
          <p className="text-sm text-center">Advertisement</p>
          <AdsViewComponent />
          <hr className="mb-5" />
          <RenderNewsList />

          {/* <NewsModalComponent newsHeadLine={"समाचार"} />
        
        <br />
        <hr className="mb-5" />
        <p className="text-sm text-center">Advertisement</p>
        <AdsViewComponent />
        <hr className="mb-5" />
   
        <hr className="mb-5 mt-5" />
        <p className="text-sm text-center">Advertisement</p>
        <AdsViewComponent />
        <hr className="mb-5 mt-5" />
     
        <hr className="mb-5 mt-5" />
     
        <p className="text-sm text-center">Advertisement</p>
        <AdsViewComponent />
        <hr className="mb-5 mt-5" />

        <hr className="mb-5 mt-5" />
        <p className="text-sm text-center">Advertisement</p>
        <HorizontalAdsCompoent />
        <hr className="mt-5 mb-5" />
      
        <hr className="mt-5 mb-5" />
       
        <hr className="mt-5" />
        <p className="text-sm text-center">Advertisement</p>
        <HorizontalAdsCompoent />
        <hr className="mt-5" />
        <NarratorNewsCompoent />
        <hr className="mt-5 hidden md:block" />
        <AdsViewComponent />
        <NewsModalComponent newsHeadLine={"विचार"} />
        <AdsViewComponent />
        <hr className="mt-5 mb-5" /> */}
          <TrendingNews colSpan={6} />
        </div>

        <FeatureNewsCompoent />
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
