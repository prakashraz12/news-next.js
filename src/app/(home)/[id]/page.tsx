"use client";

import { AdsViewComponent } from "@/components/ads-view.component";
import { SideBarAdsCompoent } from "@/components/news/side-bar-ads.compoent";
import { ReporterAvatarCompoent } from "@/components/reporter-avatar.compoent";
import { TimeCountComponent } from "@/components/time-count.compoent";
import {
  Facebook,
  MessageCircleDashedIcon,
  MessageCircleMore,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const [isHeadingSticky, setIsHeadingSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      setIsHeadingSticky(scrollPosition > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full p-8 bg-white">
      <div className={`sticky top-[80px] z-10  bg-white p-2 `}>
        <div className="flex justify-between  p-2">
          <h1
            className={`text-5xl font-bold mt-2 mb-3 ease-in duration-500 ${isHeadingSticky ? "text-xl" : "text-7xl"}`}
          >
            तम्घास बजारमा प्रदूषित धुवाँको मुस्लो
          </h1>
          {isHeadingSticky && (
            <div className="flex items-center gap-3 justify-center ease-in duration-700">
              <ReporterAvatarCompoent firstName={"टोपराज"} lastName={"शर्मा"} />
              <TimeCountComponent />
            </div>
          )}
        </div>
        <hr />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
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
        <div className="col-span-9">
         {
          !isHeadingSticky &&  <div className="flex items-center gap-3 justify-center mt-4 mb-4 duration-500 ease-in transition-all">
          <ReporterAvatarCompoent firstName={"टोपराज"} lastName={"शर्मा"} />
          <TimeCountComponent />
        </div>
         }
          <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/chhaldi-thadhungha-sadak-pcc-4-1024x578.jpg"
            alt="news-banner-image"
            className="aspect-video rounded-sm"
          />
          <AdsViewComponent />
          <p className="text-start text-xl mt-5">
            फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका
            नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर
            फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम
            र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
            फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम
            र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
            छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका
            नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर
            फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम
            र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
            छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका
            नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर
            फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे, धागिथुम
            र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु वषौंदेखि सास्ती भोगिरहेका
            छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ नहुँदा त्यस वरपरमा बस्तीका
            नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती भोगिरहेका छन् । फोहोर
            फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको उदिनढुंगा बागमारे,
            <br />
            धागिथुमयसक्षेत्रका नागरिकले फोहोर फाल्ने ठाउँ (डम्पिङ साइट) हटाउन
            वषौंदेखि आवाज उठाएका छन् । तर, सुनुवाइ भने भएको छैन् । फोहोर
            व्यवस्थापन गर्ने ठाउँ हटाउन प्रशासन र नगरपालिका पटक-पटक पुगेपनि कुनै
            पनि सुनुवाइ नभएको रेसुङ्गा नगरपालिका वडानम्बर-७ का स्थानीय धनिश्वर
            पाण्डेले बताए । फोहोर व्यवस्थापन गर्ने स्थानबाट दैनिकजसो निस्किने
            धुवाँको मुस्लो घरमै आउने भएकोले ज्येष्ठ नागरिकलाई झन् समस्या भएको
            स्यानीयको भनाइ छ । फोहोर बस्तीबाट टाढा व्यवस्थापन गर्नुपर्ने स्थानीय
            <br />
            <br />
            <br />
            उजिर घर्तिको भनाइ छ । र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
            वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ
            नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती
            भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको
            उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
            वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ
            नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती
            भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको
            उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
            वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ
            नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती
            भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको
            उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
            वषौंदेखि सास्ती भोगिरहेका छन् ।फोहोर व्यवस्थापनका लागि उपयुक्त ठाउँ
            नहुँदा त्यस वरपरमा बस्तीका नागरिकले वषौंदेखि प्रदूषित धुवाँको सास्ती
            भोगिरहेका छन् । फोहोर फाल्ने ठाउँबाट निस्केको धुवाँले तम्घासको
            उदिनढुंगा बागमारे, धागिथुम र वेदुखर्क भूजेल खर्क क्षेत्रका नागरिकहरु
            वषौंदेखि सास्ती भोगिरहेका छन् ।
          </p>
        </div>
        <div className="col-span-2 w-full mt-7">
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
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
