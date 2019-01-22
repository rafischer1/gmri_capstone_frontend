import React, { Component } from 'react';
import Parallax from "react-springy-parallax";

// Component Imports
import SignUp from './coreComponents/SignUp'
import AlertCMP from './alerts/AlertCMP'
import Data from './coreComponents/Data'
import Moon from "./visualComponents/Moon";
import SixFeetInfo from './visualComponents/SixFeetInfo'
import InformationCarousel from './visualComponents/InformationCarousel'
import SeptemberRainInfo from './visualComponents/SeptemberRainInfo'
import TidePredictionsDisplay from './dataComponents/TidePredictionsDisplay'
const Spinner = require("react-spinkit");


class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      water_level_noaa: [],
      water_temp_noaa: [],
      todaysDate: "",
      currentTime: "",
      water_level: 0,
      air_temp: 80,
      wind_card: "",
      wind_dir: 0,
      wind_speed: 0,
      show: false,
      alertValue: 0
    };
  }

  renderAlert = (value) => {
    this.setState({
      alertValue: value
    })
  }
  /**
   * subscribeCall to POST a subscriber
   * @param {*} phone
   * @param {*} location
   */
  async subscribeCall(phone, location) {
    let postBody = {
      phone,
      location
    };
    let response = await fetch("http://localhost:3003/subscribe", {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json"
      }
    });

    let res = await response.json();
    if (res === 200) {
      return localStorage.setItem("token", res);
    }
  }

  // converts new Date object to current date in API format and calls API
  dateConverter() {
    let { year, month, day } = dateCalculator();
    let noaaDate = `${year}${month}${day}`;
    this.setState({
      todaysDate: `${year}${month}${day}`
    });
    this.waterLevelNOAA(noaaDate);
    this.currentWaterLevel(noaaDate);
    this.waterTemplNOAA();
  }

  // converts new Date object to current time in API format
  hourConverter(_noaaDate) {
    let t = new Date();
    // this is calculating the current EST from MST...
    this.setState({ currentTime: `${t.getHours() + 2}:${t.getMinutes()}` });
  }

  // Water level predictions API call - sent as props to Data cmp
  async waterLevelNOAA(noaaDate) {
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${+noaaDate +
      1}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&interval=hilo&format=json`
    );

    let resJson = await response.json();

    if (resJson.predictions === undefined) {
      return "wait";
    } else {
      console.log(resJson.predictions, "hi there")
      resJson.predictions.map((day) => {
        if (+(day.v) > 10.8) {
          this.renderAlert(+(day.v))
        }
      })
      return this.setState({
        water_level_noaa: resJson.predictions
      });
    }
  }

  // currentWaterLevel grabs the last item in the array as the last 6 minute updated sea level data
  async currentWaterLevel(noaaDate) {
    let response = await fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${+noaaDate +
      1}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&format=json`);
    let resJson = await response.json()
    let tmp = resJson.data
    if (tmp.length === undefined) {
      return <Spinner className="spinner" name="line-scale" color="teal" />;
    }
    this.setState({ water_level: +(tmp[tmp.length - 1].v) });
  }

  // Water temp API call - sent as props to Data cmp
  async waterTemplNOAA() {
    let { year, month, day } = dateCalculator();
    let noaaDay = `${year}${month}${day}`;
    let noaaDayPlusOne = `${year}${month}${day + 1}`;
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=water_temperature&application=NOS.COOPS.TAC.PHYSOCEAN&begin_date=${+noaaDay}&end_date=${+noaaDayPlusOne}&station=8418150&time_zone=GMT&units=english&interval=6&format=json`
    );

    let resJson = await response.json();

    if (resJson.data === undefined) {
      return "wait";
    } else {
      return this.setState({
        water_temp_noaa: resJson.data
      });
    }
  }

  async weatherApiCall() {
    let lat = 43.6567;
    let lon = -70.2467;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
    let weatherJson = await response.json()
    let currentWind = weatherJson.wind.speed
    let currentWindDir = weatherJson.wind.deg
    let currentWindCard = windConversion(currentWindDir)
    let currentTemp = tempConversion(weatherJson.main.temp)
    this.setState({
      air_temp: currentTemp,
      wind_card: currentWindCard,
      wind_dir: currentWindDir,
      wind_speed: currentWind
    })
  }

  componentDidMount() {
    console.log("component did mount", this.state.res);
    this.dateConverter();
    this.hourConverter();
    this.weatherApiCall()
    this.setState({
      show: true
    });
    // getWeather();
  }

  // css styles for scroll layer
  tideLayer = {
    backgroundColor: "black"
  };


  render() {
    return <div className="App">
      <Parallax ref="parallax" pages={4}>
        <AlertCMP props={this.state.alertValue} />
        {/* SignUp layer at the top */}
        <Parallax.Layer offset={0 // 0 means start, 1 second page, 1.5 second and half, and so on ... // Page offset, or where the layer will be at when scrolled to
        } speed={0 // Shifts the layer up or down in accordance to its offset // Parallax factor, allows for positive and negative values
        }>
          <SignUp subscribeCall={this.subscribeCall} />
          <br />
        </Parallax.Layer>

        {/* Moon layer */}

        <Parallax.Layer offset={0.65} speed={-0.48}>
          <div className="moonDiv">
            <Moon />
          </div>
          {/* <Information /> */}
        </Parallax.Layer>

        {/* data info layer/current conditions */}

        <Parallax.Layer offset={0.8} speed={0.2}>
          <Data wind_speed={this.state.wind_speed} water_level={this.state.water_level} air_temp={this.state.air_temp} wind_card={this.state.wind_card} todaysDate={this.state.todaysDate} currentTime={this.state.currentTime} water_level_noaa={this.state.water_level_noaa} water_temp_noaa={this.state.water_temp_noaa} />
        </Parallax.Layer>

        {/* Tide layer */}
        <Parallax.Layer offset={1.1} speed={0.85} style={this.tideLayer}>
          <br />
          <Parallax pages={1}>
            <Moon />
            <TidePredictionsDisplay water_level_noaa={this.state.water_level_noaa} />
            <Parallax.Layer offset={.1} speed={1}>
              <SixFeetInfo />
            </Parallax.Layer>
          </Parallax>
        </Parallax.Layer>
        <Parallax.Layer offset={1.999} speed={.5}>
          <SeptemberRainInfo />
        </Parallax.Layer>
        <Parallax.Layer offset={2.9} speed={1}>
          <InformationCarousel />
        </Parallax.Layer>
        <Parallax.Layer offset={3} speed={1.5}>

        </Parallax.Layer>
      </Parallax>
    </div>;
  }
}

export default MainView;

// modular method to calculate and return date
const dateCalculator = () => {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  if (month.toString().length === 1) {
    month = `0${month + 1}`;
  }
  else if (month.toString().length === 2) {
    month = month + 1;
  }
  let day = d.getDate();
  return { year, month, day };
}

const tempConversion = (tempK) => {
  let tempF = (tempK - 273.15) * 9 / 5 + 32
  return Math.ceil(tempF)
}

const windConversion = (deg) => {
  let dir
  if (deg > 330) {
    dir = 'N'
  } else if (deg <= 330 && deg > 290) {
    dir = "NW"
  } else if (deg <= 290 && deg > 250) {
    dir = "W"
  } else if (deg <= 250 && deg > 210) {
    dir = "SW"
  } else if (deg <= 210 && deg > 140) {
    dir = "S"
  } else if (deg <= 140 && deg > 120) {
    dir = "SE"
  } else if (deg <= 120 && deg > 80) {
    dir = "E"
  } else if (deg <= 80 && deg > 30) {
    dir = "NE"
  } else {
    dir = "N"
  }
  return dir
}
