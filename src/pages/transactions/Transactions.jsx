import React, { useState } from 'react';
import { FilterIcon, PageLeftIcon, PageRightIcon, SearchIcon } from '../../shared/icons';
import Pagination from '../../shared/pagination/Pagination';
import "./Transactions.scss";

const Payload = [
    {
        id: 1,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
     {
        id: 2,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
     {
        id: 3,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
     {
        id: 4,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
     {
        id: 5,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
     {
        id: 6,
        transactionId: "GB124QWERTY12346",
        source: "GTB",
        customerName: "Mike Owen",
        customerEmail: "gm022@gmail.com",
        amount: "$230.00",
        requestDate: "24.08.2021",
        status: "Pending",
     },
]
const TrasactionsHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
       <div className="transactions-container">
           <div className="overview">Transaction history</div>
           <div className="menu-items">
               <div className="search">
                   <span className="icon"><SearchIcon/></span>
                 <input className="search-input" placeholder="Search" />
               </div>
               <div>
                   <button className="btns"><span className="filter">Filter</span> <span className="icon"><FilterIcon/></span></button>
                   <button className="btns">Export</button>
               </div>
           </div>
           <div className="table-content">
               <table id="table">
                   <thead>
                       <tr>
                        <th>Transaction ID</th>
                        <th>Source</th>
                        <th>Customer name</th>
                        <th>Customer email</th>
                        <th>Amount</th>
                        <th>Request date</th>
                        <th>Status</th>
                     </tr>
                   </thead>
                   <tbody>
                     {Payload.map((val)=>(<tr key={val.id}>
                     <td>{val.transactionId}</td>
                     <td>{val.source}</td>
                     <td>{val.customerName}</td>
                     <td>{val.customerEmail}</td>
                     <td>{val.amount}</td>
                     <td>{val.requestDate}</td>
                     <td>{val.status}</td>
                     </tr>))}
                   </tbody> 
               </table>
           </div>
           <Pagination totalPages={10}
                currentPage={currentPage}
                changeCurrentPage={(e)=>setCurrentPage(e)}
                nextBtn={<PageRightIcon/>}
                previousBtn={<PageLeftIcon/>}/>
        </div>
   )
}

export default TrasactionsHistory