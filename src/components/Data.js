import React from 'react';
import WaterTempDisplay from "./dataComponents/WaterTempDisplay";
import TidePredictionsDisplay from "./dataComponents/TidePredictionsDisplay";
var Spinner = require("react-spinkit");

const Data = ({weatherApi, water_level_noaa, water_temp_noaa}) => {
    // console.log("data cmp:", water_level_noaa, currentTime, todaysDate)
     let showData = false
    if (water_level_noaa) {
      showData = true;
    } else {
      showData = false
    }

   let predictions = water_level_noaa
   let nextHigh = 0
   predictions.map((day) => {
     // "2019-01-12 02:58"
     let tideTimeOfDay = day.t.split(' ')[1]
      // console.log("days:", day, "currentTime:", currentTime)
      if (day.type === 'H') {
        nextHigh = militaryToStandardTime(tideTimeOfDay)
      }

   })
    
    
  return <div className="dataPage">
  <div>
          {showData ? <div><div>Air Temp: <span>{weatherApi.air_temp}</span>F</div>
           <div>Water Temp: <span>{weatherApi.water_temp}</span>F</div>
           <div>Sea Level: <span>{weatherApi.water_level}</span>Ft</div>
          <div>Next High Tide: <span>{nextHigh}</span> </div>
          <WaterTempDisplay water_temp_noaa={water_temp_noaa}/>
        <TidePredictionsDisplay water_level_noaa={water_level_noaa}/></div>
           : <Spinner name="line-scale" color="grey" />}
          </div>
          <div className="predictionsChart">{}</div>
          
    </div>
}

const militaryToStandardTime = (militaryTime) => {
  let tmp = +(militaryTime.split(":")[0])
  let minutes = militaryTime.split(":")[1]

  if (tmp >= 12) {
      if (tmp === 13) {
      tmp = 1;
    } else if (tmp === 14) {
      tmp = 2;
    } else if (tmp === 15) {
      tmp = 3;
    } else if (tmp === 16) {
      tmp = 4;
    } else if (tmp === 17) {
      tmp = 5;
    } else if (tmp === 18) {
      tmp = 6;
    } else if (tmp === 19) {
      tmp = 7;
    } else if (tmp === 20) {
      tmp = 8;
    } else if (tmp === 21) {
      tmp = 9;
    } else if (tmp === 22) {
      tmp = 10;
    } else if (tmp === 23) {
      tmp = 11;
    } 
    return `${tmp}:${minutes}PM`
  
  }
   else if (tmp === 24) {
    return `12:${minutes}AM`
  } else {
    return `${tmp}:${minutes}AM`
  } 
}




export default Data
