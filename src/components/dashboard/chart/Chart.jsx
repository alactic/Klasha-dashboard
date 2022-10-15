import React, { useEffect, useState } from 'react';
import "./Chart.css";

const Chart = () => {
    const [selected, setSelected] = useState(3)
    
    const toggleDataSeries = (e) => {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    } 

    useEffect(() => {
        if(new CanvasJS.Chart){
        var chart = new CanvasJS.Chart("chartContainer", {
            theme:"light2",
            animationEnabled: true,
            title:{
                text: ""
            },
            axisY :{
                title: "",
                suffix: ""
            },
            toolTip: {
                shared: "true"
            },
            legend:{
                cursor:"pointer",
                itemclick : toggleDataSeries
            },
            data: [
            {
                type: "spline", 
                showInLegend: true,
                yValueFormatString: "##",
                name: "",
                dataPoints: [
                    { label: "Jan", y: 90 },
                    { label: "Feb", y: 190 },
                    { label: "Mar", y: 300 },
                    { label: "Apr", y: 220 },
                    { label: "May", y: 350 },
                    { label: "Jun", y: 100 },
                    { label: "Jul", y: 220 },
                    { label: "Aug", y: 340 },
                    { label: "Sept", y: 380 },
                    { label: "Oct", y: 200 }
                ]
            },
            {
                type: "spline", 
                showInLegend: true,
                yValueFormatString: "##",
                name: "",
                dataPoints: [
                    { label: "Jan", y: 290 },
                    { label: "Feb", y: 290 },
                    { label: "Mar", y: 300 },
                    { label: "Mar", y: 320 },
                    { label: "Apr", y: 150 },
                    { label: "May", y: 200 },
                    { label: "Jun", y: 320 },
                    { label: "Aug", y: 300 },
                    { label: "Sept", y: 80 },
                    { label: "Oct", y: 400 }
                ]
            },
            ]
        });
        chart.render();
    }
    }, [])
   return (
       <div className="chart-container">
           <div className="task-down-title">
              <div className="task-down">Task Done</div>
              <div className="freq-items">
                  <div className={`freq ${selected === 1 && 'active'}`} onClick={()=>setSelected(1)}>Daily</div>
                  <div className={`freq ${selected === 2 && 'active'}`} onClick={()=>setSelected(2)}>Weekly</div>
                  <div className={`freq ${selected === 3 && 'active'}`} onClick={()=>setSelected(3)}>Monthly</div>
              </div>
           </div>
           <div id="chartContainer" style={{height: "300px", width: "100%"}}></div>
       </div>
   )
}

export default Chart