import { NewsDetailsPage } from "@/components/details-page.compeont";
import React from "react";
import { BASE_URL } from "../../../../../_config";
import { Metadata } from "next";
async function getData(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/story/get/${id}`);

    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await getData(id);
  return {
    title: data?.newsTitle,
    description: data?.shortDescription,
  };
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
        newsData={data?.data}
        isNewsfetched={true}
        type="story"
      />
    </>
  );
}
