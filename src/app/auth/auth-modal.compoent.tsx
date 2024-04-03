import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Eye, UserIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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
          <DialogTitle className="text-center">लग - इन</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <form className="flex flex-col gap-6">
              <Input placeholder="इमेल" className="w-full" />

              <Input placeholder="पासवर्ड" />
              <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    पासवर्ड देखाउनुहोस्
                  </label>
                </div>
                <p className="underline">
                  <a href="">पासवर्ड भुल्नु भयो</a>
                </p>
              </div>
              <Button type="submit">लगइन</Button>
            </form>
            <p className="mt-2">के तपाई यहाँ नयाँ हुनुहुन्छ? <a href="" className="underline">नयाँ खाता साइन अप गर्नुहोस्</a></p>
            <div>
              <p></p>
            </div>
          </div>
          <div>
            <h1></h1>
            <ul
              role="list"
              className="marker:text-sky-800 list-disc pl-5 space-y-3 text-slate-400"
            >
              <li>
                समाचार डाइजेस्ट: तपाईले पढ्न छुटाउनुभएका समाचारहरु पढ्न
                सक्नुहुनेछ ।
              </li>
              <li>
                संग्रहित समाचार: तपाईले संग्रह गर्नुभएको समाचारहरु पढ्न
                सक्नुहुनेछ ।
              </li>
              <li>
                संग्रहित समाचार: तपाईले संग्रह गर्नुभएको समाचारहरु पढ्न
                सक्नुहुनेछ ।
              </li>
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
