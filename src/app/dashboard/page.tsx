// pages/dashboard.tsx
import { DailyAnalaytics } from "@/components/dashboard/_components/daily-analaytics";
import { DashBoardNewsComponet } from "@/components/dashboard/_components/recent-news-table.compoent";
import { Card } from "@/components/ui/card";
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
const NewsUploadChart = dynamic(
  () => import("@/components/dashboard/_components/bar-chart.compoent"),
  { ssr: false }
);
const weeklyVisitorsData = [
  { week: "Week 1", visitors: 100 },
  { week: "Week 2", visitors: 150 },
  { week: "Week 3", visitors: 350 },
  { week: "Week 5", visitors: 1450 },
  // Add more weeks and visitors as needed
];
const monthlyData = [
  { month: 'January', uploads: 20 },
  { month: 'February', uploads: 35 },
  { month: 'March', uploads: 25 },
  { month: 'April', uploads: 40 },
  { month: 'May', uploads: 30 },
  { month: 'June', uploads: 45 },
  { month: 'July', uploads: 50 },
  { month: 'August', uploads: 55 },
  { month: 'September', uploads: 40 },
  { month: 'October', uploads: 35 },
  { month: 'November', uploads: 30 },
  { month: 'December', uploads: 25 }
];
const DashboardPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold ">Dashboard</h1>
      <DailyAnalaytics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <Card className="p-4">
          <h1 className="text-xl font-semibold">News Distriubutions</h1>
          <PieChart data={data} />
        </Card>
        <Card className="p-4">
          <h1 className="text-xl font-semibold">Visitors</h1>
          <WeeklyVisitorsChart data={weeklyVisitorsData} />
        </Card>
        <Card className="p-4">
          <h1 className="text-xl font-semibold">Recent News</h1>
          <DashBoardNewsComponet />
        </Card>
        <Card className="p-4">
          <h1 className="text-xl font-semibold">News Uplaod</h1>
          <NewsUploadChart monthlyData={monthlyData} />

        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
