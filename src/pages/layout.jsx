import React from "react";
import SideBarHost from "./sideBarHost";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper">
      <div className="hostSideBar">
        <SideBarHost />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
