import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes ,Route
} from "react-router-dom";
import './App.scss';
import SideBar from './components/layout/sideBar/SideBar';
import TopNav from './components/layout/topNav/TopNav';
import Dashboard from './pages/dashboard/Dashboard';
import TransactionHistory from './pages/transactions/Transactions';

function App() {
  const [sidebarToggle, setSideBarToggle] = useState(true);
  return (
      <Router>
       <TopNav setSideBarToggle={setSideBarToggle} sidebarToggle={sidebarToggle}/>
       <SideBar sidebarToggle={sidebarToggle}/>
       <section className="router-container">
          <div className="content" onClick={()=>setSideBarToggle(true)}>
            <Routes>
            <Route
                path="/"
                exact={true}
                element={<Dashboard/>}
              />
              <Route
                path="/transaction"
                element={<TransactionHistory/>}
              />
            </Routes>
          </div>
       </section>
       {/* <Dashboard/> */}
       </Router>
  );
}

export default App;
