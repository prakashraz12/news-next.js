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
      <Avatar className="border-dashed border border-slate-500 w-12 h-12 flex justify-center items-center shadow-lg" >
        <AvatarImage
          src={imageUrl}
          alt="reporter-image"
          className="object-cover w-10 h-10 rounded-full"
        />
        <AvatarFallback>{fullName?.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <p className="text-sm md:font-[600]">{ fullName}</p>
    </div>
  );
};
