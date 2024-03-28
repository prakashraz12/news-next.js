import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import { CircleUserIcon } from "lucide-react";
import { Button } from "./ui/button";

interface UserLogoComponentProps {
  naviagtionLink?: string;
  imageUrl?: string;
}
export const UserLogoComponent = ({
  naviagtionLink,
  imageUrl,
}: UserLogoComponentProps) => {
  const router = useRouter();

  const handleClickOnAvatar = () => {
    router.push(`/${naviagtionLink}`);
  };

  return (
    <div onClick={handleClickOnAvatar} className="cursor-pointer">
      {imageUrl === null || imageUrl === undefined ? (
        <Button variant={"ghost"} className="p-2">
          <CircleUserIcon />
        </Button>
      ) : (
        <Avatar>
          <AvatarImage src={imageUrl} alt="user-image" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
