"use client";
import { Facebook, FacebookIcon, Twitter, Youtube } from "lucide-react";
import React from "react";

export const FooterCompoent = () => {
  return (
    <div className="bg-sky-900 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 md:container md:mx-auto  w-full p-5">
        <div>
          <h1 className="text-3xl font-bold text-white">उपयोगी लिंकहरु</h1>
          <ul className="flex flex-col gap-3 p-3">
            <li className="text-white hover:text-sky-200 cursor-pointer w-auto">
              होमपेज
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              समाचार
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              विजनेस
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              मनोरन्जन
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              विचार
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3 p-3">
            <h1 className="text-3xl font-bold text-white">नेपाल खबर</h1>
            <li className="text-white hover:text-sky-200 cursor-pointer w-auto">
              हाम्रो टीम
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              प्रयोगका सर्त
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              विज्ञापन
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              प्राइभेसी पोलिसी
            </li>
            <li className="text-white hover:text-sky-200 cursor-pointer">
              सम्पर्क
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">सम्पर्क</h1>
          <p className="text-white mt-3">
            +977-1-4790176, +977-1-4796489 news@onlinekhabar.com
          </p>
          <div className="mt-3">
          <ul className="flex text-white gap-3">
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>
           

          </div>
        </div>
      </div>
      
    </div>
  );
};
