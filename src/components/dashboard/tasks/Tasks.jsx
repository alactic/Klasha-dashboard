import React, { useState } from 'react';
import { Ellipsis, SelectArrowDown } from '../../../shared/icons';
import "./Tasks.css";

const Payload = [
    {
        id: 1,
        name: "User journey of the project",
        startDate: "Jan 1, 2022",
        endDate: "Jan 31, 2022",
        hour: 80,
        progress: "60% complete",
    },
    {
        id: 2,
        name: "Wireframing the project",
        startDate: "Feb 1, 2022",
        endDate: "Feb 28, 2022",
        hour: 80,
        progress: "60% complete",
    },
    {
        id: 3,
        name: "User interface design",
        startDate: "March 1, 2022",
        endDate: "March 31, 2022",
        hour: 80,
        progress: "60% complete",
    },
]
const Tasks = () => {
    const [showOption, setShowOption] = useState(false);
    const [value, setValue] = useState("Last day");
    const [showMore, setShowMore] = useState(false);
    const [id, setId] = useState(null);

   return (
       <div className="tasks-container">
           <div className="task-title">
              <div className="task">Task Done</div>
              <div className="select-option">
                  <div className="select-value" onClick={()=>setShowOption(!showOption)}>{value} <SelectArrowDown/></div>
                  {showOption && <div className="options">
                    {["Last day", "Last 7 days", "Last 30 days", "Last quarter", "Last year"].map((val, i)=>(<div key={i} className="select-items" onClick={()=>setValue(val)}><div className={`select-icon ${value === val && 'select-icon-active'}`}></div><div className={`option-item ${value === val && 'option-active'}`}>{val}</div></div>))}
                  </div>}
              </div>
           </div>
           <div className="table-content">
               <table id="table">
                   <thead>
                       <tr>
                        <th>Name Of Task</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Hours</th>
                        <th>Progress</th>
                        <th></th>
                    </tr>
                   </thead>
                   <tbody>
                     {Payload.map((val)=>(<tr key={val.id}>
                     <td>{val.name}</td>
                     <td>{val.startDate}</td>
                     <td>{val.endDate}</td>
                     <td>{val.hour}</td>
                     <td>
                        <div className="progress">{val.progress}</div>
                        <progress id="file" value="60" max="100"/>
                     </td>
                     <td>
                         <div className='more-option'>
                             <span className="ellipsis" onClick={()=>{setShowMore(!showMore); setId(val.id)}}><Ellipsis/></span>
                             {showMore && id===val.id  && <div className="more">
                                 <div className="item">Complete</div>
                                 <div className="item">Edit</div>
                                 <div className="item">Delete</div>
                             </div>}
                         </div>
                     </td>
                     </tr>))}
                   </tbody> 
               </table>
           </div>
       </div>
   )
}

export default Tasks