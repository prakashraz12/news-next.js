import React from "react";
import { Card } from "../ui/card";
import { CircleUser, Mail, Phone, User } from "lucide-react";

export const AdminProfile = () => {
  return (
    <Card className="p-2 flex gap-5">
      <img
        src="https://yt3.googleusercontent.com/FAkercDNVQc20b3lVxhwumeV-JSG-fvd5fTYhBZs3qUyprtMM1nTo7dPMrPkm-Exex59a7VQVw=s900-c-k-c0x00ffffff-no-rj"
        alt="news-image"
        className="w-[200px] h-[200px] object-cover rounded-sm"
      />
      <div className="p-3 flex flex-col gap-2">
       <div className="flex items-center"><User/> <h1 className="text-xl font-bold text-sky-900">Praksh Shrestha </h1></div>
       <div className="flex gap-2"><Mail/> <p className="text-md text-sky-900 font-bold">rzprakash16@gmail.com</p></div>
       <div className="flex gap-2"><Phone/> <p className="text-md text-sky-900 font-bold">9851374362</p></div>
       <div className="flex gap-2"><CircleUser/> <p className="">9851374362</p></div>
      </div>
    </Card>
  );
};
