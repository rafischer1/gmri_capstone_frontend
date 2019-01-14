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
/***
 *  Water temp data object: {t: "2019-01-13 00:00", v: "36.9", f: "0,0,0"}
 * 
 * 
 */

 const waterTempChart = {
   backgroundColor: 'black',
   width: '700px',
   marginTop: '2%',
   borderBottom: '2px solid white',
    // marginLeft: '25%'
}

const WaterTempDataDisplay = (data) => {
  let waterTempData = data.water_temp_noaa
  console.log("water temp cmp:", waterTempData[0]);
  if (waterTempData[0] === undefined) {
    return <Spinner name="line-scale" color="teal" />;
  } else {
      let count = 1
      const dataArr = waterTempData.map((day) => {
          count++
          return {
            x: count,
            y: +(day.v)
          }  
    
      })
    
    return <div style={waterTempChart}>
        <span>Water Temp F</span>
      <XYPlot width={700} height={200} yDomain={[32, 45]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Day" className="xaxis"/>
          <YAxis title="Water Temp F" />
        <LineSeries data={dataArr} style={{ stroke: "#19F5CB", strokeWidth: 2 }} curve={"curveMonotoneX"} />
        </XYPlot>
      </div>;
  }
}

export default WaterTempDataDisplay