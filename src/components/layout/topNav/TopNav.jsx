import React from "react";
import PropTypes from "prop-types";
import "./TopNav.scss";
import ArrowDownIcon from "../../../shared/icons/arrowDown"
import DPIcon from "../../../shared/icons/dp"
import ToggleIcon from "../../../shared/icons/toggle-icon"

const TopNav = ({ setSideBarToggle, sidebarToggle }) => {
  return (
    <header className="topnav-container">
      <div className="topnav-content">
        <div className="toggle" onClick={()=>setSideBarToggle(!sidebarToggle)}>
          <ToggleIcon/>
        </div>
        <div className="items">
          <div className="dp">
            <span className="dp-icon"><DPIcon /></span>
            <ArrowDownIcon/>
          </div>
          <div className="en">
            <span  className="lang">En</span>
            <ArrowDownIcon/>
          </div>
        </div>
      </div>
    </header>
  );
};
TopNav.propTypes = {
  setSideBarToggle: PropTypes.func,
  sideBarToggle: PropTypes.bool,
};

export default TopNav;
