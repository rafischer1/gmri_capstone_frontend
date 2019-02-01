import React from 'react';
import MediaQuery from 'react-responsive';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';
const Spinner = require("react-spinkit");

export default class FloodingDatumChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  getCategoryData(category) {
    let result = {}
    let splashCount = 0
    let majCount = 0
    let exCount = 0
    let minorCount = 0
    let modCount = 0
    if (category === null || category === undefined) {
      return <Spinner className="spinner" name="line-scale" color="teal" />
    } else {
      category.map((cat) => {
        if (cat.category === "Splash Over") {
          splashCount++
        } else if (cat.category === "Minor") {
          minorCount++
        } else if (cat.category === "Moderate") {
          modCount++
        } else if (cat.category === "Major") {
          majCount++
        } else if (cat.category === "Extreme") {
          exCount++
        }
        result = {
          "Splash Over": splashCount,
          "Minor": minorCount,
          "Moderate": modCount,
          "Major": majCount,
          "Extreme": exCount
        }
      })
      return result
    }
    
  }

  render() {
    let category = this.props.floodData
    let l = this.getCategoryData(category)

    const categoryData = [{ x: "Splash Over", y: l["Splash Over"] }, { x: "Minor" , y: l.Minor }, { x: "Moderate", y: l.Moderate}, { x: "Major", y: l.Major }, { x: 'Extreme', y: l.Extreme }];

    return <MediaQuery minDeviceWidth={950}>
      {(matches) => {
        if (matches) {
          return <XYPlot className="barChart" xType="ordinal" width={350} height={200}>
            <YAxis style={{ width: "10px", textShadow: "none" }} />
            <XAxis style={{ fontSize: "10px", textShadow: "none" }} />
            <VerticalBarSeries data={categoryData} style={{ stroke: "#576FC9", fill: "#576FC9" }} />
          </XYPlot>;
        } else {
          return <XYPlot className="barChart" xType="ordinal" width={350} height={200}>
            <YAxis style={{ width: "10px", textShadow: "none" }} />
            <XAxis style={{ fontSize: "10px", textShadow: "none" }} />
            <VerticalBarSeries data={categoryData} style={{ stroke: "#576FC9", fill: "#576FC9" }} />
          </XYPlot>
        }
      }}
    </MediaQuery>;
  }
}