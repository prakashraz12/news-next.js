"use client";
import { Menu } from "@/types/newsTypes";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const FooterCompoent = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);
  const appSettings = useSelector((app: any) => app.app.appSettings);

  return (
    <>
      {isClient && (
        <footer className="bg-sky-900 w-full dark:bg-[#020817] border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 md:container md:mx-auto  w-full p-5">
            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-white">उपयोगी लिंकहरु</h1>
              <ul className="flex flex-col gap-3 p-3">
                <li className="text-white hover:text-sky-200 cursor-pointer w-auto">
                  <Link href={`/`} legacyBehavior aria-label="home page">
                    होमपेज
                  </Link>
                </li>
                {appSettings &&
                  appSettings?.menus.map?.((item: Menu, index: number) => (
                    <li
                      className="text-white hover:text-sky-200 cursor-pointer"
                      key={index}
                    >
                      <Link
                        href={`/home/menu/${item?._id}`}
                        legacyBehavior
                        aria-label="menu page"
                      >
                        {item?.menuTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-white">
                {appSettings?.menus?.length >= 1 &&
                  appSettings?.menus[1]?.menuTitle}
              </h1>
              <ul className="flex flex-col gap-3 p-3">
                {appSettings?.menus?.length >= 2 &&
                  appSettings?.subMenus
                    ?.filter((i: any) => i.menu === appSettings?.menus[1]?._id)
                    ?.map((item: any, index: number) => (
                      <li
                        className="text-white hover:text-sky-200 cursor-pointer w-auto"
                        key={index}
                      >
                        <Link href={`/home/submenu/${item?._id}`}>
                          {item?.subMenuTitle}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-white">नेपाल खबर</h1>
              <ul className="flex flex-col gap-3 p-3">
                <li className="text-white hover:text-sky-200 cursor-pointer">
                  प्रयोगका सर्त
                </li>
                <li className="text-white hover:text-sky-200 cursor-pointer">
                  विज्ञापन
                </li>
                <li className="text-white hover:text-sky-200 cursor-pointer">
                  प्राइभेसी पोलिसी
                </li>
                <li className="text-white hover:text-sky-200 cursor-pointer">
                  सम्पर्क
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">सम्पर्क</h1>
              <p className="text-white mt-3">
                +977-1-4790176, +977-1-4796489 news@onlinekhabar.com
              </p>
              <div className="mt-3">
                <ul className="flex text-white gap-3">
                  <li>
                    <Facebook />
                  </li>
                  <li>
                    <Twitter />
                  </li>
                  <li>
                    <Youtube />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
