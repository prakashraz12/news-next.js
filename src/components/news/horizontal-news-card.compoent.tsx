import { Clock } from "lucide-react";
import React from "react";

export const HorizontalNewsCard = () => {
  return (
    <div className="w-full flex align-middle gap-4 cursor-pointer ease-linear duration-200 hover:bg-sky-800 hover:text-white md:p-3 sm:p-1 rounded">
      <div className="overflow-hidden">
      <img
        src="https://www.onlinekhabar.com/wp-content/uploads/2022/04/Prithvi-subba-gurung-and-khagaraj-gurung.jpg"
        alt="news-images"
        loading="lazy"
        className="w-[200px] h-[100px] object-cover rounded hover:scale-110 ease-in-out duration-500 "
      />
      </div>
      <div className="flex flex-col justify-between p-1 w-full">
        <p className="text-md font-bold line-clamp-2">
          एमालेको कास्की अधिवेशन : पृथ्वीसुब्बा र खगराज गुटकै प्रतिस्पर्धा
          एमालेको कास्की अधिवेशन : पृथ्वीसुब्बा र खगराज गुटकै प्रतिस्पर्धा
          एमालेको कास्की अधिवेशन : पृथ्वीसुब्बा र खगराज गुटकै प्रतिस्पर्धा
        </p>
        <p className="flex gap-3 md:mt-1 sm:mt-0 text-sm">
          <Clock size={"19px"}/>३ घन्टा अगाडि
        </p>
      </div>
    </div>
  );
};
