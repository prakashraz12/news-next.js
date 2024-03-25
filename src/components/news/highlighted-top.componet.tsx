import React from "react";
import { ReporterAvatarCompoent } from "../reporter-avatar.compoent";
import { TimeCountComponent } from "../time-count.compoent";
interface AuthorInterFace {
  firstName: String;
  middleName?: String;
  lastName: String;
  id: String;
}

interface HighlightedNewsProps {
  title?: String;
  content?: String;
  bannerImage?: String;
  author?: AuthorInterFace;
}
export const HighlightedTopNews = ({
  title,
  content,
  bannerImage,
  author,
}: HighlightedNewsProps) => {
  return (
    <React.Fragment>
      <div className="p-7 flex flex-col gap-10">
        <h1 className="font-bold md:text-7xl sm:text-5xl text-center hover:text-sky-700 cursor-pointer">
          बिजुलीको तार चुँडिएर करेन्ट लाग्दा एकै घरमा ३ जनाको मृत्यु
        </h1>
        <div className="flex items-center gap-3 justify-center">
          <ReporterAvatarCompoent firstName={"टोपराज"} lastName={"शर्मा"} />
          <TimeCountComponent />
        </div>
        <img
          loading="lazy"
          src={
            "https://www.onlinekhabar.com/wp-content/uploads/2024/03/biplab-samuhik-kheti.jpg"
          }
          alt="news-banner-image"
          className="w-screen h-fit rounded"
        />
        <hr />
      </div>
    </React.Fragment>
  );
};
