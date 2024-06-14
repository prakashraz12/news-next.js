import React, { useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { MessageCircleHeart, SettingsIcon } from "lucide-react";
import { UserSettings } from "./user-settings.compoent";
import { useSelector } from "react-redux";
import { useLazyGetCommentByUserIdQuery } from "@/(service)/api/comment.ap";
import { CommentCard } from "./comment-card.compoent";
interface UserProfilePorps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const UserProfile = ({ open, setOpen }: UserProfilePorps) => {
  const user = useSelector((state: any) => state?.app?.userDetails);
  const [comment, { data, isSuccess }] = useLazyGetCommentByUserIdQuery();
  const fetchComment = async () => {
    await comment({});
  };
  useEffect(() => {
    if (user) {
      fetchComment();
    }
  }, [user]);

  return (
    <Sheet open={open} onOpenChange={() => setOpen(false)}>
      <SheetContent className="w-[95%] p-0 flex flex-col justify-between">
        <div className="p-2">
          <div className="flex gap-3 items-center p-3">
            <img
              src={user?.avatar || "./no-photo.png"}
              loading="lazy"
              className="h-[50px] w-[50px] object-cover rounded-full"
              alt="user"
            />
            <div>
              <p className="text-xl">{user?.fullName}</p>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="comment" className="w-full">
                Comments <MessageCircleHeart className="w-8 h-5" />
              </TabsTrigger>
              <TabsTrigger value="s">
                Settings <SettingsIcon className="w-8 h-5" />
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="comment"
              className="w-full h-[800px] overflow-auto"
            >
              {isSuccess &&
                data?.data?.map((item: any, index: number) => (
                  <CommentCard key={index} item={item} />
                ))}
              {isSuccess && data?.data?.length === 0 && (
                <p className="text-center">अझै टिप्पणी गरिएको छैन</p>
              )}
            </TabsContent>
            <TabsContent value="s">
              <UserSettings user={user} setOpen={setOpen} />
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
};
