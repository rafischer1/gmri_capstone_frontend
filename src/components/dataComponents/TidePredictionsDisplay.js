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

const TidePredictionsDisplay = (data) => {
  
  const tideChart = { backgroundColor: "rgba(0, 0, 0, 0.034)", 
  width: "700px", 
  marginTop: "2%", 
  borderBottom: "2px solid white" };
    // marginLeft: '25%'

  let tideData = data.water_level_noaa
  if (tideData[0] === undefined) {
    return <Spinner name="line-scale" color="teal" />
  } else {
    let count = 1
    const dataArr = tideData.map((day) => {
      console.log("tide day:", day)
      count++
      
      return {
        x: count,
        y: +(day.v)
      }

    })

    return <div style={tideChart}>
      <span>Tide (12hrs)</span>
        <XYPlot width={700} height={200}>
        
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Hour" />
          <YAxis title="Tide FT" />
        
        <LineSeries data={dataArr} style={{ stroke: "#19F5CB", strokeWidth: 2 }} curve={"curveMonotoneX"} animation />
        </XYPlot>
      </div>;
  }
}

export default TidePredictionsDisplay