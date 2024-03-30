"use client";
import {
  CircleGauge,
  CircleUserRound,
  Newspaper,
  Rss,
  SquareMenu,
  User,
} from "lucide-react";
import React from "react";

const dashboardSidebar = [
  {
    name: "Dashboard",
    icon: <CircleGauge />,
  },
  {
    name: "News",
    icon: <Newspaper />,
  },
  {
    name: "Province News",
    icon: <Rss />,
  },
  {
    name: "User",
    icon: <User />,
  },
  {
    name: "Reporter",
    icon: <CircleUserRound />,
  },
  {
    name: "Menus",
    icon: <SquareMenu />,
  },
];
export const DashbordSidebar = () => {
  return (
    <div className="w-[250px] h-screen p-3 border-r">
      <ul>
        {dashboardSidebar?.map((item, index) => (
          <li className="p-3 hover:bg-sky-900 mb-2 flex  gap-2 items-center hover:text-white rounded-lg transition-all ease-in duration-100">
            {item.icon}
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
