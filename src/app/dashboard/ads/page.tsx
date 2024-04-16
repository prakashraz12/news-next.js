import { HomePageAdsViewsCompoent } from "@/components/dashboard/_components/ads/home-page-ads-views.compoent";
import { NewsDetailsPageAds } from "@/components/dashboard/_components/ads/news-details-page-ads-view.component";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AdsPage = () => {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="mb-5 flex justify-center">
        <TabsTrigger value="1">Home Page </TabsTrigger>
        <TabsTrigger value="2">News Details Page</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <Card className="p-3">
          <HomePageAdsViewsCompoent />
        </Card>
      </TabsContent>
      <TabsContent value="2">
        <NewsDetailsPageAds />
      </TabsContent>
    </Tabs>
  );
};

export default AdsPage;
