import React from 'react'
import LineGraphTide from './LineGraphTide';
import { FormatDateApi } from '../function_exports/ConversionFuncs';
const Spinner = require('react-spinkit');


const TidePredictionsDisplay = (data) => {

  let tideData = data.water_level_noaa
  if (tideData[0] === undefined) {
    return <Spinner className="spinner" name="line-scale" color="teal" />
  } else {
    let count = 1
    let datesArr = []
    const dataArr = tideData.map((day) => {
      datesArr.push(FormatDateApi(day.t))
      count++ 
      return {
        x: count,
        y: +(day.v)
      }
    })
  
    return <div className="tideChartCss" >
       <div id="tideChartTitle" style={{color: "white", marginLeft: "20%", fontSize:"24px"}}>Tide Chart for {datesArr[0]} to {datesArr[datesArr.length - 1]}</div>
      <div id="tideChartLegend">
        <span style={{ color: "#19F5CB" }}>tide</span>
        <br />
        <span style={{ color: "#F37B6F" }}>flood line @ 11.8 ft</span>
        <br />
        <span style={{color: "#ffe987"}}>Hover/Click to see tide</span>
      </div>
      <br />
      <br />
        <LineGraphTide dataArr={dataArr} tideData={tideData} datesArr={datesArr}/>
      </div>;
  }
}

export default TidePredictionsDisplay