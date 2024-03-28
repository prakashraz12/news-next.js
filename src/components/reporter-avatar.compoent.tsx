import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ReporterAvatarCompoentProps {
  imageUrl?: String;
  firstName: String;
  middleName?: String;
  lastName: String;
  className?:string
}
export const ReporterAvatarCompoent = ({
  imageUrl,
  firstName,
  middleName,
  lastName,
  
}: ReporterAvatarCompoentProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="border-dashed border-2 border-sky-500">
        <AvatarImage
          src="https://www.onlinekhabar.com/wp-content/uploads/2022/05/Sumitra-Luitel1-1-270x170.jpg"
          alt="reporter-image"
          
          className="object-cover"
        />
        <AvatarFallback>{firstName?.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <h6 className="text-sm font-bold">टोपराज शर्मा</h6>
    </div>
  );
};
