"use client";
import React, { useEffect, useState } from "react";
import { MenuComponet } from "./menu.compoent";
import { UserLogoComponent } from "./user-logo.compoent";
import { SearchComponent } from "./search.compoent";
import { MobileNavBrComponent } from "./mobile-navbar.compoent";
import { AuthModal } from "@/app/auth/auth-modal.compoent";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ModeToggle } from "./theme-switcher.component";
import { UserProfile } from "./user/user-profile-slider.compoent";
import { MenuIcon } from "lucide-react";
import { setIsAuthOpen } from "@/(store)/slices/app.slice";

export const NavabrCompoent = () => {
  const dispatch = useDispatch();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isUserProfileOpen, setIsUserProfleOpen] = useState<boolean>(false);
  const isLogIn = useSelector(({ app }: { app: any }) => app.token);

  const user = useSelector(({ app }: { app: any }) => app.userDetails);
  const [isClient, setIsClient] = useState<boolean>(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAuthModalOpen = () => {
    dispatch(setIsAuthOpen(true))
  };

  return (
    <React.Fragment>
      {isClient && (
        <div className="w-full shadow-md sticky top-0 bg-white dark:bg-[#020817] border-b z-20 border-t">
          <nav className="md:max-w-6xl md:mx-auto pt-2 pb-2 pl-5 pr-5 flex justify-between items-center relative">
            <div className="md:block hidden">
              <MenuComponet />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="md:hidden">
                <MenuIcon onClick={() => setIsMobileNavOpen(true)} />
                <MobileNavBrComponent
                  open={isMobileNavOpen}
                  setOpen={setIsMobileNavOpen}
                />
              </div>
              <div className="hidden md:block"></div>
              <div className="flex gap-2 items-center">
                <ModeToggle />
                {isLogIn ? (
                  <Avatar
                    aria-label="user-avatar"
                    className="cursor-pointer border border-red-900 dark:border-white border-dashed transition-all ease-linear p-1"
                    onClick={() => setIsUserProfleOpen(true)}
                  >
                    <AvatarImage
                      src={user?.avatar}
                      alt="user"
                      className="object-cover h-full w-full rounded-full"
                    />
                    <AvatarFallback className="flex justify-center w-full items-center text-xl">
                      {user.fullName.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <>
                    <UserLogoComponent onClick={handleAuthModalOpen} />
                    <AuthModal
                    />
                  </>
                )}
                <SearchComponent />
                <UserProfile
                  open={isUserProfileOpen}
                  setOpen={setIsUserProfleOpen}
                />
              </div>
            </div>
          
          </nav>
        </div>
      )}
    </React.Fragment>
  );
};
