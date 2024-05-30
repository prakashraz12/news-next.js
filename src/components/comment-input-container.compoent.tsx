import React, { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateCommentMutation } from "@/(service)/api/comment.ap";
import toast from "react-hot-toast";

interface CommentInputCntainerCompoentProps {
  newsId?: string;
  setCommentData: (type: any) => void;
  setIsLoadingCommentfetching: (type: boolean) => void;
  type?: string;
}

export const CommentInputCntainerCompoent = ({
  newsId,
  setCommentData,
  setIsLoadingCommentfetching,
  type
}: CommentInputCntainerCompoentProps) => {
  const [comment, setComment] = useState<string>("");
  const [
    commentBody,
    {
      isSuccess: isCreateComment,
      data: commentObj,
      isLoading: isComemntLoading,
    },
  ] = useCreateCommentMutation();

  const handleComment = async () => {
    await commentBody({ newsId, comment, type });
  };

  useEffect(() => {
    if (isCreateComment) {
      setCommentData((prevData: any) => [commentObj?.data, ...prevData]);
      toast.success("Commented successfully 😍");
      setIsLoadingCommentfetching(false);
      setComment("")
    }
  }, [isCreateComment]);

  useEffect(() => {
    if (isComemntLoading) {
      setIsLoadingCommentfetching(true);
    }
  }, [isComemntLoading]);

  return (
    <div className="mt-3 w-full">
      <Textarea
        placeholder="Please write your comment 🥰"
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        className="bg-sky-800 text-white hover:bg-sky-700 flex justify-end mt-3"
        disabled={comment.length === 0 || isComemntLoading}
        onClick={handleComment}
      >
        प्रतिक्रिया दिनुहोस्
      </Button>
    </div>
  );
};
