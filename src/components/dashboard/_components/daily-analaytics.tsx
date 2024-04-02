import { Card, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import React from "react";

export const DailyAnalaytics = () => {
  return (
    <div className="grid md:grid-cols-6 grid-cols-1 gap-3 mt-2">
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold">
            Daily Visitors
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <div className="flex gap-2">
            {" "}
            <TrendingUp />
            <p className="text-sm text-sky-900">+20 growth by last day</p>
          </div>
        </Card>
      </div>
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold">
            New Users
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <TrendingUp />
        </Card>
      </div>
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold">
            Today's News
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <TrendingUp />
        </Card>
      </div>
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold ">
            Total Reporters
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <TrendingUp />
        </Card>
      </div>
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold ">
            Active Menus
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <TrendingUp />
        </Card>
      </div>
      <div>
        <Card className="p-3 flex flex-col gap-2">
          <CardTitle className="text-md font-bold ">
            Active Categories
          </CardTitle>
          <h1 className="text-5xl font-bold text-slate-400">1.2k</h1>
          <TrendingUp />
        </Card>
      </div>
    </div>
  );
};
