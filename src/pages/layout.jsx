import React from "react";
import SideBarHost from "./SideBarHost";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper">
      <div className="hostSideBar">
        <SideBarHost />
      </div>
      <div className="outletSec">
        <Outlet />
      </div>
    </div>
  );
}
