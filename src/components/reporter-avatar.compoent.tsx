"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ReporterAvatarCompoentProps {
  imageUrl?: string;
  fullName?: string;
  className?:string
}
export const ReporterAvatarCompoent = ({
  imageUrl,
  fullName
  
}: ReporterAvatarCompoentProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="border-dashed border-2 border-sky-500 w-7 h-7 md:w-10 md:h-10" >
        <AvatarImage
          src={imageUrl}
          alt="reporter-image"
          className="object-cover "
        />
        <AvatarFallback>{fullName?.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <h6 className="text-sm md:font-[600]">{ fullName}</h6>
    </div>
  );
};
