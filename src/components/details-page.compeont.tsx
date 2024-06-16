import React, { useEffect, useState } from "react";
import { ReporterAvatarCompoent } from "./reporter-avatar.compoent";
import { TimeCountComponent } from "./time-count.compoent";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import { MessageCircleDashedIcon } from "lucide-react";
import { NewsDetailsLoading } from "./news-details-page-loading.component";
import { News } from "@/types/newsTypes";
import { AdsViewComponent } from "./ads-view.component";
import { SideBarAdsCompoent } from "./news/side-bar-ads.compoent";
import { TrendingNews } from "./news/trending-news.compoent";
import { RelatedNews } from "./news/relatedNews.compont";
import { FeedBackContainer } from "./news/feed-back-container.compoent";
import parse from "html-react-parser";
import { HorizontalNewsCard } from "./news/horizontal-news-card.compoent";
import { Comment } from "@/types/newsTypes";

import { useSelector } from "react-redux";
import { PopUpAdsPage } from "./news/pop-up-ads-on-details-page.component";
import { useShareCountIncMutation } from "@/(service)/api/news.api";
import { formatNumberTOK } from "@/utils/formatNumber.util";

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
  console.log(type)
  const settings = useSelector(
    (state: any) => state?.app?.appSettings?.defaultSettings
  );
  const [isAdsShown, setIsAdsShown] = useState(
    (settings && settings[0]?.isShowPopupAdsOnDetailsPage) || false
  );
  const [comment, setComment] = useState<Comment[]>([]);
  const [isHeadingSticky, setIsHeadingSticky] = useState<boolean>(false);

  const [shareInc] = useShareCountIncMutation();

  const handleShareCountInc = async() => {
    await shareInc({newsId:newsData?._id, newsType:type})
  }
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

  useEffect(() => {
    setTimeout(() => {
      setIsAdsShown(false);
    }, 4000);
  }, []);

  return (
    <React.Fragment>
      {isAdsShown && (
        <PopUpAdsPage setIsAdsShown={setIsAdsShown} searchStatus="popup-1" />
      )}
      {isNewsFetching && <NewsDetailsLoading />}
      {isNewsfetched && (
        <div className="lg:container md:mx-auto min-h-screen w-full  lg:p-2">
          <div className="w-full p-1 md:p-8 dark:bg-[#020817] bg-white">
            <div
              className={`sticky md:top-[60px] lg:top-[60px] z-10  dark:bg-[#020817] bg-white`}
            >
              <div className="flex justify-between items-center">
                <h1
                  className={`text-5xl md:block hidden text-sky-950  dark:text-white  font-bold mt-2 mb-3 ease-linear	 duration-50 transition-all ${isHeadingSticky ? "text-xl" : "text-6xl"}`}
                >
                  {newsData?.newsTitle}
                </h1>
                {isHeadingSticky && (
                  <div className="md:flex hidden items-center gap-3 justify-center ease-linear	transition-all duration-50 mt-3 mb-3">
                    <ReporterAvatarCompoent
                      fullName={newsData?.owner?.fullName || "not available"}
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
            <div className="grid grid-cols-12 w-full md:gap-5 lg:gap-5">
              <div className="col-span-1 hidden md:block">
                <div
                  className={`sticky top-[155px]  p-1 lg:p-2 z-0 ease-out duration-500`}
                >
                  <div className="flex justify-center items-center flex-col gap-2">
                    <MessageCircleDashedIcon size={"48px"}  className="text-sky-900 dark:text-white" />
                    <h1 className="text-3xl font-bold text-sky-950 dark:text-white">{formatNumberTOK(comment?.length || 0)}</h1>
                    <p className="text-md text-slate-500">comments</p>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-2 mt-3">
                    <h1 className="text-3xl font-bold text-sky-900 dark:text-white">
                     {formatNumberTOK(newsData?.shares || 0)}
                    </h1>
                    <p className="text-md text-slate-500 ">
                      shares
                    </p>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col justify-between items-center h-auto gap-2 text-white">
                      <li>
                        <FacebookShareButton
                          url={window.location.href}
                          title={newsData?.newsTitle}
                          onClick={handleShareCountInc}
                        >
                          <FacebookIcon className=" rounded-full h-full w-[55px]" />
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton
                          url={window.location.href}
                          title={newsData?.newsTitle}
                          onClick={handleShareCountInc}
                        >
                          <TwitterIcon className=" rounded-full h-full w-[55px]" />
                        </TwitterShareButton>
                      </li>
                      <li>
                        <WhatsappShareButton
                          url={window.location.href}
                          title={newsData?.newsTitle}
                          onClick={handleShareCountInc}
                        >
                          <WhatsappIcon className=" rounded-full h-full w-[55px]" />
                        </WhatsappShareButton>
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

                  <AdsViewComponent searchStatus="d-1" />
                  <br />
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sky-900 flex items-center gap-3 dark:text-white">
                      <MessageCircleDashedIcon size={"40px"} />
                      <p className="text-xl font-bold">{formatNumberTOK(comment?.length || 0)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-md mb-1 text-slate-600">{formatNumberTOK(newsData?.shares || 0) } shares</p>
                      <ul className="text-white flex gap-2">
                        
                        <li>
                          <FacebookShareButton
                            url={window.location.href}
                            title={newsData?.newsTitle}
                            onClick={handleShareCountInc}
                          >
                            <FacebookIcon className=" rounded-full h-full w-[40px]" />
                          </FacebookShareButton>
                        </li>
                        <li>
                          <TwitterShareButton
                            url={window.location.href}
                            title={newsData?.newsTitle}
                            onClick={handleShareCountInc}
                          >
                            <TwitterIcon className=" rounded-full h-full w-[40px]" />
                          </TwitterShareButton>
                        </li>
                        <li>
                          <WhatsappShareButton
                            url={window.location.href}
                            title={newsData?.newsTitle}
                            onClick={handleShareCountInc}
                          >
                            <WhatsappIcon className=" rounded-full h-full w-[40px]" />
                          </WhatsappShareButton>
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
                <hr className="mt-2 mb-2" />
                <p className="text-sm text-center">Advertisement</p>
                <AdsViewComponent searchStatus="d-5" />
                <p className="text-md mt-3 mb-1">
                  {newsData?.shortDescription}
                </p>
                <div className="mt-5 md:max-w-none md:text-lg">
                  {parse(newsData?.content || "", {
                    replace: (domNode) => {
                      if (domNode.type === "tag" && domNode.name === "img") {
                        return (
                          <img
                            {...domNode.attribs}
                            className="aspect-video rounded-sm mt-1 mb-1"
                            loading="lazy"
                          />
                        );
                      } else if (
                        domNode.type === "tag" &&
                        domNode.name === "iframe" &&
                        domNode.attribs.class === "ql-video"
                      ) {
                        return (
                          <iframe
                            {...domNode.attribs}
                            className="w-full h-[200px] md:h-[400px] rounded-md"
                          ></iframe>
                        );
                      } else if (
                        domNode.type === "tag" &&
                        domNode.name === "iframe"
                      ) {
                        return (
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              {...domNode.attribs}
                              className="embed-responsive-item"
                            ></iframe>
                          </div>
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
                <div className="grid grid-cols-12 gap-2 lg:gap-1">
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <SideBarAdsCompoent searchStatus="d-7" />
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <SideBarAdsCompoent searchStatus="d-8" />
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <SideBarAdsCompoent searchStatus="d-9" />
                  </div>
                </div>
                <hr className="mt-5 mb-5" />
                <FeedBackContainer
                  type={type}
                  newsId={newsData?._id}
                  newsOwner={newsData?.owner?._id}
                  comment={comment}
                  setComment={setComment}
                />
              </div>
              <div className="md:col-span-4 w-full mt-7  md:flex flex-col  col-span-12">
                <div className="hidden md:block">
                  <hr className="mt-2 mb-2" />
                  <p className="text-sm text-center">Advertisment</p>
                  <SideBarAdsCompoent searchStatus="d-1" />
                  <SideBarAdsCompoent searchStatus="d-2" />
                </div>
                <hr className="mt-2 mb-2 hidden md:block" />
                {isNewsfetched &&
                  newsData !== undefined &&
                  newsData.recommendedNews.length > 0 && (
                    <>
                      <p className="text-2xl md:text-4xl font-bold text-sky-800 flex justify-start dark:text-white">
                        सिफारिस
                      </p>
                      <hr className="mt-2 mb-2" />
                      <div className="flex flex-col">
                        {newsData?.recommendedNews
                          ?.slice(0, 5)
                          .map((item: any, index: number) => (
                            <div key={index}>
                              <HorizontalNewsCard item={item} />
                              <hr className="mt-2 mb-2" />
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                <p className="text-sm text-center">Advertisment</p>
                <SideBarAdsCompoent searchStatus="d-3" />
                <SideBarAdsCompoent searchStatus="d-4" />
                <hr className="mt-2 mb-2" />
                <TrendingNews colSpan={10} menu={newsData?.menu} />
                <div className="pl-4 flex flex-col gap-3">
                  <SideBarAdsCompoent searchStatus="d-t-1" />
                  <SideBarAdsCompoent searchStatus="d-t-2" />
                </div>
              </div>
            </div>
          </div>
          <RelatedNews menu={newsData?.menu} newsId={newsData?._id} />
        </div>
      )}
    </React.Fragment>
  );
};

