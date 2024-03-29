import React from "react";
import { TrendingNewsCardCompoent } from "../trending-news-card-compoent";

const trending = [
  {
    newsTitle: "एमालेले उम्मेदवार तोकिसक्यो, माओवादीलाई लागेन उपचुनाव",
  },
  {
    newsTitle: "भलिबल छाडेर विदेशिंदै उदीयमान खेलाडी रवि",
  },
  {
    newsTitle:
      "उपनिर्वाचनका लागि एमालेले टुंग्यायो उम्मेदवार, इलाम २",
  },
  {
    newsTitle:
      "काठमाडौंमा जारी आठौं एनभीए भलिबल च्याम्पियनसिप अन्तर्गत",
  },
  {
    newsTitle:
      "इलाम-२ मा एमालेबाट सुहाङ नेम्वाङ उम्मेदवार इलाम-२ मा एमालेबाट सुहाङ नेम्वाङ उम्मेदवार इलाम-२ मा एमालेबाट सुहाङ नेम्वाङ उम्मेदवार इलाम-२ मा एमालेबाट सुहाङ नेम्वाङ उम्मेदवार",
  },
  {
    newsTitle:
      "सुनकोशीमा पौडी खेल्न गएका ३ बालबालिका बेपत्ता",
  },
];
interface TrendingNewsProps{
  colSpan?:number;
}
export const TrendingNews = ({colSpan}:TrendingNewsProps) => {
  return (
    <div className="w-full p-3">
      <h1 className="text-3xl md:text-5xl font-bold text-sky-800">ट्रेन्डिङ</h1>
      <div className="grid grid-cols-12 md:gap-4 mt-5 gap-2">
        {trending?.map((item, index) => (
          <div className={`col-span-12 md:col-span-${colSpan ? colSpan : 6}`} key={index}>
            <TrendingNewsCardCompoent
              newsOrder={index + 1}
              newsTitle={item?.newsTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
