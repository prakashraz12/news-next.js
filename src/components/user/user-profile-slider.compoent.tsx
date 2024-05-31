import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Bell, Lock, MessageCircleHeart, SettingsIcon } from "lucide-react";
import { UserSettings } from "./user-settings.compoent";
interface UserProfilePorps {
  open: boolean;
  setOpen: (type: boolean) => void;
}
export const UserProfile = ({ open, setOpen }: UserProfilePorps) => {
  return (
    <Sheet open={open} onOpenChange={() => setOpen(false)}>
      <SheetContent className="w-[95%] p-0 flex flex-col justify-between">
              <div className="p-2">
              <div className="flex gap-3 items-center p-3">
          <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2023/04/swarnim-wagle-and-Rabi-lamichhane-1-1024x624.jpg"
            loading="lazy"
            className="h-[50px] w-[50px] object-cover rounded-full"
            alt="user"
          />
          <div>
            <p className="text-xl">Prakash Raz Shresta</p>
            <p className="text-sm">rzprakash16@gmail.com</p>
          </div>
        </div>
        <hr className="mt-2 mb-2" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="account">Notification <Bell className="w-8 h-5"/></TabsTrigger>
            <TabsTrigger value="password">Comments <MessageCircleHeart className="w-8 h-5"/></TabsTrigger>
            <TabsTrigger value="s">Settings <SettingsIcon className="w-8 h-5"/></TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
                      <TabsContent value="s">
                          <UserSettings/>
          </TabsContent>
        </Tabs>
              </div>
              <div className="bg-sky-900 w-full h-16 flex  justify-center items-center text-white gap-2 cursor-pointer">
                  <p className="text-xl flex  items-start gap-2">Logout <Lock className="w-5"/></p>
              </div>
      </SheetContent>
    </Sheet>
  );
};
