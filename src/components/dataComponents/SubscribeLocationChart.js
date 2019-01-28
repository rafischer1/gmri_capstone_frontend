import React from 'react';
import MediaQuery from 'react-responsive'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from "react-vis";

export default class SubscribeLocationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  getLocationData(location) {
    let result = {}
    let capeCount = 0
    let portCount = 0
    let falCount = 0
    let westCount = 0
    let otherCount = 0
    let sopoCount = 0
    location.map((city) => {
      if (city.location === "Portland") {
        portCount++
      } else if (city.location === "Other") {
        otherCount++
      } else if (city.location === "South Portland") {
        sopoCount++
      } else if (city.location === "Falmouth") {
        falCount++
      } else if (city.location === "Westbrook") {
        westCount++
      } else if (city.location === "Cape Elizabeth") {
        capeCount++
      }
      result = {
        "Portland": portCount,
        "Other": otherCount,
        "South Portland": sopoCount,
        "Falmouth": falCount,
        "Westbrook": westCount,
        "Cape Elizabeth": capeCount
      }
    })
    return result
  }
  
  render() {
    let location = this.props.subscribeData
    let locData = this.getLocationData(location)

    const blueData = [{ x: "Portland", y: locData.Portland }, { x: 'South Portland', y: locData["South Portland"] }, { x: "Westbrook", y: locData.Westbrook }, { x: "Falmouth", y: locData.Falmouth }, { x: 'Cape Elizabeth', y: locData["Cape Elizabeth"] }, {x: "Other", y:locData.Other}];
    return <MediaQuery minDeviceWidth={950}>
        {(matches) => {
          if (matches) {
            return <XYPlot className="barChart" xType="ordinal" width={400} height={150}>
                <YAxis style={{ width: "11px", textShadow: "none" }} />
                <XAxis style={{ fontSize: "11px", marginRight: "5%", textShadow: "none" }} />
                <VerticalBarSeries data={blueData} style={{ stroke: "#DE6262", fill: "#DE6262" }} />
              </XYPlot>;
          } else {
            return <XYPlot className="barChart" xType="ordinal" width={600} height={250}>
              <YAxis style={{ width: "15px", textShadow: "none" }} />
              <XAxis style={{ fontSize: "13px", marginRight: "20%", textShadow: "none" }} />
              <VerticalBarSeries data={blueData} style={{ stroke: "#DE6262", fill: "#DE6262" }} />
            </XYPlot>
          }
        }}
      </MediaQuery>
  }
}