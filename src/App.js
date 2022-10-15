import { useState } from 'react';
import './App.scss';
import SideBar from './components/layout/sideBar/SideBar';
import TopNav from './components/layout/topNav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';
import TransactionHistory from './pages/transactions/Transactions';

function App() {
  const [sidebarToggle, setSideBarToggle] = useState(false);
  return (
    <div>
       <TopNav setSideBarToggle={setSideBarToggle} sidebarToggle={sidebarToggle}/>
       <SideBar sidebarToggle={sidebarToggle}/>
       <div className="router-container">
          <div className="content">
             <TransactionHistory/>
          </div>
       </div>
       {/* <Dashboard/> */}
    </div>
  );
}

export default App;
