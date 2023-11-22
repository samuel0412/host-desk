import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  hostBusinessInfoIcon,
  hostDashboardIcon,
  hostDownArrowIcon,
  hostImgAvatar,
} from "../assets/images";
import { LogOut } from "../Redux/Actions/AuthActions";

export default function SideBarHost() {
  const dispatch = useDispatch();
  const [toggleSubmenuHost, setToggleSubmenuHost] = useState(false);
  const toggleMenu = () => {
    setToggleSubmenuHost(!toggleSubmenuHost);
  };
  const logOutHandler = () => {
    dispatch(LogOut());
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
                  <NavLink to="/business-details">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Business details</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/opening-hours">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Opening Hours</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/payment-info">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Payment Info</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team-members">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Team Members</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/customer-list">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Customer List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reservation">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Reservations List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms-conditions">
                    <span>
                      <img src={hostBusinessInfoIcon} alt="" />
                    </span>
                    <span>Terms & Conditions</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          ) : (
            ""
          )}
          <li className="d-flex gap-2" onClick={logOutHandler}>
            <span className="hostMenuIcon">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
            <span className="logOutbtn">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
