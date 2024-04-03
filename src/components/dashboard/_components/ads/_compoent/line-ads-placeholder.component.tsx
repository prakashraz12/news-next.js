import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import React from "react";

interface LineAdsPlaceholderComponentProps{
    className?: string;
    position?: string;
}
export const LineAdsPlaceholderComponent = ({ className, position }:LineAdsPlaceholderComponentProps) => {
  return (
    <Card className={`border-dashed border-4 border-slate-300 h-[100px] mt-2 cursor-pointer w-full ${className}`}>
      <CardContent className="flex justify-center items-center h-full flex-col text-slate-300 mt-3">
        <p className="text-2xl text-slate-300 font-bold">
          Your ad will be here
        </p>
        <PlusIcon />
      </CardContent>
    </Card>
  );
};
