"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import {
  Edit,
  Ellipsis,
  Loader,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2,
  UserCircle,
} from "lucide-react";

import { Textarea } from "./ui/textarea";
import { useSelector } from "react-redux";
import {
  useDeleteCommentMutation,
  useDeleteRepliesMutation,
  useDislikeMutation,
  useLikeCommentMutation,
  useRepliedCommentMutation,
  useUpdateCommentMutation,
} from "@/(service)/api/comment.ap";

import toast from "react-hot-toast";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { UpdateComment } from "./update-comment.compoent";
import { formatRelativeNepaliDate } from "@/utils/time-counter.util";

export const CommentPreviewComponent = ({
  comment,
  setComment,
  newsOwner,
}: {
  comment: any;
  setComment: (type: any) => void;
  newsOwner?: string;
}) => {
  const [isMainCommentOpen, setIsMainCompoentOpen] = useState<boolean>(false);
  const [mainComment, setMainComment] = useState<string>(
    comment?.comment || ""
  );
  const isAuth = useSelector(({ app }: { app: any }) => app?.token);
  const user = useSelector(({ app }: { app: any }) => app?.userDetails);
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
  const [replies, setReplies] = useState<string>("");
  const [selectedReplies, setSelectedReplies] = useState<string>("");
  const [isUpdateCommentOpen, setIsUpdateCommentOpen] =
    useState<boolean>(false);
  const [likeComment, { isSuccess: isLiked, data: likedData }] =
    useLikeCommentMutation();

  const [dislikeComment, { isSuccess: isDisliked, data: dislikedData }] =
    useDislikeMutation();
  const [repliesData, { isSuccess: isRepliedSuccess, data: repliedResponse }] =
    useRepliedCommentMutation();

  const [
    updateComment,
    { isSuccess: isCommentUpdated, data: commentUpdatedData },
  ] = useUpdateCommentMutation();

  const [deleteReplies, { isSuccess: isDeleteReplies }] =
    useDeleteRepliesMutation();
  const [
    deleteCommetId,
    { isSuccess: isCommentDeleted, isLoading: isLoadingOnCommentDeleting },
  ] = useDeleteCommentMutation();

  const handleReplyOpen = () => {
    setIsCommentOpen(true);
  };

  const hanldeLikeComment = async () => {
    if (isAuth) {
      await likeComment({ commentId: comment?._id });
    } else {
      toast.error("Please login first!😒");
    }
  };

  const handleReply = async () => {
    if (isAuth) {
      await repliesData({ commentId: comment._id, comment: replies });
    } else {
      toast.error("Please login first!😒");
    }
  };

  const handleDeleteComment = async () => {
    await deleteCommetId({ commentId: comment?._id });
  };

  const handledDeleteReplies = async (replyId: string) => {
    setSelectedReplies(replyId);
    await deleteReplies({ commentId: comment?._id, replyId });
  };

  useEffect(() => {
    if (isLiked && likedData.code === 200) {
      setComment((prevComments: any) => {
        return prevComments.map((item: any) => {
          if (item._id === comment._id) {
            const updatedDisLikes = item.disLikes.filter(
              (dislike: any) => dislike !== likedData.data?.owner
            );
            const updatedLikes = [...item.likes, likedData.data?.owner];

            return {
              ...item,
              likes: updatedLikes,
              disLikes: updatedDisLikes,
            };
          }
          return item;
        });
      });
    }
  }, [isLiked]);

  useEffect(() => {
    if (isRepliedSuccess && repliedResponse.code === 201) {
      setComment((prevComment: any) => {
        return prevComment.map((item: any) => {
          if (item._id === comment._id) {
            return {
              ...item,
              replies: repliedResponse.data?.replies,
            };
          }
          return item;
        });
      });
      setReplies("");
      setIsCommentOpen(false);
    }
  }, [isRepliedSuccess]);

  const handleDislike = async () => {
    if (isAuth) {
      await dislikeComment({ commentId: comment?._id });
    } else {
      toast.error("Please login first!");
    }
  };

  const handleUpdateMainComment = async () => {
    await updateComment({
      commentId: comment?._id,
      comment: mainComment,
    });
  };

  useEffect(() => {
    if (isCommentUpdated && commentUpdatedData?.code === 200) {
      setIsMainCompoentOpen(false);
      toast.success("Comment update successfully🥰");
      setComment((prevComment: any) => {
        return prevComment.map((item: any) => {
          if (item._id === comment._id) {
            return {
              ...item,
              comment: commentUpdatedData.data?.comment,
            };
          }
          return item;
        });
      });
    }
  }, [isCommentUpdated]);

  useEffect(() => {
    if (isCommentDeleted) {
      toast.success("Comment deleted👍");
      setComment((prevComment: any) => {
        return prevComment.filter((item: any) => item?._id !== comment._id);
      });
    }
  }, [isCommentDeleted]);

  useEffect(() => {
    if (isDeleteReplies) {
      toast.success("Deleted replies👍");
      setComment((prevComment: any) => {
        return prevComment.map((item: any) => {
          if (item._id === comment._id) {
            return {
              ...item,
              replies: item.replies?.filter(
                (item: any) => item._id !== selectedReplies
              ),
            };
          }
          return item;
        });
      });
    }
  }, [isDeleteReplies]);

  useEffect(() => {
    if (isDisliked && dislikedData.code === 200) {
      setComment((prevComments: any) => {
        return prevComments.map((item: any) => {
          if (item._id === comment._id) {
            const updatedLikes = item.likes.filter(
              (like: any) => like !== dislikedData.data?.owner
            );
            const updatedDisLikes = [
              ...item.disLikes,
              dislikedData.data?.owner,
            ];
            return {
              ...item,
              likes: updatedLikes,
              disLikes: updatedDisLikes,
            };
          }
          return item;
        });
      });
    }
  }, [isDisliked]);

  return (
    <div className="w-full flex gap-2 mt-5">
      <Avatar>
        <AvatarImage
          src={comment?.owner?.avatar || user?.avatar}
          alt={comment?.owner?.fullName}
          className="object-cover"
        />
        <AvatarFallback>{comment?.owner?.fullName}</AvatarFallback>
      </Avatar>
      <Card className="p-3 w-full">
        {isLoadingOnCommentDeleting ? (
          <div className="flex justify-center gap-1 items-center h-14">
            <Loader className="rounded-full   h-5 w-5 animate-spin" />
            <p>Loading....</p>
          </div>
        ) : (
          <>
            <CardTitle className="flex items-center  justify-between">
              <span className="flex gap-3 items-center">
                <span className="text-xl md:text-xl  font-bold text-sky-900">
                  {comment?.owner?.fullName || user?.fullName}
                </span>
                <span className="text-sm font-medium">
                  {formatRelativeNepaliDate(new Date(comment?.createdAt))}.
                </span>
              </span>
              {(comment?.owner?._id === user?.id?.toString() ||
                newsOwner?.toString() === user?.id?.toString()) && (
                <Popover>
                  <PopoverTrigger>
                    <Ellipsis />
                  </PopoverTrigger>
                  <PopoverContent className="p-3">
                    <ul className="flex flex-col gap-2 ">
                      {comment.owner?._id?.toString() ===
                        user?.id.toString() && (
                        <li
                          className="flex items-center gap-1 cursor-pointer hover:underline"
                          onClick={() => {
                            setIsMainCompoentOpen(true);
                          }}
                        >
                          Edit
                          <Edit size={"14px"} />
                        </li>
                      )}
                      <hr />
                      <li
                        className="flex items-center gap-1 cursor-pointer hover:underline"
                        onClick={handleDeleteComment}
                      >
                        Delete <Trash2 size={"14px"} />
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              )}
            </CardTitle>
            <CardContent className="mt-4 p-0 md:p-3">
              {isMainCommentOpen ? (
                <div className="w-full">
                  <Textarea
                    value={mainComment}
                    onChange={(e) => {
                      setMainComment(e.target.value);
                    }}
                  />
                  <div className="flex gap-2 items-center mt-3">
                    <Button
                      variant={"destructive"}
                      size={"sm"}
                      onClick={() => {
                        setIsMainCompoentOpen(false);
                        setMainComment(comment?.comment);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      disabled={mainComment === comment.comment}
                      size={"sm"}
                      onClick={handleUpdateMainComment}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              ) : (
                <p>{comment?.comment}</p>
              )}
              <div className="mt-3 flex gap-4 justify-end items-center">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="rounded-xl"
                  onClick={handleReplyOpen}
                >
                  Reply
                </Button>
                <div className="cursor-pointer flex items-center gap-1">
                  {comment.likes.includes(user?.id) ? (
                    <img src="/like.png" alt="like-icon" className="h-5" />
                  ) : (
                    <ThumbsUpIcon size={"20px"} onClick={hanldeLikeComment} />
                  )}

                  <p className="mt-1">{comment?.likes?.length}</p>
                </div>

                <div className="cursor-pointer flex items-center">
                  {comment.disLikes?.includes(user?.id) ? (
                    <img src="/dislike.png" alt="like-icon" className="h-5" />
                  ) : (
                    <ThumbsDownIcon size={"20px"} onClick={handleDislike} />
                  )}
                  <p>{comment?.disLikes?.length}</p>
                </div>
              </div>
              {comment.replies.length > 0 &&
                comment.replies?.map((item: any, index: number) => (
                  <Card key={index} className="mt-2">
                    <CardHeader>
                      <CardDescription>
                        replied to{" "}
                        <span className="underline">
                          @{comment.owner.fullName}
                        </span>
                      </CardDescription>
                      <CardContent className="p-0">
                        <div className="flex gap-2 items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.owner?.avatar ? (
                              <img
                                src={item.owner?.avatar}
                                className="w-10 h-10 object-contain rounded-full"
                              />
                            ) : (
                              <UserCircle size={"30px"} />
                            )}

                            <p className="font-bold text-sky-900">
                              {item.owner.fullName}
                            </p>
                          </div>
                          {(item?.owner?._id?.toString() ===
                            user?.id?.toString() ||
                            comment?.owner?._id?.toString() ===
                              user?.id?.toString() ||
                            newsOwner?.toString() === user?.id?.toString()) && (
                            <Popover>
                              <PopoverTrigger>
                                <Ellipsis />
                              </PopoverTrigger>
                              <PopoverContent className="p-3">
                                <ul className="flex flex-col gap-2 ">
                                  {item?.owner?._id?.toString() ===
                                    user?.id?.toString() && (
                                    <li
                                      className="flex items-center gap-1 cursor-pointer hover:underline"
                                      onClick={() =>
                                        setIsUpdateCommentOpen(true)
                                      }
                                    >
                                      Edit
                                      <Edit size={"14px"} />
                                    </li>
                                  )}
                                  <hr />
                                  <li
                                    className="flex items-center gap-1 cursor-pointer hover:underline"
                                    onClick={() =>
                                      handledDeleteReplies(item?._id)
                                    }
                                  >
                                    Delete <Trash2 size={"14px"} />
                                  </li>
                                </ul>
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                        {isUpdateCommentOpen ? (
                          <UpdateComment
                            previousComment={item.comment}
                            commentId={comment?._id}
                            replyId={item?._id}
                            setCommentData={setComment}
                            setIsUpdateCommentOpen={setIsUpdateCommentOpen}
                            comments={comment}
                          />
                        ) : (
                          <p className="mt-2">{item.comment}</p>
                        )}
                      </CardContent>
                    </CardHeader>
                  </Card>
                ))}
              {isCommentOpen && (
                <div className="mt-2">
                  <p className="mb-2">Reply to {comment?.owner?.fullName}</p>
                  <Textarea
                    rows={5}
                    className="outline-1"
                    placeholder={`Write your replied here`}
                    value={replies}
                    onChange={(e) => setReplies(e.target.value)}
                  />
                  <div className="flex justify-end mt-2 gap-1">
                    <Button
                      variant={"destructive"}
                      onClick={() => {
                        setIsCommentOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-sky-800"
                      onClick={handleReply}
                      disabled={!replies.length}
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};
