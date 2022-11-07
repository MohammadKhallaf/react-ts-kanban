import React from "react";
import { Helmet } from "react-helmet-async";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="site-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center bg-base-300">
          <Navbar />
          <div className="w-full h-full container overflow-x-scroll my-3">
            {props.children}
          </div>
          <Footer />
        </div>

        <Drawer />
      </div>
    </>
  );
};

export default Layout;
