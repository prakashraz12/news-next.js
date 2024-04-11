import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import { CircleUserIcon } from "lucide-react";
import { Button } from "./ui/button";

interface UserLogoComponentProps {
  naviagtionLink?: string;
  imageUrl?: string;
  onClick?: ()=> void
}
export const UserLogoComponent = ({
  naviagtionLink,
  imageUrl,
  onClick
}: UserLogoComponentProps) => {
  const router = useRouter();

  const handleClickOnAvatar = () => {
    router.push(`/${naviagtionLink}`);
  };

  const isUserLogedIn = false;
  return (
    <div  className="cursor-pointer">
      {! isUserLogedIn  ? (
        <Button variant={"ghost"} className="p-2" onClick={onClick}>
          <CircleUserIcon />
        </Button>
      ) : (
        <Avatar onClick={handleClickOnAvatar}>
          <AvatarImage src={imageUrl} alt="user-image" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
