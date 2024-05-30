import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";

export const NewsDetailsLoading = () => {
  return (
    <div className="md:container p-3">
      <Skeleton className="w-[90%] h-20" />
      <hr className="mt-2" />
      <div className="grid grid-cols-12 p-3 gap-4">
        <div className="col-span-12 md:col-span-1 p-4 flex flex-col justify-start items-center gap-3">
          <Skeleton className="w-20 h-20 rounded-full" />
          <Skeleton className="w-7 h-7 rounded-sm" />
          <Skeleton className="w-[90%] h-7 rounded-sm" />
          <Skeleton className="w-[80%] h-4 rounded-sm" />
          <Skeleton className="w-20 h-20 rounded-full" />
          <Skeleton className="w-20 h-20 rounded-full" />
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>
        <div className="col-span-12 md:col-span-7 ">
          <Skeleton className="w-[100%] h-[500px] rounded-sm" />
          <Skeleton className="w-[100%] h-5 rounded-sm mt-5" />
          <Skeleton className="w-[100%] h-5 rounded-sm mt-1" />
          <Skeleton className="w-[90%] h-3 rounded-sm mt-2" />
          <Skeleton className="w-[90%] h-20 rounded-sm mt-2" />
          <Skeleton className="w-[100%] h-5 rounded-sm mt-5" />
          <Skeleton className="w-[100%] h-5 rounded-sm mt-1" />
          <Skeleton className="w-[90%] h-3 rounded-sm mt-2" />
          <Skeleton className="w-[90%] h-3 rounded-sm mt-2" />
          {Array.from({ length: 20 }).map((i, index) => (
            <Skeleton className="w-[100%] h-3 rounded-sm mt-2" key={index} />
          ))}
          <div className="flex w-full flex-wrap gap-2 mt-4">
            <Skeleton className="w-[32%] h-60 rounded-sm mt-2" />
            <Skeleton className="w-[32%] h-60 rounded-sm mt-2" />
            <Skeleton className="w-[32%] h-60 rounded-sm mt-2" />
          </div>
          <Skeleton className="w-[100%] h-60 rounded-sm mt-5" />
          <Skeleton className="w-[30%] h-16 rounded-sm mt-5" />
          <Skeleton className="w-[100%] h-40 rounded-sm mt-5" />
        </div>
        <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
          <hr className="mt-2 mb-2" />
          <div className="flex gap-2 w-full">
            <Skeleton className="w-[30%] h-[80px] rounded-sm" />
            <div className="w-full flex flex-col gap-2 p-1">
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <Skeleton className="w-[30%] h-[80px] rounded-sm" />
            <div className="w-full flex flex-col gap-2 p-1">
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <Skeleton className="w-[30%] h-[80px] rounded-sm" />
            <div className="w-full flex flex-col gap-2 p-1">
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <Skeleton className="w-[30%] h-[80px] rounded-sm" />
            <div className="w-full flex flex-col gap-2 p-1">
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <Skeleton className="w-[30%] h-[80px] rounded-sm" />
            <div className="w-full flex flex-col gap-2 p-1">
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
              <Skeleton className="w-[90%] h-[10px] rounded-sm" />
            </div>
          </div>
          <hr className="mt-2 mb-2" />
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
          <Skeleton className="w-[90%] h-[200px] rounded-sm" />
        </div>
      </div>
      <Skeleton className="w-[100%] h-[150px] rounded-sm" />
      <Skeleton className="w-[20%] h-[90px] rounded-sm mt-3" />
      <div className="grid grid-cols-12 gap-4 mt-5">
        {Array.from({ length: 8 }).map((i, index) => (
          <div className="col-span-3" key={index}>
            <Card className="p-2">
              <Skeleton className="w-[100%] h-[200px] rounded-sm" />
              <CardContent className="flex flex-col gap-2 p-0 mt-2">
                <Skeleton className="w-[100%] h-4 rounded-sm" />
                <Skeleton className="w-[100%] h-4 rounded-sm" />
                <Skeleton className="w-[100%] h-2 rounded-sm" />
                <Skeleton className="w-[90%] h-2 rounded-sm" />
                <Skeleton className="w-[89%] h-2 rounded-sm" />
                <Skeleton className="w-[99%] h-2 rounded-sm" />
                <Skeleton className="w-[70%] h-2 rounded-sm" />
                <Skeleton className="w-[70%] h-2 rounded-sm" />
                <Skeleton className="w-[70%] h-2 rounded-sm" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
