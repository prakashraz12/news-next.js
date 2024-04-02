"use client";

import { AdsViewComponent } from "@/components/ads-view.component";
import { HorizontalAdsCompoent } from "@/components/horizontal-ads-compoent";
import { FeedBackContainer } from "@/components/news/feed-back-container.compoent";
import { FeelingAfterReadNewsCompoent } from "@/components/news/feeling-after-read-news.compoent";
import { HorizontalNewsCard } from "@/components/news/horizontal-news-card.compoent";
import { RelatedNewsComponet } from "@/components/news/related-news.compoent";
import { SideBarAdsCompoent } from "@/components/news/side-bar-ads.compoent";
import { TrendingNews } from "@/components/news/trending-news.compoent";
import { ReporterAvatarCompoent } from "@/components/reporter-avatar.compoent";
import { TimeCountComponent } from "@/components/time-count.compoent";
import { VarticalNewsCardCompoent } from "@/components/vartical-news-card.compoent";
import {
  Facebook,
  MessageCircleDashedIcon,
  MessageCircleMore,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
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

  return (
    <div className="md:container md:mx-auto min-h-screen w-full">
      <div className="w-full p-3 md:p-8 bg-white">
        <div className={`sticky top-[80px] z-10  bg-white p-0`}>
          <div className="flex justify-between  p-0">
            <h1
              className={`text-5xl md:block hidden font-bold mt-2 mb-3 ease-in duration-500 ${isHeadingSticky ? "text-xl" : "text-7xl"}`}
            >
              तम्घास बजारमा प्रदूषित धुवाँको मुस्लो
            </h1>
            {isHeadingSticky && (
              <div className="md:flex hidden items-center gap-3 justify-center ease-in duration-700 mt-3 mb-3">
                <ReporterAvatarCompoent
                  firstName={"टोपराज"}
                  lastName={"शर्मा"}
                />
                <TimeCountComponent />
              </div>
            )}
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-1 hidden md:block">
            <div
              className={`sticky top-[155px]  bg-white p-2  z-0 ease-out duration-500`}
            >
              <div className="flex justify-center items-center flex-col gap-2">
                <MessageCircleDashedIcon size={"48px"} color="#2596be" />
                <h1 className="text-3xl font-bold">1.3k</h1>
                <p className="text-md">comments</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-2 mt-3">
                <h1 className="text-3xl font-bold text-sky-900">900</h1>
                <p className="text-md text-slate-500">shares</p>
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
          <div className="md:col-span-7 col-span-10">
            {!isHeadingSticky && (
              <div className="md:flex hidden items-center gap-3 justify-center mt-4 mb-4 duration-500 ease-in transition-all">
                <ReporterAvatarCompoent
                  firstName={"टोपराज"}
                  lastName={"शर्मा"}
                />
                <TimeCountComponent />
              </div>
            )}
            <div className="md:hidden">
              <h1 className={`text-2xl font-bold mt-2 mb-3`}>
                तम्घास बजारमा प्रदूषित धुवाँको मुस्लो
              </h1>
              <hr className="mt-2 mb-2"></hr>
              <div className="flex justify-between items-center">
                <ReporterAvatarCompoent
                  firstName={"टोपराज"}
                  lastName={"शर्मा"}
                />
                <TimeCountComponent />
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
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/chhaldi-thadhungha-sadak-pcc-4-1024x578.jpg"
              alt="news-banner-image"
              className="w-full aspect-auto object-cover rounded-sm"
            />

            <AdsViewComponent />
            <p className="text-xl  mt-5 md:max-w-none md:text-lg">
              फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका
              नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर
              फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे,
              धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती
              भोगिरहेका फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा
              बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
              वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त
              ठाउँ नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको
              सास्ती भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले
              तम्घासको उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क
              क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर
              व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका नागरिकले
              वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर फाल्ने
              ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम र
              वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
              छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा
              बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् ।
              फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे,
              <br />
              धागिथुमयसक्षेत्रका नागरिकले फोहोर फाल्ने ठाउँ (डम्पिङ साइट) हटाउन
              वषौंदेखि आवाज उठाएका छन् । तर, सुनुवाइ भने भएको छैन् । फोहोर
              व्यवस्थापन गर्ने ठाउँ हटाउन प्रशासन र नगरपालिका पटक-पटक पुगेपनि
              कुनै पनि सुनुवाइ नभएको रेसुङ्गा नगरपालिका वडानम्बर-७ का स्थानीय
              धनिश्वर पाण्डेले बताए । फोहोर व्यवस्थापन गर्ने स्थानबाट दैनिकजसो
              निस्किने धुवाँको मुस्लो घरमै आउने भएकोले ज्येष्ठ नागरिकलाई झन्
              समस्या भएको स्यानीयको भनाइ छ । फोहोर बस्तीबाट टाढा व्यवस्थापन
              गर्नुपर्ने स्थानीय
              <br />
              <br />
              <br />
              उजिर घर्तिको भनाइ छ । र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
              वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त
              ठाउँ नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको
              सास्ती भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले
              तम्घासको उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क
              क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर
              व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका नागरिकले
              वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर फाल्ने
              ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम र
              वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
              छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा
              बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् ।
              फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे,
              धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती
              भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस
              वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका
              छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा
              बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
              वषौंदेखि सास्ती भोगिरहेका छन् ।
            </p>
            <hr />
            <p className="md:block hidden text-sm text-center">Advertisment</p>
            <HorizontalAdsCompoent />
            <hr className="mt-3 mb-3" />
            <FeelingAfterReadNewsCompoent />
            <hr className="mt-5 mb-5" />
            <FeedBackContainer />
          </div>
          <div className="md:col-span-4 w-full mt-7  flex flex-col justify-start col-span-10 ">
            <hr className="mt-2 mb-2" />
            <p className="text-sm text-center">Advertisment</p>
            <SideBarAdsCompoent />
            <SideBarAdsCompoent />
            <SideBarAdsCompoent />
            <hr className="mt-2 mb-2" />
            <p className="text-sm text-center">Advertisment</p>
            <SideBarAdsCompoent />
            <SideBarAdsCompoent />
            <SideBarAdsCompoent />
            <hr className="mt-2 mb-2" />
            <p className="text-4xl font-bold text-sky-800">सिफारिस</p>
            <hr className="mt-2 mb-2" />
            <div className="flex flex-col">
              <HorizontalNewsCard />
              <hr className="mt-2 mb-2" />
              <HorizontalNewsCard />
              <hr className="mt-2 mb-2" />
              <HorizontalNewsCard />
              <hr className="mt-2 mb-2" />
            </div>
            <p className="text-sm text-center">Advertisment</p>
            <SideBarAdsCompoent />
            <SideBarAdsCompoent />
            <hr className="mt-2 mb-2" />
            <TrendingNews colSpan={10} />
          </div>
        </div>
        <hr className="mt-2 mb-4" />
      </div>
      <AdsViewComponent />
      <div className="mt-1 md:p-6 p-2">
        <h1 className="text-5xl font-bold text-sky-900">सम्बन्धित खबर</h1>
        <hr className="mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-6 p-2">
        <div>
          <VarticalNewsCardCompoent />
        </div>
        <div>
          <VarticalNewsCardCompoent />
        </div>
        <div>
          <VarticalNewsCardCompoent />
        </div>
        <div>
          <VarticalNewsCardCompoent />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
