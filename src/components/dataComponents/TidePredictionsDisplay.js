import React from 'react'
import LineGraphTide from './LineGraphTide';
import {Row, Col} from 'react-materialize'
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
  
    return (
      <div>
        <div
          id="tideChartTitle"
          style={{ color: "white", marginLeft: "20%", fontSize: "24px" }}
        >
          Tide Chart for <br />{datesArr[0]} to {datesArr[datesArr.length - 1]}
        </div>
        <div className="tideChartCss">
          <Row>
            <Col className="s12 tideGraph">
              <LineGraphTide
                dataArr={dataArr}
                tideData={tideData}
                datesArr={datesArr}
              />
            </Col>
          </Row>
          <Row>
            <Col className="s6">
              <div id="tideChartLegend">
                <span style={{ color: "#7C97FB" }}>Tide Prediction</span>
                <br />
                <span style={{ color: "#FBE07C" }}>
                  Hover/Click to see tide
                </span>
                <br />
                <span style={{ color: "#F37B6F" }}>
                  Flood Line @ 11.8 ft
                </span>
              </div>
              <br />
            </Col>
            <Col className="s6">
              <div id="floodCatLegend">
                <h5>Flooding Categories</h5>

                <br />
                <div style={{ color: "#7C97FB  " }}>
                  "Splash over": 11.8+ft with 10-15mph winds
                </div>
                <br />
                <div style={{ color: "#7C97FB  " }}>
                  Minor: 11.5+ft with 15-20mph winds & steady rain
                </div>
                <br />
                <div style={{ color: "#FBE07C" }}>
                  Moderate: 11.5+ft with 20-25mph winds & prolonged rain
                </div>
                <br />
                <div style={{ color: "#FBE07C" }}>
                  Major: 11.3+ft with 25-35mph winds & heavy rain
                </div>
                <br />
                <div style={{ color: "#F37B6F" }}>
                  Extreme: 11.3+ft with 30+mph winds &heavy prolonged rain
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TidePredictionsDisplay