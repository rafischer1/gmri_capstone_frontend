import React from 'react';
import { MilToStrdTime } from '../function_exports/ConversionFuncs';
const Spinner = require('react-spinkit');

const Data = ({
  wind_speed,
  wind_card,
  air_temp,
  water_level,
  water_level_noaa,
  water_temp_noaa,
  currentTime
}) => {
  let showData = false;
  if (water_level_noaa) {
    showData = true;
  } else {
    showData = false;
  }

  let predictions = water_level_noaa;
  let nextHigh = 0;
  let currentTemp;
  let tmpArrTime = [];
  let tmpArrFt = [];

  if (water_temp_noaa[0] === undefined) {
    return <Spinner className='spinner' name='line-scale' color='teal' />;
  } else {
    currentTemp = water_temp_noaa[water_temp_noaa.length - 1].v;
  }
  predictions.filter(day => {
    // "2019-01-12 02:58"
    let tideTime = day.t.split(' ')[1].split(':')[0];
    let tmpHour = currentTime.split(':')[0];
    //  console.log("tide time, tmptime", tideTime, tmpHour)
    if (tideTime > tmpHour && day.type === 'H') {
      // console.log(day.v, day.type)
      if (day.v) {
        let tmp = +day.v;
        tmpArrFt.push(tmp.toFixed(2));
        nextHigh = MilToStrdTime(day.t.split(' ')[1]);
        tmpArrTime.push(nextHigh);
        return tmpArrTime[0];
      }
    }
    return null;
  });

  const infoStyle = {
    backgroundColor: 'rgba(49, 49, 49, 0.723)',
    opacity: '1',
    color: 'white',
    padding: '2%',
    textAlign: 'center',
    width: '60%',
    marginLeft: '20%'
  };

  return (
    <div className='dataPage'>
      {showData ? (
        <div style={infoStyle}>
          <div>
            CURRENT CONDITIONS PORTLAND HARBOR <br />
            Air Temp: <span>{air_temp}</span>F
          </div>
          <div>
            Wind:{' '}
            <span>
              {wind_speed}Mph from {wind_card}
            </span>
          </div>

          <div>
            Water Temp: <span>{currentTemp}</span>F
          </div>
          <div>
            Sea Level: <span>{water_level.toFixed(2)}</span>Ft
          </div>
          <div>
            High Tide:{' '}
            <span>
              {tmpArrFt[0]}ft @ {tmpArrTime[0]}
            </span>{' '}
          </div>
        </div>
      ) : (
        <Spinner className='spinner' name='line-scale' color='teal' />
      )}
    </div>
  );
};

export default Data;
