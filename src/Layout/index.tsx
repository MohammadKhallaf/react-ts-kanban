import React from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="site-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {props.children}
          <Navbar />
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default Layout;
