import React, { useState } from "react";
import {NavLink, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

import "./SideBar.scss";
import { BalanceIcon, DashboardIcon, LogoIcon, PaymentIcon, TransactionIcon, WireIcon, CheckoutIcon, MarketingIcon, AnalyticsIcon, ExchangeIcon, SupportIcon, ArrowLeftIcon } from "../../../shared/icons";

const SideBar = ({ sidebarToggle }) => {
  const location = useLocation()
  return (
    <div
      className={`sidebar-container ${sidebarToggle && "hide-sidebar-mobile"}`}
    > 
    <div className="sidebar-content">   
      <div>
       <LogoIcon/>
       <div className="sub-menu">Main pages</div>
       <div className="menu"><span className="icon"><DashboardIcon active={location.pathname === "/"}/> </span> <NavLink to="/" className="menu-item" activeClassName="active" end>Dashboard</NavLink></div>
       <div className="menu"><span className="icon"><BalanceIcon/> </span>Balances</div>
       <div className="menu"><span className="icon"><TransactionIcon active={location.pathname.includes("/transaction")}/> </span><NavLink to="/transaction" exact className="menu-item" activeClassName="active">Transactions</NavLink></div>
       <div className="menu"><span className="icon"><AnalyticsIcon/> </span>Analytics</div>
       <div className="menu"><span className="icon"><MarketingIcon/> </span>Marketing</div>
       <div className="menu"><span className="icon"><ExchangeIcon/> </span>Exchange rates</div>

       <div className="sub-menu">Accept payments</div>
       <div className="menu"><span className="icon"><CheckoutIcon/> </span>Checkout</div>
       <div className="menu"><span className="icon"><PaymentIcon/> </span>Payment Links</div>

       <div className="sub-menu">Send payments</div>
       <div className="menu"><span className="icon"><WireIcon/> </span>Wire</div>
       </div>
       <div>
       <div className="support"><span className="icon"><SupportIcon/></span> Support</div>
       <div className="hide-panel"><span className="icon"><ArrowLeftIcon/></span> Hide panel</div>
       </div>
    </div>
    </div>
  );
};

SideBar.propTypes = {
  sideBarToggle: PropTypes.bool,
};

export default SideBar;
