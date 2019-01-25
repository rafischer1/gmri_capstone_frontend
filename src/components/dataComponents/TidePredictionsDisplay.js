import React from 'react'
import LineGraphTide from './LineGraphTide';
const Spinner = require("react-spinkit");

const TidePredictionsDisplay = (data) => {

  let tideData = data.water_level_noaa
  let floodingLine = {}
  if (tideData[0] === undefined) {
    return <Spinner className="spinner" name="line-scale" color="teal" />
  } else {
    let count = 1
    const dataArr = tideData.map((day) => {
      count++ 
      floodingLine = {x: count/2, y: +(day.v)}
      return {
        x: count,
        y: +(day.v)
      }
    })

    return <div className="tideChartCss" >
        {/* <span style={onHoverCss}>Tide in Feet (24hrs)</span>
        <XYPlot width={700} height={250} yDomain={[-2, 12]}>
          <XAxis title="Date" hideTicks />
          <YAxis title="Tide FT" tickValues={[-2, 0, 2, 4, 6, 8, 10, 12]} />
          <LineSeries data={floodingLine} style={{ stroke: "#F37B6F", strokeWidth: 2 }} />
          <LineSeries data={dataArr} style={{ stroke: "#19F5CB", strokeWidth: 3 }} curve={"curveMonotoneX"} /> */}
        <LineGraphTide dataArr={dataArr} tideData={tideData} floodingLine={floodingLine}/>
      </div>;
  }
}

export default TidePredictionsDisplay