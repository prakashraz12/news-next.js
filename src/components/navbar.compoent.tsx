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
import { UserProfile } from "./user/user-profile-slider.compoent";
import { MenuIcon } from "lucide-react";

export const NavabrCompoent = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isUserProfileOpen, setIsUserProfleOpen] = useState<boolean>(false);
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
                <MenuIcon onClick={()=>setIsMobileNavOpen(true)}/>
                <MobileNavBrComponent open={isMobileNavOpen} setOpen={setIsMobileNavOpen} />
              </div>
              <div className="hidden md:block"></div>
              <div className="flex">
                <ModeToggle />
                {isLogIn ? (
                  <Avatar
                    aria-label="user-avatar"
                    className="cursor-pointer border-2 hover:border-sky-900 transition-all ease-linear"
                    onClick={() => setIsUserProfleOpen(true)}
                  >
                    <AvatarImage
                      src={user?.avatar}
                      alt="user"
                      className="object-cover"
                    />
                    <AvatarFallback className="flex justify-center w-full items-center text-xl">
                      {user.fullName.slice(0, 1)}
                    </AvatarFallback>
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

