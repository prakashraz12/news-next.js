import React from "react";
import { Card, CardContent } from "./ui/card";

export const VarticalNewsCardCompoent = () => {
  return (
    <Card className="cursor-pointer mt-3">
      <div className="overflow-hidden">
      <img
        src="https://www.onlinekhabar.com/wp-content/uploads/2024/03/Chhimkeswori-photo-1024x1010.jpg"
        loading="lazy"
        alt="news-image"
        className="w-full h-[200px] object-cover hover:scale-150 ease-in duration-500"
      />
      </div>
      <CardContent className="mt-2">
        <p className="text-2xl md:font-bold font-medium hover:text-sky-800">
          धार्मिक पर्यटनको गन्तव्य बन्दै तनहुँको छिम्केश्वरी
        </p>
        <p className="mt-2">निजी मेडिकल कलेजको पक्षमा चिकित्सा शिक्षा आयोगको निर्णयनिजी मेडिकल कलेजको पक्षमा चिकित्सा शिक्षा आयोगको निर्णय</p>
        <p className="text-end mt-3">-धार्मिक पर्यटनको</p>
      </CardContent>
    </Card>
  );
};
