"use-client";

import { formatNepaliDate } from "@/utils/format-neplai-version-date.util";
import { useRouter } from "next/navigation";
import React from "react";

const todayDate = new Date()
export const LogoBarCompoent = () => {
  const router = useRouter()
  return (
    <header className="h-36 bg-sky-800 dark:bg-[#020817] w-full flex justify-center	items-center antialiased flex-col" >
      <h1 className="text-4xl text-white font-extrabold cursor-pointer " onClick={()=>router.push("/")}>नेपाल खबर</h1>
      <p className="text-sm text-white">{formatNepaliDate(todayDate)}</p>
    </header>
  );
};
