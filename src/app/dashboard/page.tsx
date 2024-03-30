// pages/dashboard.tsx

import { AdminProfile } from "@/components/dashboard/admin-profile.compoent";
import { Card, CardTitle } from "@/components/ui/card";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="grid grid-flow-col-3">
      <div>
        <Card className="">
          <CardTitle>Daily Visitors</CardTitle>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
