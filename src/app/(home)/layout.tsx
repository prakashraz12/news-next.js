"use client";
import { AdsViewComponent } from "@/components/ads-view.component";
import { FooterCompoent } from "@/components/footer.component";
import { LogoBarCompoent } from "@/components/logobar.compoent";
import { NavabrCompoent } from "@/components/navbar.compoent";
import { ScrollButton } from "@/components/scroll-up.compoent";
import React, { ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <LogoBarCompoent />
      <NavabrCompoent />
      {children}
      <FooterCompoent />
      <ScrollButton />
    </div>
  );
};

export default HomePageLayout;
