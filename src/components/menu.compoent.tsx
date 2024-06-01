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
import { useDispatch, useSelector } from "react-redux";
import { useGetNewsByMenuMutation } from "@/(service)/api/news.api";
import { Menu, News } from "@/types/newsTypes";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setMenuNews } from "@/(store)/slices/cache.slice";
import { useDeviceType } from "../../hook/useDeviceType";

export function MenuComponet() {
  const isMobile: boolean = useDeviceType();
  const dispatch = useDispatch();
  const router = useRouter();
  const appSettings = useSelector((app: any) => app.app.appSettings);
  const cachedMenusData = useSelector((state: any) => state?.cache?.menuNews);
  const [searchParams, { isSuccess, data }] = useGetNewsByMenuMutation();
  const menusId = appSettings?.menus?.map((item: Menu) => item._id);
  const fetchNews = React.useCallback(async () => {
    await searchParams({ menu: [...menusId] });
  }, [appSettings?.menus?.length]);

  React.useEffect(() => {
    if (cachedMenusData === null && appSettings?.menus && !isMobile) {
      fetchNews();
    }
  }, [appSettings?.menus]);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setMenuNews(data?.data));
    }
  }, [isSuccess]);

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
        {appSettings?.menus.map((menuItem: any, index: number) => (
          <NavigationMenuItem className="hidden md:block" key={index}>
            <NavigationMenuTrigger
              className="text-md"
              onClick={() => router.push(`/home/menu/${menuItem?._id}`)}
            >
              {menuItem?.menuTitle}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border-1 border-gray-950">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {cachedMenusData?.[menuItem._id]?.map((newsItem: News) => (
                  <ListItem
                    key={newsItem._id}
                    bannerImage={newsItem?.bannerImage}
                    title={newsItem.newsTitle}
                    href={`/home/news/${newsItem._id}`}
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
  {
    className?: string;
    title: string;
    children: React.ReactNode;
    bannerImage?: string;
    href: string;
  }
>(({ className, title, children, bannerImage, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:text-sky-800 dark:hover:text-white ",
            className
          )}
          {...props}
        >
          <div className="flex gap-2">
            <img
              src={bannerImage || "/no-photo.png"}
              alt="banner-image"
              className={`w-[70px] h-[70px] ${bannerImage ? "object-cover" : "object-contain"} ${!bannerImage && "opacity-10"} rounded-sm`}
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
