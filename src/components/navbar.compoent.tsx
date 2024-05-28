"use client";
import React, { useEffect, useState } from "react";
import { MenuComponet } from "./menu.compoent";
import { UserLogoComponent } from "./user-logo.compoent";
import { SearchComponent } from "./search.compoent";
import { MobileNavBrComponent } from "./mobile-navbar.compoent";
import { AuthModal } from "@/app/auth/auth-modal.compoent";
import { useSelector } from "react-redux";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ModeToggle } from "./theme-switcher.component";

export const NavabrCompoent = () => {
  const isLogIn = useSelector(({ app }: { app: any }) => app.token);

  const user = useSelector(({ app }: { app: any }) => app.userDetails);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAuthModalOpen = () => {
    setIsAuthModalOpen(true);
  };
  return (
    <React.Fragment>
      {isClient && (
        <div className="w-full shadow-md sticky top-0 bg-white dark:bg-[#020817] border-white border-b z-20">
          <nav className="md:container md:mx-auto p-5 flex justify-between items-center">
            <div className="md:block hidden">
              <MenuComponet />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="md:hidden">
                <MobileNavBrComponent menuList={menuList} />
              </div>
              <div className="hidden md:block"></div>
              <div className="flex">
                <ModeToggle />
                {isLogIn ? (
                  <Avatar className="cursor-pointer hover:border-2 hover:border-sky-900 transition-all ease-linear ">
                    <AvatarImage
                      src={user?.avatar}
                      alt={user.fullName}
                      className="object-cover"
                    />
                    <AvatarFallback>{user?.fullName}</AvatarFallback>
                  </Avatar>
                ) : (
                  <>
                    <UserLogoComponent onClick={handleAuthModalOpen} />
                    <AuthModal
                      open={isAuthModalOpen}
                      setOpen={setIsAuthModalOpen}
                    />
                  </>
                )}
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
