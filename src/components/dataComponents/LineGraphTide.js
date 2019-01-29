import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  MarkSeries,
  Hint
} from "react-vis"

export default class LineGraphTide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      floodingLine: {x: 0, y: 11.3}
    };
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({ value: {x: this.props.datesArr[value.x - 1], y: `${value.y}ft` }});
  };
  render() {
    let count = 0
      const dataArr = this.props.tideData.map((day) => {
        count++    
        return {
          x: count,
          y: +(day.v)
        }
      })
    const { value } = this.state;
    const lineData = [{ x: 1, y: 11.3 }, { x: 2, y: 11.3 }, { x: 3, y: 11.3 }, { x: 4, y: 11.3 }, { x: 5, y: 11.3 }, { x: 6, y: 11.3 }, { x: 7, y: 11.3 }];
    return <div><XYPlot width={500} height={300} yDomain={[-2, 12]}>
        {/* <XAxis title="Time" ticks={this.props.datesArr.map((day) => day)}/> */}
        <YAxis title="Tide FT" tickValues={[-2, 0, 2, 4, 6, 8, 10, 12]} />
        <LineSeries data={lineData} style={{ stroke: "#F37B6F", strokeWidth: 2 }} />
        <MarkSeries onNearestX={this._rememberValue} data={dataArr} style={{ stroke: "black", strokeWidth: 1 }} />
        <LineSeries onValueMouseOver={this._rememberValue} onValueMouseOut={this._forgetValue} data={dataArr} curve={"curveMonotoneX"} style={{ stroke: "#19F5CB", strokeWidth: 2, fill: "none" }} />
        {value ? <Hint value={value} align={{ vertical: Hint.ALIGN.AUTO }} /> : null}
      </XYPlot>;
      
    </div>
  }
}