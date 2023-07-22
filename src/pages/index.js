import React from "react";
import { Breadcrumb, Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";
import Head from "next/head";

const { Header, Content, Footer } = Layout;

const AppHomePage = () => {
   const {
      token: { colorBgContainer },
   } = theme.useToken();

   return (
      <div>
         <Head>
            <title>Next Home Page</title>
            <meta name="home page" description="this is the home page"></meta>
         </Head>
         <h1>Next Js Home Page.</h1>
      </div>
   );
};

export default AppHomePage;
AppHomePage.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
