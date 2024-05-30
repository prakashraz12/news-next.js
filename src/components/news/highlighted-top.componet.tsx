import React from "react";
import { ReporterAvatarCompoent } from "../reporter-avatar.compoent";
import { TimeCountComponent } from "../time-count.compoent";
import Link from "next/link";
import { AdsViewComponent } from "../ads-view.component";
import Image from "next/image";
interface AuthorInterFace {
  fullName?: string
  _id: string;
  avatar?: string;
}

interface HighlightedNewsProps {
  title?: string;
  content?: string;
  bannerImage?: string;
  author?: AuthorInterFace;
  createTime: string | any
   id: string;
}
export const HighlightedTopNews = ({
  title,
  bannerImage,
  author,
  createTime,
  id
}: HighlightedNewsProps) => {
  return (
    <React.Fragment>
      <AdsViewComponent />
      <div className="md:p-7 p-3 flex flex-col md:gap-10 gap-3">
        <Link href={`/news/${id}`}>
          <h1 className="font-bold md:text-7xl text-2xl text-center hover:text-sky-700 cursor-pointer ease-linear duration-200">
            {title}
          </h1>
        </Link>
        <div className="flex items-center gap-3 justify-center">
          <ReporterAvatarCompoent fullName={author?.fullName} imageUrl={author?.avatar} />
          <TimeCountComponent createTime={createTime} />
        </div>
        {
          bannerImage && <Image
            src={bannerImage}
            width={0}
            height={0}
            layout="responsive"
            alt="news-image"
            className="aspect-video rounded-sm"
          />
        }
        <hr />
      </div>
    </React.Fragment>
  );
};
