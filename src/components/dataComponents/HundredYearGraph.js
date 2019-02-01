import React from 'react';
// import { Motion, spring, damping } from 'react-motion';

import {HundredYearData} from '../function_exports/hundredYearData'
import {
  XYPlot,
  YAxis,
  LineSeries,Hint
} from "react-vis"


export default class HundredYearGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
  console.log(HundredYearData[0])
  let dataArr = HundredYearData.map((year) => {
     return {
       x: +(year.Year),
       y: +(year.MHW)
     }
   })
 
   let highestArr = HundredYearData.map((year) => {
     if (year.Highest === null) {
       year.Highest = 11
     }
     return {
       x: +(year.Year),
       y: +(year.Highest)
     }
   })

  
    return (
      <div className="hundredYearChart">
        <br />
        <XYPlot width={950} height={350} yDomain={[8, 16]}>
          <YAxis
            style={{ color: "white" }}
            title="Tide FT"
            tickValues={[8, 10, 12, 14]}
          />
          <LineSeries
            data={dataArr}
            style={{ stroke: "#7C97FB  ", strokeWidth: 3, fill: "#7C97FB" }}
          />
          <LineSeries
            data={highestArr}
            style={{ stroke: "#F37B6F  ", strokeWidth: 2, fill: "none" }}
          />
        </XYPlot>
        <div className="hundredYearHeading">
          <h5>
            January 1912 to January 2019
            <br />
            <span style={{ color: "#F37B6F" }}>
              Top: Highest recorded water level per month (107 years)
            </span>
            <br />
            <span style={{ color: "#7C97FB" }}>
              Bottom: Mean High Water per month (107 years)
            </span>
          </h5>
        </div>
      </div>
    );
  }
}