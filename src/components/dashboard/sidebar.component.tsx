import React from "react";
import {
  CircleGauge,
  CircleUserRound,
  Newspaper,
  Rss,
  SquareMenu,
  User,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const dashboardSidebar = [
  {
    name: "Dashboard",
    icon: <CircleGauge />,
    link: "/dashboard",
  },
  {
    name: "News",
    icon: <Newspaper />,
    link: "/dashboard/news",
  },
  {
    name: "Province",
    icon: <Rss />,
    link: "/province", // Provide a valid link
  },
  {
    name: "User",
    icon: <User />,
    link: "/user", // Provide a valid link
  },
  {
    name: "Reporter",
    icon: <CircleUserRound />,
    link: "/reporter", // Provide a valid link
  },
  {
    name: "Menus",
    icon: <SquareMenu />,
    link: "/menus", // Provide a valid link
  },
];

interface NavDashboardProps {
  isMenuOpen: boolean;
}

export const DashbordSidebar = ({ isMenuOpen }: NavDashboardProps) => {
  const params = usePathname();
  return (
    <div
      className={`${isMenuOpen ? "w-[220px]" : "w-[70px]"} h-full p-3 border-r top-20 duration-200 ease-in transition-all bg-slate-100`}
    >
      <ul className="h-full flex flex-col">
        {dashboardSidebar?.map((item, index) => (
          <li
            key={index}
            className={`pt-3 pb-3 ${params === item.link ? "bg-sky-800 text-white" : ""} pr-3 pl-3 cursor-pointer hover:bg-slate-400 mb-2 flex gap-2 items-center hover:text-white rounded-lg`}
          >
            <Link href={item.link} passHref className="flex gap-3 items-start">
              {item.icon}
              {isMenuOpen ? item?.name : ""}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
