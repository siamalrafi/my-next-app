import React from "react";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

const admin = () => {
   return (
      <div>
         <h2>admin page</h2>
      </div>
   );
};

export default admin;
admin.getLayout = function getLayout(page) {
   return <DashboardLayout>{page}</DashboardLayout>;
};
