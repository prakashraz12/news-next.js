import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserIcon } from "lucide-react";

export const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2">
          <UserIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] flex justify-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-center">Login</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <form className="flex flex-col gap-3">
              <Input placeholder="Email" className="w-full" />
              <Input placeholder="password" className="w-full" />
              <Button type="submit">login</Button>
            </form>
          </div>
          <div>
            <ul>
              <li>समाचार डाइजेस्ट: तपाईले पढ्न छुटाउनुभएका समाचारहरु पढ्न सक्नुहुनेछ ।</li>
              <li>संग्रहित समाचार: तपाईले संग्रह गर्नुभएको समाचारहरु पढ्न सक्नुहुनेछ ।</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
