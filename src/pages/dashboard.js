import React from "react";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

const Dashboard = () => {
   return (
      <div>
         <h2>Dashboard</h2>
      </div>
   );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
   return <DashboardLayout>{page}</DashboardLayout>;
};
