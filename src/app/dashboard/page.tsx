// pages/dashboard.tsx
import { DailyAnalaytics } from "@/components/dashboard/_components/daily-analaytics";
import dynamic from "next/dynamic";
import React from "react";

const data = [
  { category: "Politics", count: 20 },
  { category: "Sports", count: 15 },
  { category: "Technology", count: 10 },
  // Add more categories as needed
];

const PieChart = dynamic(
  () => import("@/components/dashboard/_components/pie-chart.component"),
  { ssr: false }
);

const WeeklyVisitorsChart = dynamic(
  () => import("@/components/dashboard/_components/line-chart.compoent"),
  { ssr: false }
);
const weeklyVisitorsData = [
  { week: 'Week 1', visitors: 100 },
  { week: 'Week 2', visitors: 150 },
  // Add more weeks and visitors as needed
];

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-950">Daily Analaytics</h1>
      <DailyAnalaytics />
      <h1 className="text-2xl font-bold text-sky-950 mt-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <PieChart data={data} />
      {/* <WeeklyVisitorsChart data={weeklyVisitorsData}/> */}
      </div>
    </div>
  );
};

export default DashboardPage;
