import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
   const router = useRouter();
   setTimeout(() => {
      router.push("/news");
   }, 3000);

   return (
      <div>
         <img src="https://w7.pngwing.com/pngs/336/743/png-transparent-error-404-404-error.png" alt="Description of the image" width="100%" />
      </div>
   );
};

export default ErrorPage;
