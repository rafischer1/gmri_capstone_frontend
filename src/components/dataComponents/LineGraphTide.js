import React from 'react';
import {
  XYPlot,
  YAxis,
  LineSeries,
  MarkSeries,
  Hint
} from "react-vis"


export default class LineGraphTide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { 'Date': Date, 'Feet': 0.0 },
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({ value: {'Date': this.props.datesArr[value.x - 1], 'Feet': value.y.toFixed(2) }});
  };
  render() {

    let count = 0
    const mockTideArray = [{ t: "2019-02-02 03:16", v: "0.967", type: "L" }, { t: "2019-02-02 09:29", v: "11.607", type: "H" }, { t: "2019-02-02 15:56", v: "-0.045", type: "L" }, { t: "2019-02-02 22:06", v: "11.874", type: "H" }, { t: "2019-02-03 04:00", v: "0.861", type: "L" }, { t: "2019-02-03 10:12", v: "12.1", type: "H" }, { t: "2019-02-03 16:37", v: "-0.117", type: "L" }, { t: "2019-02-03 22:48", v: "11.379", type: "H" } ]
    // console.log(this.props.tideData)

    const dataArr = mockTideArray.map((day) => {
      count++
      return {
        x: count,
        y: +(day.v)
      }
    })
    // For mocking a flooding event:
      // const dataArr = this.props.tideData.map((day) => {
      //   count++    
      //   return {
      //     x: count,
      //     y: +(day.v)
      //   }
      // })
    const { value } = this.state;

    const lineData = [{ x: 1, y: 11.8 }, { x: 2, y: 11.8 }, { x: 3, y: 11.8 }, { x: 4, y: 11.8 }, { x: 5, y: 11.8 }, { x: 6, y: 11.8 }, { x: 7, y: 11.8 }];

    return <div className="tideChartMedia"><XYPlot 
      width={550} height={350} yDomain={[-2, 12]}>
        <YAxis style={{color: "white"}} title="Tide FT" tickValues={[-2, 0, 2, 4, 6, 8, 10, 12]} />
        <LineSeries data={lineData} style={{ stroke: "#F37B6F", strokeWidth: 2 }} />
  
        <MarkSeries onNearestX={this._rememberValue} data={dataArr} style={{ stroke: "black", strokeWidth: 1 }} />
        <LineSeries onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue} data={dataArr} curve={"curveMonotoneX"} style={{ stroke: "#7C97FB  ", strokeWidth: 2, fill: "none" }} />
        <Hint value={value} align={{ vertical: Hint.ALIGN.AUTO }} /> 
      </XYPlot>
    </div>;
  }
}