import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

interface MenuProps {
  menuList: { label: string; link: string }[];
  
}
export const MobileNavBrComponent = ({ menuList }: MenuProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-3" >
          <ul>
            {menuList?.map((menu, index) => (
              <li className="font-bold text-xl p-3 text-start" key={index}>
                {menu?.label}
              </li>
            ))}
                  </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
