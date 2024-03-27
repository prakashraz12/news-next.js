import React from "react";
import { CoverStoryCard } from "../cover-story-card";

export const CoverStoryComponent = () => {
  return (
    <div className="w-full p-3">
      <div className="flex mb-10">
        <h1 className="text-3xl  md:text-5xl font-bold text-sky-800">कभर स्टोरी</h1>
      </div>
      <div className="grid  gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <CoverStoryCard/>
        <CoverStoryCard/>
        <CoverStoryCard/>
        <CoverStoryCard/>
        <CoverStoryCard/>
        <CoverStoryCard/>
      </div>
    </div>
  );
};
