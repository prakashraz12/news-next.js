"use client";
import React, { useEffect, useState } from "react";
import { MenuComponet } from "./menu.compoent";
import { UserLogoComponent } from "./user-logo.compoent";
import { SearchComponent } from "./search.compoent";
import { MobileNavBrComponent } from "./mobile-navbar.compoent";
import { AuthModal } from "@/app/auth/auth-modal.compoent";


export const NavabrCompoent = () => {
  const [isClient, setIsClient] = useState<Boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      {isClient && (
        <div className="w-full shadow-md sticky top-0 bg-white z-20">
          <nav className="md:container md:mx-auto p-5 flex justify-between items-center">
            <div className="md:block hidden">
              <MenuComponet menuList={menuList} />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="md:hidden">
                <MobileNavBrComponent menuList={menuList} />
              </div>
              <div className="hidden md:block"></div>
              <div className="flex">
                {/* <UserLogoComponent naviagtionLink="/" /> */}
                <AuthModal/>
                <SearchComponent />
              </div>
            </div>
          </nav>
        </div>
      )}
    </React.Fragment>
  );
};

const menuList = [
  {
    label: "होमपेज",
    link: "/",
  },
  {
    label: "समाचार",
    link: "/news",
  },
  {
    label: "विजनेस",
    link: "/business",
  },
  {
    label: "मनोरन्जन",
    link: "/enter",
  },
  {
    label: "विचार",
    link: "/thought",
  },
  {
    label: "खेलकुद",
    link: "/sports",
  },
  {
    label: "अन्य",
    link: "/other",
  },
];
