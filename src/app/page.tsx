import { AdsViewComponent } from "@/components/ads-view.component";
import { ColNewsViewsCompoent } from "@/components/news/col-news-viewer.compoent";
import { FeatureNewsCompoent } from "@/components/news/feature-news.compoent";
import { HighlightedTopNews } from "@/components/news/highlighted-top.componet";
import { NarratorNewsCompoent } from "@/components/news/narrator-news.compoent";
import { NewsModalComponent } from "@/components/news/news-modal.compoent";
import { TrendingNews } from "@/components/news/trending-news.compoent";

export default function Home() {
  return (
    <main className=" md:container md:mx-auto min-h-screen w-full">
      <HighlightedTopNews />
      <HighlightedTopNews />
      <AdsViewComponent />
      <hr className="mb-5" />
      <NewsModalComponent newsHeadLine={"समाचार"} />
      <NarratorNewsCompoent />
      <br />
      <hr className="mb-5" />
      <AdsViewComponent />
      <hr className="mb-5" />
      <FeatureNewsCompoent />
      <hr className="mb-5 mt-5" />
      <AdsViewComponent />
      <hr className="mb-5 mt-5" />
      <ColNewsViewsCompoent />
      <hr className="mb-5 mt-5" />
      <TrendingNews />
      <AdsViewComponent/>
      <hr className="mb-5 mt-5" />
    </main>
  );
}
