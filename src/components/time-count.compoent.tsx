import { formatRelativeNepaliDate } from "@/utils/time-counter.util";
import { Clock } from "lucide-react";
import React from "react";

interface TimeCountComponentProps {
  createTime: string | Date;
}
export const TimeCountComponent = ({ createTime }: TimeCountComponentProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Clock size={"18px"} />
      <p className="md:font-bold text-sm">
        {formatRelativeNepaliDate(new Date(createTime))}
      </p>
    </div>
  );
};
