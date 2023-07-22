import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";

const about = () => {
   return (
      <div>
         <h1>about page</h1>
         <h1>about page</h1>
         <h1>about page</h1>
      </div>
   );
};

export default about;
about.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
