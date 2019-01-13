import React from 'react';




const Data = ({weatherApi, currentTime, todaysDate}) => {
   
    let water_level_data = waterLevelNOAA(todaysDate);

    console.log(water_level_data.predictions, currentTime, todaysDate)

  


  return <div className="dataPage">
           {/* <div>Water Level: <span>{water_level_data}</span></div> */}
           <div>Air Temp: <span>{weatherApi.air_temp}</span>F</div>
           <div>Water Temp: <span>{weatherApi.water_temp}</span>F</div>
           <div>Sea Level: <span>{weatherApi.water_level}</span>Ft</div>
          <div>Next High Tide: <span>{weatherApi.high_tide}</span> </div>
    </div>
}


const waterLevelNOAA = async todaysDate => {
  console.log("date in noaa call:", todaysDate);
  let response = await fetch(
    `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${todaysDate}&end_date=${+todaysDate +
    1}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&interval=hilo&format=json`
  );

  let resJson = await response.json();
  console.log(resJson);
  return resJson;
};


export default Data
