import Link from "next/link";
import React from "react";
import { Button, Space } from "antd";

const newsHome = () => {
   return (
      <div>
         <h1>newsHomePage newsHomePage</h1>
         <h1>newsHomePage newsHomePage</h1>
         <h1>newsHomePage newsHomePage</h1>
         <Button type="primary">
            <Link href={"/"}>News</Link>
         </Button>{" "}
      </div>
   );
};

export default newsHome;
