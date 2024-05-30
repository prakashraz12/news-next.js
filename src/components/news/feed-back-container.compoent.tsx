import React, { useCallback, useEffect, useState } from "react";
import { CommentInputCntainerCompoent } from "../comment-input-container.compoent";
import { CommentPreviewComponent } from "../comment-preview.compoent";
import { Button } from "../ui/button";
import { useGetCommentMutation } from "@/(service)/api/comment.ap";
import { Comment } from "@/types/newsTypes";
import { CommentLoadingAniamtion } from "./comment-loading-animation.componet";
interface FeedBackContainerPorps {
  newsId?: string;
  newsOwner?: string;
  type?: string;
  comment: Comment[];
  setComment: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const FeedBackContainer = ({
  newsId,
  newsOwner,
  type,
  comment,
  setComment,
}: FeedBackContainerPorps) => {
  const [page, setPage] = useState<number>(1);
  const [isLoadingCommentfetching, setIsLoadingCommentfetching] =
    useState<boolean>(false);

  const [
    searchParams,
    {
      data: commentData,
      isSuccess: isCommentFetched,
      isLoading: isCommentLoading,
    },
  ] = useGetCommentMutation();
  const fetchComment = useCallback(async () => {
    await searchParams({ newsId, page });
  }, [newsId, page, setPage]);

  useEffect(() => {
    if (newsId) {
      fetchComment();
    }
  }, [newsId, page]);

  useEffect(() => {
    if (isCommentFetched) {
      setComment([...comment, ...commentData.data]);
    }
  }, [isCommentFetched]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl font-bold text-sky-800">प्रतिक्रिया</h1>
      <hr className="mt-5" />
      <CommentInputCntainerCompoent
        newsId={newsId}
        setCommentData={setComment}
        type={type}
        setIsLoadingCommentfetching={setIsLoadingCommentfetching}
      />
      <hr className="mt-5 mb-5" />
      <>{isLoadingCommentfetching && <CommentLoadingAniamtion length={1} />}</>
      {comment.length > 0 &&
        comment.map((comment, index) => (
          <CommentPreviewComponent
            comment={comment}
            key={index}
            setComment={setComment}
            newsOwner={newsOwner}
            type={type}
          />
        ))}
      {isCommentLoading && <CommentLoadingAniamtion length={3} />}
      {isCommentFetched && comment.length > 10 && (
        <div className="w-full justify-center flex mt-2 hover:underline">
          <Button
            className="w-[40%] rounded-full  font-medium"
            variant={"default"}
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};
