"use client";
import {
  CircleGauge,
  CircleUserRound,
  Newspaper,
  Rss,
  SquareMenu,
  User,
} from "lucide-react";
import React, { useState } from "react";

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
    name: "Province",
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

interface NavDashboardProps {
  isMenuOpen: boolean;
}

export const DashbordSidebar = ({ isMenuOpen }: NavDashboardProps) => {
  return (
    <div
      className={`w-[${isMenuOpen ? "260px" : "70px"}] h-full p-3 border-r sticky top-20 z-0  duration-700 ease-in transition-all`}
    >
      <ul className="h-full flex  flex-col">
        {dashboardSidebar?.map((item, index) => (
          <li
            key={index}
            className={`pt-3 pb-3 pr-3 pl-3 cursor-pointer hover:bg-sky-900 mb-2 flex  gap-2 items-center hover:text-white rounded-lg`}
          >
            {item.icon}
            {isMenuOpen && item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
