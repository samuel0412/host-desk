import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  hostBusinessInfoIcon,
  hostDashboardIcon,
  hostDownArrowIcon,
  hostImgAvatar,
} from "../images";

export default function SideBarHost() {
  const [toggleSubmenuHost, setToggleSubmenuHost] = useState(false);
  const toggleMenu = () => {
    setToggleSubmenuHost(!toggleSubmenuHost);
  };
  return (
    <div className="mainSecSidebar">
      <div className="profileSec gap-4">
        <div className="">
          <img src={hostImgAvatar} alt="host avtar" />
        </div>
        <div className="hostNameSec">
          <p className="">Hi</p>
          <p className="hostName">Rachel Smith</p>
        </div>
      </div>
      <div className="sidebarLinkSec">
        <ul>
          <li className="d-flex gap-2">
            <span className="hostMenuIcon">
              <img src={hostDashboardIcon} alt="hostDashBoardicon" />
            </span>
            <span className="">
              <Link to="/">Dashboard</Link>
            </span>
          </li>
          <li className="d-flex gap-2" onClick={toggleMenu}>
            <span className="hostMenuIcon">
              <img src={hostBusinessInfoIcon} alt="hostDashBoardicon" />
            </span>
            <span>
              <Link to="/business-details">Business Information</Link>
            </span>
            <span>
              <img src={hostDownArrowIcon} alt="" />
            </span>
          </li>
          {toggleSubmenuHost === true ? (
            <li className="subMenuHost" id="subMenuHost">
              <ul className="subMenuHostSec">
                <li>
                  <span>
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>
                  <span>Business details</span>
                </li>
                <li>
                  <span>
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Opening Hours</span>
                </li>
                <li>
                  <span>
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Payment Info</span>
                </li>
                <li>
                  <span>
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Team Members</span>
                </li>
                <li>
                  <span>
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Customer List</span>
                </li>
                <li>
                  <span>
                    {" "}
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Reservations List</span>
                </li>
                <li>
                  <span>
                    {" "}
                    <img src={hostBusinessInfoIcon} alt="" />
                  </span>

                  <span>Terms & Conditions</span>
                </li>
              </ul>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}
