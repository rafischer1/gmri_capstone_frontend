import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines, LineSeries
} from "react-vis";

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
    return 'wait'
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
        <XYPlot width={700} height={200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Day" />
          <YAxis title="Water Temp F" />
          <LineSeries data={dataArr} style={{ stroke: "#19F5CB", strokeWidth: 2 }} curve={"curveMonotoneX"} />
        </XYPlot>
      </div>;
  }
}

export default WaterTempDataDisplay