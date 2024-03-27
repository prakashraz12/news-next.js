import { AdsViewComponent } from "@/components/ads-view.component";
import { HorizontalAdsCompoent } from "@/components/horizontal-ads-compoent";
import { ColNewsViewsCompoent } from "@/components/news/col-news-viewer.compoent";
import { CoverStoryComponent } from "@/components/news/cover-story.component";
import { FeatureNewsCompoent } from "@/components/news/feature-news.compoent";
import { HighlightedTopNews } from "@/components/news/highlighted-top.componet";
import { NarratorNewsCompoent } from "@/components/news/narrator-news.compoent";
import { NewsModalComponent } from "@/components/news/news-modal.compoent";
import { PhotoGalleryComponet } from "@/components/news/photo-gallery.componet";
import { ProvinceNewsComponent } from "@/components/news/province-news.component";
import { TrendingNews } from "@/components/news/trending-news.compoent";

export default function Home() {
  return (
    <main className=" md:container md:mx-auto min-h-screen w-full">
      <HighlightedTopNews />
      <HighlightedTopNews />
      <p className="text-sm text-center">Advertisement</p>
      <AdsViewComponent />
      <hr className="mb-5" />
      <NewsModalComponent newsHeadLine={"समाचार"} />
      <NarratorNewsCompoent />
      <br />
      <hr className="mb-5" />
      <p className="text-sm text-center">Advertisement</p>
      <AdsViewComponent />
      <hr className="mb-5" />
      <FeatureNewsCompoent />
      <hr className="mb-5 mt-5" />
      <p className="text-sm text-center">Advertisement</p>
      <AdsViewComponent />
      <hr className="mb-5 mt-5" />
      <ColNewsViewsCompoent />
      <hr className="mb-5 mt-5" />
      <TrendingNews />
      <p className="text-sm text-center">Advertisement</p>
      <AdsViewComponent/>
      <hr className="mb-5 mt-5" />
      <CoverStoryComponent/>
      <hr className="mb-5 mt-5"/>
      <p className="text-sm text-center">Advertisement</p>
      <HorizontalAdsCompoent/>
      <hr className="mt-5 mb-5"/>
      <PhotoGalleryComponet/>
      <hr className="mt-5 mb-5"/>
      <ProvinceNewsComponent/>
      <hr className="mt-5"/>
      <p className="text-sm text-center">Advertisement</p>
      <HorizontalAdsCompoent/>
    </main>
  );
}
