"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MenuComponet() {
  const appSettings = useSelector((app: any) => app.app.appSettings);
  const params = useParams();
  const path = usePathname();
  return (
    <NavigationMenu>
      {appSettings?.menus && (
        <NavigationMenuList>
          <NavigationMenuItem className="mr-5">
            <Link href="/" legacyBehavior passHref aria-label="go-home-page">
              <NavigationMenuLink
                className={` text-sky-900 dark:text-white ${path === "/" && "text-sky-950 font-bold"}`}
              >
                गृहपृष्ठ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {appSettings?.menus.map((menuItem: any, index: number) => (
            <NavigationMenuItem key={index} className="mr-5">
              <Link
                href={`/home/menu/${menuItem?._id}`}
                legacyBehavior
                passHref
                aria-label="view menu page"
              >
                <NavigationMenuLink
                  className={` mr-5 ${params?.id === menuItem?._id && "text-sky-950 font-bold"} text-sky-900 dark:text-white`}
                >
                  {menuItem?.menuTitle}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      )}
    </NavigationMenu>
  );
}

