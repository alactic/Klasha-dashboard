import React, { useEffect } from 'react';
import "./Chart.scss";

const Chart = () => {

    useEffect(() => {
        if(new CanvasJS.Chart){
            let chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: ""
                },
                axisX: {
                    minimum: new Date("2015-01-25"),
                    maximum: new Date("2017-02-15"),
                    valueFormatString: "MMM YY"
                },
                axisY: {
                    title: "",
                    titleFontColor: "#4F81BC",
                    includeZero: true,
                    suffix: ""
                },
                data: [{
                    indexLabelFontColor: "darkSlateGray",
                    name: "views",
                    type: "area",
                    yValueFormatString: "#,##0.0",
                    dataPoints: [
                        { x: new Date("2015-02-1"), y: 7200, label: "Q1-2015" },
                        { x: new Date("2015-05-1"), y: 6000, label: "Q2-2015" },
                        { x: new Date("2015-08-1"), y: 5000, label: "Q3-2015" },
                        { x: new Date("2015-11-1"), y: 7000, label: "Q4-2015" },
                        { x: new Date("2016-02-1"), y: 1000, label: "Q1-2016" },
                        { x: new Date("2016-05-1"), y: 5000, label: "Q2-2016" },
                        { x: new Date("2016-08-1"), y: 4000, label: "Q3-2016" },
                        { x: new Date("2016-11-1"), y: 4000, label: "Q4-2016" },
                        { x: new Date("2017-02-1"), y: 7800, label: "Q1-2017", indexLabel: "Highest", markerColor: "red" }
                    ]
                }]
            });
            chart.render();
            
    }
    }, [])
   return (
       <div className="chart-container">
           
           <div id="chartContainer" style={{height: "300px", width: "100%"}}></div>
       </div>
   )
}

export default Chart