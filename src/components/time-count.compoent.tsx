import { formatRelativeNepaliDate } from "@/utils/time-counter.util";
import { Clock } from "lucide-react";
import React from "react";

interface TimeCountComponentProps {
  createTime: string | Date;
}
export const TimeCountComponent = ({ createTime }: TimeCountComponentProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Clock size={"15px"} />
      <p className="md:font-medium text-sm">
        {formatRelativeNepaliDate(new Date(createTime))}
      </p>
    </div>
  );
};
