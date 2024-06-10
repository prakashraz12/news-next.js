import React from "react";
import { SideBarAdsCompoent } from "./news/side-bar-ads.compoent";

export const HorizontalAdsCompoent = ({menuTitle}:{menuTitle:string}) => {
  return (
    <div className="grid-cols-1 md:grid-cols-3  hidden md:grid">
     <SideBarAdsCompoent searchStatus={`${menuTitle}4`}/>
     <SideBarAdsCompoent searchStatus={`${menuTitle}5`}/>
     <SideBarAdsCompoent searchStatus={`${menuTitle}6`}/>
    </div>
  );
};
