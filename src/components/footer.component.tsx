"use client";
import { Facebook, FacebookIcon, Twitter, Youtube } from "lucide-react";
import React from "react";

export const FooterCompoent = () => {
  return (
    <div className="bg-sky-900 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 md:container md:mx-auto  w-full p-3">
        <div>
          <h1 className="text-3xl font-bold text-white">उपयोगी लिंकहरु</h1>
          <ul className="flex flex-col gap-3 p-3">
            <li >होमपेज</li>
            <li>समाचार</li>
            <li>विजनेस</li>
            <li>मनोरन्जन</li>
            <li>विचार</li>
          </ul>
        </div>
        <div>1</div>
        <div>1</div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white text-center">नेपाल खबर</h1>
        <div className="flex justify-between">
            <div>
                <ul className="flex text-white gap-3">
                    <li><Facebook/></li>
                    <li><Twitter/></li>
                    <li><Youtube/></li>
                </ul>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};
