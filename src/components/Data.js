import React, { Component } from 'react';

class Data extends Component {
 
  componentDidMount() {
    console.log("props recieve to data:", this.props.weatherApi)
    getWeather()
  }
  
  render() {
  return <div className="dataPage">
           <div>Air Temp: <span>{this.props.weatherApi.air_temp}</span>F</div>
           <div>Water Temp: <span>{this.props.weatherApi.water_temp}</span>F</div>
           <div>Sea Level: <span>{this.props.weatherApi.water_level}</span>Ft</div>
          <div>Next High Tide: <span>{this.props.weatherApi.high_tide}</span> </div>
    </div>
   
  
  }
  
}

export default Data

const getWeather = async () => {
  let weather = 'hi'
  // let weather = await fetch(`https://api.darksky.net/forecast/1d577a6cf480a1d51c10dce5e2d4d865/43.6567,-70.2467`);
  console.log('weather:', weather)
}