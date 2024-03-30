import { Bell, Box, Menu } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const NavDashboard = () => {
  return (
    <div className="w-full  bg-sky-900 sticky top-0 text-white p-5">
      <div className="flex justify-between items-center">
        <div>
          <Menu />
        </div>
        <div className="flex gap-5 items-center">
          <div className="relative cursor-pointer">
            <Bell />
            <p className="p-2 w-5 h-5 flex text-sm absolute bottom-3 left-3 justify-center items-center  bg-red-700 text-white rounded-full">
              1
            </p>
          </div>
          <div>
            <Avatar className="border-2-dotted">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
