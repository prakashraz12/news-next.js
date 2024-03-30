import React from "react";
import { CommentInputCntainerCompoent } from "../comment-input-container.compoent";
import { CommentPreviewComponent } from "../comment-preview.compoent";
import { Button } from "../ui/button";

export const FeedBackContainer = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl font-bold text-sky-800">प्रतिक्रिया</h1>
      <hr className="mt-5" />
      <CommentInputCntainerCompoent />
      <hr className="mt-5 mb-5" />
      <CommentPreviewComponent />
      <CommentPreviewComponent />
      <CommentPreviewComponent />
      <CommentPreviewComponent />
      <CommentPreviewComponent />
      <div className="w-full justify-center flex mt-2 hover:underline">
        <Button
          className="w-[40%] rounded-full  font-semibold"
          variant={"secondary"}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};
