import React, { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useUpdateCommentRepliesMutation } from "@/(service)/api/comment.ap";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

export const UpdateComment = ({
  previousComment,
  commentId,
  replyId,
  setIsUpdateCommentOpen,
  setCommentData,
  comments,
}: {
  previousComment: string;
  commentId: string;
  replyId: string;
  setIsUpdateCommentOpen: (type: boolean) => void;
  setCommentData: (type: any) => void;
  comments: any;
}) => {
  const [comment, setComment] = useState<string>(previousComment || "");
  const [updateComment, { isSuccess, data, isLoading, isError }] =
    useUpdateCommentRepliesMutation();

  const handleCommentUpdate = async () => {
    await updateComment({ commentId, replyId, comment });
  };

  useEffect(() => {
    if (isSuccess && comments && data?.data?.replies) {
      setCommentData((previousComments: any[]) => {
        return previousComments.map((item) => {
          if (item._id.toString() === comments._id.toString()) {
            const updatedReplies = item.replies.map((reply: any) => {
              const updatedReply = data.data.replies.find(
                (dataReply: any) => dataReply._id === reply._id
              );
              if (updatedReply) {
                return {
                  ...reply,
                  comment: updatedReply.comment,
                };
              }
              return reply;
            });

            return {
              ...item,
              replies: updatedReplies,
            };
          }
          return item;
        });
      });
      toast.success("Update replies success fully 🥰");
      setIsUpdateCommentOpen(false);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      toast.error("Something is wrong while update replies 😞");
    }
  }, [isError]);
  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="flex justify-center gap-1 items-center h-14">
          <Loader className="rounded-full   h-5 w-5 animate-spin" />
          <p>Loading....</p>
        </div>
      ) : (
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your update comment here!"
        />
      )}
      <div className="flex items-center mt-2 gap-1">
        <Button
          variant={"destructive"}
          size={"sm"}
          disabled={isLoading}
          onClick={() => {
            setIsUpdateCommentOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          size={"sm"}
          onClick={handleCommentUpdate}
          disabled={previousComment === comment || isLoading}
        >
          Update
        </Button>
      </div>
    </div>
  );
};
