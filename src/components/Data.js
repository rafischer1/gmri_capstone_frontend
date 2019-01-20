import React from 'react';

const Spinner = require("react-spinkit");

const Data = ({wind_speed, wind_card, air_temp, water_level, water_level_noaa, water_temp_noaa, currentTime}) => {
     let showData = false
    if (water_level_noaa) {
      showData = true;
    } else {
      showData = false
    }

  let predictions = water_level_noaa
  let nextHigh = 0
  let currentTemp
  let tmpArrTime = []
  let tmpArrFt = []

  if (water_temp_noaa[0] === undefined) {
    return <Spinner class="spinner" name="line-scale" color="teal" />
  } else { 
    currentTemp = water_temp_noaa[water_temp_noaa.length - 1].v
  }

   predictions.filter((day) => {
     // "2019-01-12 02:58"
     console.log("Current time data:", currentTime)
     let tideTimeOfDay = day.t.split(' ')[1]
     let tmpTime = currentTime.split(":")[0]
     if (day.type === "H" && tideTimeOfDay.split(":")[0] >= tmpTime - 6) {
       tmpArrFt.push(day.v)
       nextHigh = militaryToStandardTime(tideTimeOfDay);
       tmpArrTime.push(nextHigh)
       return tmpArrTime[0];
     }
   })

   const infoStyle = { 
     backgroundColor: "rgba(49, 49, 49, 0.723)", 
     opacity: "1", 
     color: "white",
     padding: "2%",
     textAlign: "center",
     width: "50%",
     marginLeft: "25%"
    };
    
    
  return <div className="dataPage">
  
    {showData ? <div style={infoStyle}>
      
            <div>CURRENT CONDITIONS PORTLAND HARBOR <br />
              Air Temp: <span>{air_temp}</span>F
            </div>
      <div>
        Wind: <span>{wind_speed}Mph from {wind_card}</span>
            </div>
     
            <div>
              Water Temp: <span>{currentTemp}</span>F
            </div>
            <div>
        Sea Level: <span>{water_level.toFixed(2)}</span>Ft
            </div>
            <div>
              High Tide: <span>
                {tmpArrFt[0]}ft @ {tmpArrTime[0]}
              </span>{" "}
            </div>   
          </div> : <Spinner class="spinner" name="line-scale" color="teal" />}
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
