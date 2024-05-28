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
      <Avatar className="border-dashed border-2 border-sky-500">
        <AvatarImage
          src={imageUrl}
          alt="reporter-image"
          
          className="object-cover"
        />
        <AvatarFallback>{fullName?.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <h6 className="text-sm font-bold">{ fullName}</h6>
    </div>
  );
};
