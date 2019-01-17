import React from 'react'

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
const Spinner = require("react-spinkit");

/**
 * 
 * Component below here
 * 
 */
const TidePredictionsDisplay = (data) => {
  
  const tideChart = { 
    backgroundColor: "rgba(0, 0, 0, 0.034)", 
    width: "700px", 
    marginTop: "2%", 
    borderBottom: "2px solid white" 
};

  let tideData = data.water_level_noaa
  console.log("tidal", tideData)
  if (tideData[0] === undefined) {
    return <Spinner name="line-scale" color="teal" />
  } else {
    let count = 1
    const dataArr = tideData.map((day) => {
      count++
      return {
        x: count,
        y: +(day.v)
      }
    })

    const floodingLine = tideData.map((day) => {
      count++
      return {
        // needs to cover entire chart not just half the amount of x
        x: (count/2),
        y: 11.8
      }
    })

    return <div style={tideChart}>
        <span>Tide (24hrs)</span>
        <XYPlot width={700} height={250} onMouseLeave={onMouseLeave} yDomain={[-2, 12]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Date" />
          <YAxis title="Tide FT"  tickValues={[-2, 0,  2, 4, 6, 8, 10, 12]} />
          <LineSeries data={floodingLine} style={{ stroke: "#F37B6F", strokeWidth: 1 }} />
          <LineSeries data={dataArr} style={{ stroke: "#19F5CB", strokeWidth: 2 }} curve={"curveMonotoneX"} animation />
        </XYPlot>
      </div>;
  }
}


const onMouseLeave = () => {
    console.log("mouse over")
}


export default TidePredictionsDisplay