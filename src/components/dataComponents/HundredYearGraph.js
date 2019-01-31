import React from 'react';

import {HundredYearData} from '../function_exports/hundredYearData'
import {
  XYPlot,
  YAxis,
  LineSeries,
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
   
    return <div className="hundredYearChart">
    Top: Highest record water level per month from Jan 1912 to Jan 2019<br/>
    Bottom: Meah High Water per month from Jan 1912 to Jan 2019
    <br />
    <XYPlot width={950} height={350} yDomain={[8, 16]}>
      <YAxis style={{ color: "white" }} title="Tide FT" tickValues={[8, 10, 12, 14]} />
      <LineSeries data={dataArr} style={{ stroke: "#7C97FB  ", strokeWidth: 3, fill: "#7C97FB" }} />
      <LineSeries data={highestArr} style={{ stroke: "#F37B6F  ", strokeWidth: 2, fill: "none" }} />
    </XYPlot>
    </div>;
  }
}