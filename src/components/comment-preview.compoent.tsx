import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Redo, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";

export const CommentPreviewComponent = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleReplyOpen = () => {
    setIsCommentOpen(true);
  };
  return (
    <div className="w-full flex gap-3 mt-5">
      <Avatar>
        <AvatarImage
          src="https://www.onlinekhabar.com/wp-content/uploads/2023/12/Gagan-Thapa.jpg"
          alt="avatar-image"
          className="object-cover"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Card className="p-3 w-full">
        <CardTitle className="flex gap-3 items-center">
          <span className="text-2xl font-bold text-sky-900">
            Ramesh bajracharya
          </span>
          <span className="text-sm font-medium">२०८० चैत १३ गते</span>
        </CardTitle>
        <CardContent className="mt-4">
          <p className="text-md">
            गगन जी सुन्दा अचम्म लाग्ला, देउबा का सहउमेर का को गति र तपाइका
            सहउमेरका को मति देखेर अजित जनताले नै छट्ठू हरुलाई अवसर दिएको हैन र ?
          </p>
          <div className="mt-3 flex gap-4 justify-end">
            <Button variant={"secondary"} onClick={handleReplyOpen}>
              Reply
            </Button>
            <div className="cursor-pointer flex items-center">
              <ThumbsUpIcon size={"15px"} />
              <p>10</p>
            </div>
            <div className="cursor-pointer flex items-center">
              <ThumbsDownIcon size={"15px"} />
              <p>10</p>
            </div>
          </div>
          {isCommentOpen && (
            <div className="mt-2">
              <p className="mb-2">Reply to Ramesh bajracharya</p>
              <Textarea rows={5} />
              <div className="flex justify-end mt-2 gap-1">
                <Button
                  variant={"destructive"}
                  onClick={() => {
                    setIsCommentOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button className="bg-sky-800">Reply</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
