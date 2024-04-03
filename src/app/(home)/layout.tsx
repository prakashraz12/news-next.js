"use client";
import { FooterCompoent } from "@/components/footer.component";
import { LogoBarCompoent } from "@/components/logobar.compoent";
import { NavabrCompoent } from "@/components/navbar.compoent";
import { ScrollButton } from "@/components/scroll-up.compoent";
import React from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <LogoBarCompoent />
        <NavabrCompoent />
        {children}
        <FooterCompoent />
        <ScrollButton />
      </body>
    </html>
  );
}
