import React from "react";
import { ReporterAvatarCompoent } from "../reporter-avatar.compoent";
import { TimeCountComponent } from "../time-count.compoent";
import Link from "next/link";
import { AdsViewComponent } from "../ads-view.component";
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
      <AdsViewComponent/>
      <div className="md:p-7 p-3 flex flex-col md:gap-10 gap-3">
       <Link href={`/123`}>
       <h1 className="font-bold md:text-7xl text-2xl text-center hover:text-sky-700 cursor-pointer ease-linear duration-200">
          बिजुलीको तार चुँडिएर करेन्ट लाग्दा एकै घरमा ३ जनाको मृत्यु
        </h1>
       </Link>
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
        <hr  />
      </div>
    </React.Fragment>
  );
};
