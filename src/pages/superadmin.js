import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

const superAdmin = () => {
   return (
      <div>
         <h1>superAdmin</h1>
         <h1>superAdmin</h1>
         <h1>superAdmin</h1>
      </div>
   );
};

export default superAdmin;

superAdmin.getLayout = function getLayout(page) {
   return (
      <RootLayout>
         <DashboardLayout>{page}</DashboardLayout>
      </RootLayout>
   );
};
