"use client";

import { Reply, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import { TimeCountComponent } from "../time-count.compoent";

export const CommentCard = ({ item }: { item: any }) => {
  return (
    <div className="w-full p-1 mt-3">
      <p className="text-xl">{item?.news?.newsTitle }</p>
     <div className="flex justify-end"> <TimeCountComponent createTime={new Date(item?.createdAt)} /></div>
      <p>{item?.comment}</p>
      <div className="flex justify-end items-center gap-5">
        <div className="flex gap-1 items-center">
          <ThumbsUp size={"14px"} />
          <p className="text-sm">{item?.likes?.length}</p>
        </div>
        <div className="flex gap-1 items-center">
          <ThumbsDown size={"14px"} />
          <p className="text-sm">{item?.disLikes?.length}</p>
        </div>
        <div className="flex gap-1 items-center">
          <Reply size={"14px"} />
          <p className="text-sm">{item?.replies?.length}</p>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};
