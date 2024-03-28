"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ओली किन एकाएक नरम ?",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
  {
    title: "७ भिन्नता, व्यायाम गर्ने र नगर्ने शरीरमा के हुन्छ ?",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
  {
    title:
      "नेपाल प्रज्ञा प्रतिष्ठानबाट खगेन्द्र संग्रौलादेखि मोहन विक्रम सिंहसम्म पुरस्कृत",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
  {
    title:
      "त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
  {
    title: "४ चैत, काठमाडौं ।",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
  {
    title:
      "माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन्?",
    href: "/docs/primitives/alert-dialog",
    description:
      "४ चैत, काठमाडौं । माओवादीहरुलाई केपी ओलीको जुन कुरा मन पर्छ, त्यही कुराले उनीहरु हैरानसमेत हुने गर्छन् । ओलीको त्यो चरित्र हो– दृढता, जसलाई उनीहरु कुरा नमिलेका बेला ‘हठ, जिद्दीपना’ भनी अर्थ्याउँछन्",
  },
];

interface MenuProps {
  menuList: { label: string; link: string }[];
}

export function MenuComponet({ menuList }: MenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuList?.slice(0, menuList.length - 1).map((menuItem, index) => (
          <NavigationMenuItem key={index}>
            <Link href={`${menuItem.link}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menuItem?.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>
            {menuList[menuList.length - 1]?.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
