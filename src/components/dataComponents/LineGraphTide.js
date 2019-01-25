import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  MarkSeries,
  Hint
} from "react-vis"

export default class LineGraphTide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({ value });
  };
  render() {
    const hintArr = this.props.tideData.map((day) => {
      return {
        x: day.t,
        y: +(day.v)
      }
    })
    let count = 1
      const dataArr = this.props.tideData.map((day) => {
        
        count++
        return {
          x: count,
          y: +(day.v)
        }
      })
    const { value } = this.state;
    return <XYPlot width={500} height={300} yDomain={[-2, 12]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis title="Tide FT" tickValues={[-2, 0, 2, 4, 6, 8, 10, 12]} />
      {/* <LineSeries data={{ x: dataArr.x, y: [-2, 0, 2, 4, 6, 8, 10, 12] }} style={{ stroke: "#F37B6F", strokeWidth: 2 }} /> */}
        <MarkSeries onNearestX={this._rememberValue} data={dataArr} style={{ stroke: "black", strokeWidth: 1 }} />
        <LineSeries onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue} data={dataArr} curve={"curveMonotoneX"} style={{ stroke: "#19F5CB", strokeWidth: 2, fill: "none" }} />
        {value ? <Hint value={value} align={{ vertical: Hint.ALIGN.AUTO }} style={{ background: "white", margin: "0", borderRadius: "10px", padding: "1%" }} /> : null}
      </XYPlot>;
  }
}