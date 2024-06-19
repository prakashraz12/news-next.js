import { NewsDetailsPage } from "@/components/details-page.compeont";
import React from "react";
async function getData(id: string) {
  const res = await fetch(
    `https://nepal-news-backend.onrender.com/api/v1/news/get/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  return (
    <>
      <NewsDetailsPage
        isNewsFetching={false}
        newsData={data?.data}
        isNewsfetched={true}
        type="news"
      />
    </>
  );
}
