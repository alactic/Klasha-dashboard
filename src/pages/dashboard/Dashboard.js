import React from 'react';
import { ArrowDownIcon, DownloadIcon, LastMonthChartIcon, MonthChartIcon, WeekChartIcon } from '../../shared/icons';
import './Dashboard.scss';

const Dashboard = () =>{
    return (
       <div className="dashboard-container">
          <div className="dashboard-content">
             <div className="overview">Sales overview</div>
             <div className="card-content">
                <div className="card">
                   <div className="today-title">Today's sales</div>
                   <div className="today-sales">₦1,652.50</div>
                </div>
                <div className="active-card">
                   <div className="chart-title">24 Aug - 01 Sep 21</div>
                   <WeekChartIcon/>
                   <div className="chart-date">
                      <div className="period">This week</div>
                      <div className="chart-sales">₦1,652.50</div>
                   </div>
                </div>

                <div className="card">
                   <div className="chart-title">24 Aug - 01 Sep 21</div>
                   <MonthChartIcon/>
                   <div className="chart-date">
                      <div className="period">This week</div>
                      <div className="chart-sales">₦1,652.50</div>
                   </div>
                </div>

                <div className="card">
                   <div className="chart-title">24 Aug - 01 Sep 21</div>
                   <LastMonthChartIcon/>
                   <div className="chart-date">
                      <div className="period">This week</div>
                      <div className="chart-sales">₦1,652.50</div>
                   </div>
                </div>
             </div>
       
            <div className="sales-content">
               <span className="sale">Sales</span>
               <span className="seven-days">7 days</span>
               <span className="thirty-days">30 days</span>
               <span className="currency">USD <span className="icon"><ArrowDownIcon width="8px"/></span></span>
               <span className="email">Email <ArrowDownIcon/></span>
               <span className="report"><span className="icon"><DownloadIcon/></span>Download report</span>
            </div>
            <div className="graph-content">
                 <div className="graph">&nbsp;</div>
                 <div className="desc-send">
                    <div className="desc">KlashaWire - send money to businesses globally from Africa</div>
                    <button className="send">Send a Wire</button>
                 </div>
            </div>
         </div>
       </div>
    )
}

export default Dashboard;