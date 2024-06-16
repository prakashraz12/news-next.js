import React, { useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LogOut, MessageCircleHeart, SettingsIcon } from "lucide-react";
import { UserSettings } from "./user-settings.compoent";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetCommentByUserIdQuery } from "@/(service)/api/comment.ap";
import { CommentCard } from "./comment-card.compoent";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useLazyLogoutQuery } from "@/(service)/api/user.api";
import { setLogOut } from "@/(store)/slices/app.slice";
interface UserProfilePorps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const UserProfile = ({ open, setOpen }: UserProfilePorps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.app?.userDetails);
  const [comment, { data, isSuccess }] = useLazyGetCommentByUserIdQuery();
  const fetchComment = async () => {
    await comment({});
  };
  const [logOut, { isSuccess: isLogout, isLoading: isLoggingOut }] =
    useLazyLogoutQuery();

  const handleLogout = async () => {
    await logOut({});
  };
  useEffect(() => {
    if (user) {
      fetchComment();
    }
  }, [user]);

  useEffect(() => {
    if (isLogout) {
      dispatch(setLogOut());
      setOpen(false);
    }
  }, [isLogout]);
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
              <TabsTrigger value="profile">
                Settings <SettingsIcon className="w-8 h-5" />
              </TabsTrigger>
              <TabsTrigger value="logout">
                Logout <LogOut className="w-8 h-5" />
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
            <TabsContent value="profile">
              <UserSettings user={user} setOpen={setOpen} />
            </TabsContent>
            <TabsContent
              value="logout"
              className="w-full h-[500px] flex items-center justify-center"
            >
              <Card>
                <CardContent className="mt-2">
                  <p className="text-xl">Are you sure want to logout?</p>
                  <div className="flex flex-col gap-2 mt-5">
                    <Button
                      className="w-full"
                      disabled={isLoggingOut}
                      onClick={handleLogout}
                    >
                      Sure
                    </Button>
                    <Button
                      variant={"destructive"}
                      disabled={isLoggingOut}
                      onClick={() => setOpen(false)}
                    >
                      No,cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
};
