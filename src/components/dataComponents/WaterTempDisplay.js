import React from 'react'

/***
 *  Water temp data object: {t: "2019-01-13 00:00", v: "36.9", f: "0,0,0"}
 * 
 * 
 */

const WaterTempDataDisplay = (data) => {
 
  let waterTempData = data.water_temp_noaa
  console.log("water temp cmp:", waterTempData);

  return <div>TempDisplay</div>
}

export default WaterTempDataDisplay