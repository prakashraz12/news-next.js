"use-client";

import { formatNepaliDate } from "@/utils/format-neplai-version-date.util";
import React from "react";

const todayDate = new Date()
export const LogoBarCompoent = () => {
  return (
    <header className="h-36 bg-sky-800 w-full flex justify-center	items-center antialiased flex-col">
      <h1 className="text-4xl text-white font-extrabold">नेपाल खबर</h1>
      <p className="text-sm text-white">{formatNepaliDate(todayDate)}</p>
    </header>
  );
};
