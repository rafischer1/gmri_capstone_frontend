import React from 'react';
import MediaQuery from 'react-responsive';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

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
    let l = this.getLocationData(location)

    const locationData = [{ x: "Portland", y: l.Portland }, { x: 'South Portland', y: l["South Portland"] }, { x: "Westbrook", y: l.Westbrook }, { x: "Falmouth", y: l.Falmouth }, { x: 'Cape Elizabeth', y: l["Cape Elizabeth"] }, {x: "Other", y:l.Other}];

    return <MediaQuery minDeviceWidth={950}>
        {(matches) => {
          if (matches) {
            return <XYPlot className="barChart" xType="ordinal" width={550} height={200}>
                <YAxis style={{ width: "11px", textShadow: "none" }} />
                <XAxis style={{ fontSize: "12px", marginRight: "5%", textShadow: "none" }} />
                <VerticalBarSeries data={locationData} style={{ stroke: "#DE6262", fill: "#DE6262" }} />
              </XYPlot>;
          } else {
            return <XYPlot className="barChart" xType="ordinal" width={600} height={250}>
              <YAxis style={{ width: "15px", textShadow: "none" }} />
              <XAxis style={{ fontSize: "18px", marginRight: "20%", textShadow: "none" }} />
              <VerticalBarSeries data={locationData} style={{ stroke: "#DE6262", fill: "#DE6262" }} />
            </XYPlot>
          }
        }}
      </MediaQuery>;
  }
}