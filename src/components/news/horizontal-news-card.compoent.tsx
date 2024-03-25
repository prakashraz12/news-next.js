import { Clock } from "lucide-react";
import React from "react";

export const HorizontalNewsCard = () => {
  return (
    <div className="w-full flex gap-4 cursor-pointer hover:bg-sky-800 hover:text-white md:p-3 sm:p-1 rounded">
      <img
        src="https://www.onlinekhabar.com/wp-content/uploads/2022/04/Prithvi-subba-gurung-and-khagaraj-gurung.jpg"
        alt="news-images"
        className="w-[200px] h-[100px] object-cover rounded"
      />
      <div className="flex flex-col gap-3 w-full">
        <p className="text-md font-bold">
          एमालेको कास्की अधिवेशन : पृथ्वीसुब्बा र खगराज गुटकै प्रतिस्पर्धा
        </p>
        <p className="flex gap-3 md:mt-1 sm:mt-0 text-sm">
          <Clock size={"19px"}/>३ घन्टा अगाडि
        </p>
      </div>
    </div>
  );
};
