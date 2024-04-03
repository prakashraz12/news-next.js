import { HomePageAdsViewsCompoent } from "@/components/dashboard/_components/ads/home-page-ads-views.compoent";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AdsPage = () => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList>
        <TabsTrigger value="1">Home Page </TabsTrigger>
        <TabsTrigger value="2">News Details Page</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <Card className="p-3">
          <HomePageAdsViewsCompoent />
        </Card>
      </TabsContent>
      <TabsContent value="2">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default AdsPage;
