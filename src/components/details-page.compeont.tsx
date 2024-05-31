import React, { useEffect, useState } from "react";
import { ReporterAvatarCompoent } from "./reporter-avatar.compoent";
import { TimeCountComponent } from "./time-count.compoent";
import {
  Facebook,
  MessageCircleDashedIcon,
  MessageCircleMore,
  Twitter,
} from "lucide-react";
import { NewsDetailsLoading } from "./news-details-page-loading.component";
import { News } from "@/types/newsTypes";
import { AdsViewComponent } from "./ads-view.component";
import { SideBarAdsCompoent } from "./news/side-bar-ads.compoent";
import { TrendingNews } from "./news/trending-news.compoent";
import { RelatedNews } from "./news/relatedNews.compont";
import { FeedBackContainer } from "./news/feed-back-container.compoent";
import { FeelingAfterReadNewsCompoent } from "./news/feeling-after-read-news.compoent";
import { HorizontalAdsCompoent } from "./horizontal-ads-compoent";
import parse from "html-react-parser";
import { HorizontalNewsCard } from "./news/horizontal-news-card.compoent";
import { Comment } from "@/types/newsTypes";
interface DetailsPageProps {
  isNewsFetching: boolean;
  isNewsfetched: boolean;
  newsData: News;
  type?: string;
}
export const NewsDetailsPage: React.FC<DetailsPageProps> = ({
  isNewsFetching,
  isNewsfetched,
  newsData,
  type,
}) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [isHeadingSticky, setIsHeadingSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll: () => void = () => {
      const scrollPosition = window.scrollY;
      setIsHeadingSticky(scrollPosition > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll: () => void = () => {
      const scrollPosition = window.scrollY;
      setIsHeadingSticky(scrollPosition > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      {/* {isAdsShown && <PopUpAdsOnDetailsPage setIsAdsShown={setIsAdsShown} />} */}
      {isNewsFetching && <NewsDetailsLoading />}
      {isNewsfetched && (
        <div className="md:container md:mx-auto min-h-screen w-full overflow-hidden p-2">
          <div className="w-full p-1 md:p-8 ">
            <div
              className={`sticky top-[20px] z-10  dark:bg-[#020817] bg-white`}
            >
              <div className="flex justify-between">
                <h1
                  className={`text-5xl md:block hidden text-sky-950  dark:text-white  font-bold mt-2 mb-3 ease-in-out duration-50 transition-all ${isHeadingSticky ? "text-xl" : "text-6xl"}`}
                >
                  {newsData?.newsTitle}
                </h1>
                {isHeadingSticky && (
                  <div className="md:flex hidden items-center gap-3 justify-center ease-in duration-50 mt-3 mb-3">
                    <ReporterAvatarCompoent
                      fullName={newsData?.owner?.fullName}
                      imageUrl={newsData?.owner?.avatar}
                    />
                    {newsData?.createdAt !== undefined && (
                      <TimeCountComponent
                        createTime={new Date(newsData?.createdAt)}
                      />
                    )}
                  </div>
                )}
              </div>
              <hr className="hidden md:block" />
            </div>
            <div className="grid grid-cols-12 w-full gap-5">
              <div className="col-span-1 hidden md:block">
                <div
                  className={`sticky top-[155px]  p-2  z-0 ease-out duration-500`}
                >
                  <div className="flex justify-center items-center flex-col gap-2">
                    <MessageCircleDashedIcon size={"48px"} color="#2596be" />
                    <h1 className="text-3xl font-bold">{comment.length}</h1>
                    <p className="text-md">comments</p>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-2 mt-3">
                    <h1 className="text-3xl font-bold text-sky-900 dark:text-white">
                      900
                    </h1>
                    <p className="text-md text-slate-500 dark:text-white">
                      shares
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col justify-between items-center h-auto gap-2 text-white">
                      <li className="w-[55px] h-[55px] bg-sky-900 flex justify-center items-center rounded-full">
                        <Facebook color="#fff" />
                      </li>
                      <li className="w-[55px] h-[55px] bg-sky-900 flex justify-center items-center rounded-full">
                        <Twitter />
                      </li>
                      <li className="w-[55px] h-[55px] bg-sky-900 flex justify-center items-center rounded-full">
                        <MessageCircleMore />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 col-span-12 w-full">
                {!isHeadingSticky && (
                  <div className="md:flex hidden items-center gap-3 justify-center ease-in duration-700 mt-3 mb-3">
                    <ReporterAvatarCompoent
                      fullName={newsData?.owner?.fullName}
                      imageUrl={newsData?.owner?.avatar}
                    />
                    {newsData?.createdAt !== undefined && (
                      <TimeCountComponent
                        createTime={new Date(newsData?.createdAt)}
                      />
                    )}
                  </div>
                )}
                <div className="md:hidden">
                  <h1 className={`text-2xl font-bold mt-2 mb-3`}>
                    {newsData?.newsTitle}
                  </h1>
                  <hr className="mt-2 mb-2"></hr>
                  <div className="flex justify-between items-center">
                    <ReporterAvatarCompoent
                      fullName={newsData?.owner?.fullName}
                      imageUrl={newsData?.owner?.avatar}
                    />
                    {newsData?.createdAt !== undefined && (
                      <TimeCountComponent
                        createTime={new Date(newsData?.createdAt)}
                      />
                    )}
                  </div>
                  <br />
                  <AdsViewComponent />
                  <br />
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sky-900 flex items-center gap-3">
                      <MessageCircleDashedIcon size={"40px"} />
                      <p className="text-xl font-bold">1.2k</p>
                    </div>
                    <div>
                      <ul className="text-white flex gap-2">
                        <li className="w-[40px] h-[40px] bg-sky-900 flex justify-center items-center rounded-full">
                          <Facebook color="#fff" />
                        </li>
                        <li className="w-[40px] h-[40px] bg-sky-900 flex justify-center items-center rounded-full">
                          <Twitter />
                        </li>
                        <li className="w-[40px] h-[40px] bg-sky-900 flex justify-center items-center rounded-full">
                          <MessageCircleMore />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="mt-2 mb-2"></hr>
                </div>
                {newsData?.bannerImage && (
                  <img
                    src={newsData?.bannerImage || "/no-photo.png"}
                    alt="news-banner-image"
                    loading="lazy"
                    className="w-full aspect-video object-cover rounded-sm"
                  />
                )}
                <p className="text-md mt-3 mb-1">
                  {newsData?.shortDescription}
                </p>
                <AdsViewComponent />
                <div className="mt-5 md:max-w-none md:text-lg">
                  {parse(newsData?.content || "", {
                    replace: (domNode) => {
                      if (domNode.type === "tag" && domNode.name === "img") {
                        return (
                          <img
                            {...domNode.attribs}
                            className="aspect-video"
                            loading="lazy"
                          />
                        );
                      }
                      return domNode;
                    },
                  })}
                </div>
                <hr />
                <p className="md:block hidden text-sm text-center">
                  Advertisment
                </p>
                <HorizontalAdsCompoent />
                <hr className="mt-3 mb-3" />
                <FeelingAfterReadNewsCompoent />
                <hr className="mt-5 mb-5" />
                <FeedBackContainer
                  type={type}
                  newsId={newsData?._id}
                  newsOwner={newsData?.owner?._id}
                  comment={comment}
                  setComment={setComment}
                />
              </div>
              <div className="md:col-span-4 w-full mt-7  md:flex flex-col  col-span-12 items-center">
                <div className="hidden md:block">
                  <hr className="mt-2 mb-2" />
                  <p className="text-sm text-center">Advertisment</p>
                  <SideBarAdsCompoent />
                  <SideBarAdsCompoent />
                  <SideBarAdsCompoent />
                  <hr className="mt-2 mb-2" />
                </div>
                <hr className="mt-2 mb-2 hidden md:block" />
                {isNewsfetched &&
                  newsData !== undefined &&
                  newsData.recommendedNews.length > 0 && (
                    <>
                      <p className="text-2xl md:text-4xl font-bold text-sky-800 text-start">सिफारिस</p>
                      <hr className="mt-2 mb-2" />
                      <div className="flex flex-col">
                        {newsData?.recommendedNews?.slice(0, 5).map(
                          (item: any, index: number) => (
                            <div key={index}>
                              <HorizontalNewsCard item={item} />
                              <hr className="mt-2 mb-2" />
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                <p className="text-sm text-center">Advertisment</p>
                <SideBarAdsCompoent />
                <SideBarAdsCompoent />
                <hr className="mt-2 mb-2" />
                <TrendingNews colSpan={10} menu={newsData?.menu} />
              </div>
            </div>
            <hr className="mt-2 mb-4" />
          </div>
          <AdsViewComponent />
          <div className="mt-1 md:p-6 p-2">
            <h1 className="text-5xl font-bold text-sky-900">सम्बन्धित खबर</h1>
            <hr className="mt-4" />
          </div>
          <RelatedNews menu={newsData?.menu} newsId={newsData?._id} />
        </div>
      )}
    </React.Fragment>
  );
};
