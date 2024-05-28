import React from "react";
import { MoreCmmentedNewsCardCompoent } from "../more-commented-news-card.compoent";

export const MoreCommentedNews = () => {
  return (
    <div className="p-3 md:container mt-4 mb-4">
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-800">
          धेरै कमेन्ट गरिएका
        </h1>
      </div>
      <hr className="mb-5" />
      <div className="grid grid-cols-1 gap-5  md:grid-cols-2">
        <MoreCmmentedNewsCardCompoent />
        <MoreCmmentedNewsCardCompoent />
        <MoreCmmentedNewsCardCompoent />
        <MoreCmmentedNewsCardCompoent />
      </div>
    </div>
  );
};
