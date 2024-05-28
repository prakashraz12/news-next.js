"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSelector } from "react-redux";
import { useGetNewsByMenuMutation } from "@/(service)/api/news.api";
import { AppSettingsPorps, Menu, News } from "@/types/newsTypes";

import Link from "next/link";

export function MenuComponet() {
  const appSettings = useSelector(
    (app: AppSettingsPorps) => app.app.appSettings
  );
  const [searchParams, { data }] = useGetNewsByMenuMutation();
  const menusId = appSettings?.menus?.map((item: Menu) => item._id);
  const fetchNews = React.useCallback(async () => {
    await searchParams({ menu: [...menusId] });
  }, [appSettings?.menus?.length]);

  React.useEffect(() => {
    if (appSettings?.menus?.length) {
      fetchNews();
    }
  }, [appSettings?.menus?.length]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="mr-5">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-bold text-md">
              गृहपृष्ठ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {appSettings?.menus.map((menuItem, index) => (
          <NavigationMenuItem className="hidden md:block" key={index}>
            <NavigationMenuTrigger className="text-md">
              {menuItem?.menuTitle}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border-1 border-gray-950">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {data?.data?.[menuItem._id]?.map((newsItem: News) => (
                  <ListItem
                    key={newsItem._id}
                    bannerImage={newsItem?.bannerImage}
                    title={newsItem.newsTitle}
                    href={`/news/${newsItem._id}`}
                  >
                    {newsItem.shortDescription}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, bannerImage, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-sky-800 hover:text-white",
            className
          )}
          {...props}
        >
          <div className="flex gap-2">
            <img
              src={bannerImage || "no-photo.png"}
              alt="banner-image"
              className="w-[70px] h-[70px] object-cover rounded-sm"
            />
            <div className="text-md leading-none p-2">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug  mt-1">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
