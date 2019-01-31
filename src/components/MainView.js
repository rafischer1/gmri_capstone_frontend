import React, { Component } from 'react';
import '../CSS/Letter.css';
import MediaQuery from 'react-responsive';
import Parallax from 'react-springy-parallax';
import { Spring, animated } from 'react-spring';
import { WindConversion, TempConversion, DateCalculator} from './function_exports/ConversionFuncs';

// Component Imports
import SignUp from './coreComponents/SignUp';
import AlertCMP from './alerts/AlertCMP';
import Data from './coreComponents/Data';
import Moon from "./visualComponents/Moon";
import SixFeetInfo from './visualComponents/SixFeetInfo';
import CarouselCMP from './visualComponents/CarouselCMP';
import SeptemberRainInfo from './visualComponents/SeptemberRainInfo';
import TidePredictionsDisplay from './dataComponents/TidePredictionsDisplay';
import FooterPage from './visualComponents/FooterPage';
import MediaFooterPage from "./visualComponents/MediaFooterPage";
import UnsubscribeInfo from "./visualComponents/UnsubscribeInfo"


const Spinner = require('react-spinkit');

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      water_level_noaa: [],
      water_temp_noaa: [],
      todaysDate: "",
      tomorrowsDate: "",
      currentTime: "",
      water_level: 0,
      air_temp: 80,
      wind_card: "",
      wind_dir: 0,
      wind_speed: 0,
      show: false,
      alertValue: 0,
      viewToastMsg: '',
      flooding: false
    };
  }

  renderAlert = (value) => {
    this.setState({
      alertValue: value
    })
  }

  renderToast = (msg) => {
     this.setState({
      viewToastMsg: msg
    })
  }


  /**
   * subscribeCall to POST a subscriber
   * @param {*} phone
   * @param {*} location
   */
 subscribeCall = async(phone, location) => {
    let postBody = {
      phone,
      location
    };
    let response = await fetch(
      `${process.env.REACT_APP_API_DEV_URL}/subscribe`,
      {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    let res = await response.json();
    if (res === 200) {
      let msg = `Subscription Successful!`
      // console.log(res, msg)
      this.renderToast(msg)
      setTimeout(() => {
        msg = ''
        this.renderToast(msg)
      }, 3000)
    }
  }


  // converts new Date object to current date in API format and calls API
  dateConverter() {
    let { year, month, day, tomorrowDay, nextMo, nextYear } = DateCalculator();
    let noaaDate = `${year}${month}${day}`;
    let tomorrowDate = `${nextYear}${nextMo}${tomorrowDay}`;
    this.setState({
      todaysDate: `${year}${month}${day}`,
      tomorrowsDate: `${nextYear}${nextMo}${tomorrowDay}`
    });
    this.getNOAAInfo(noaaDate, tomorrowDate);
  }

  getNOAAInfo(noaaDate, tomorrowDate) {
    this.waterLevelNOAA(noaaDate, tomorrowDate);
    this.currentWaterLevel(noaaDate, tomorrowDate);
    this.waterTempNOAA(noaaDate, tomorrowDate);
  }

  // converts new Date object to current time in API format
  hourConverter() {
    let t = new Date();
    // this is calculating the current EST from MST...
    this.setState({ currentTime: `${t.getHours() + 2}:${t.getMinutes()}` });
  }

  // Water level predictions API call - sent as props to Data cmp
  async waterLevelNOAA(noaaDate, tomorrowDate) {
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${tomorrowDate}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&interval=hilo&format=json`
    );

    let resJson = await response.json();

    if (resJson.predictions === undefined) {
      return "wait";
    } else {
      // console.log(resJson.predictions)
      resJson.predictions.map((day) => {
        if (+(day.v) > 11.4) {
          return this.renderAlert(+(day.v))
        }
      })
      return this.setState({
        water_level_noaa: resJson.predictions
      });
   
    }

  }

  // currentWaterLevel grabs the last item in the array as the last 6 minute updated sea level data
  async currentWaterLevel(noaaDate, tomorrowDate) {
    console.log("resjson tide:", noaaDate, tomorrowDate);
    let response = await fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${tomorrowDate}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&format=json`);
    let resJson = await response.json()
    
    let tmp = resJson.data
    if (tmp === undefined) {
      return <Spinner className="spinner" name="line-scale" color="teal" />;
    }
    if (+tmp[tmp.length - 1].v > 11.4) {
      this.setState({flooding: true})
    }
    this.setState({ water_level: +(tmp[tmp.length - 1].v) });
  }

  // Water temp API call - sent as props to Data cmp
  async waterTempNOAA(noaaDate, tomorrowDate) {
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=water_temperature&application=NOS.COOPS.TAC.PHYSOCEAN&begin_date=${+noaaDate}&end_date=${+tomorrowDate}&station=8418150&time_zone=GMT&units=english&interval=6&format=json`
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
    const lat = 43.6567;
    const lon = -70.2467;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
    let weatherJson = await response.json()
    let currentWind = weatherJson.wind.speed
    let currentWindDir = weatherJson.wind.deg
    let currentWindCard = WindConversion(currentWindDir)
    let currentTemp = TempConversion(weatherJson.main.temp)
    this.setState({
      air_temp: currentTemp,
      wind_card: currentWindCard,
      wind_dir: currentWindDir,
      wind_speed: currentWind
    })
  }

  componentDidMount() {
    this.dateConverter();
    this.hourConverter();
    this.weatherApiCall()
    this.setState({
      show: true
    });
  }

  // css styles for scroll layer
  tideLayer = {
    backgroundColor: "black"
  };

  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={951}>
          <Parallax ref="parallax" pages={5} scrolling={true}>
            
            <AlertCMP props={this.state.alertValue} />
            {/* SignUp layer at the top */}
            
            <Parallax.Layer offset={0} speed={0}>
              <div style={{ fontSize: ".5em", marginLeft: "26%" }}>
                <span className="letter" data-letter="W">
                  Welcome to
                </span>
                <span className="letter" data-letter="S">
                  SLR
                </span>
                <span className="letter" data-letter="M">
                  Maine
                </span>
              </div>
              <SignUp
                subscribeCall={this.subscribeCall}
                toastMsg={this.state.viewToastMsg}
              />
              
            </Parallax.Layer>

            {/* data info layer/current conditions */}
            <Parallax.Layer offset={1} speed={0.2} factor={0.75}>
              <Data
                wind_speed={this.state.wind_speed}
                water_level={this.state.water_level}
                air_temp={this.state.air_temp}
                wind_card={this.state.wind_card}
                todaysDate={this.state.todaysDate}
                currentTime={this.state.currentTime}
                water_level_noaa={this.state.water_level_noaa}
                water_temp_noaa={this.state.water_temp_noaa}
              />
            </Parallax.Layer>

            {/* Moon layer */}
            <Parallax.Layer offset={0.94} speed={-0.4} factor={0.35}>
              <div className="moonDiv">
                <Spring native from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <animated.div style={props}>
                     <Moon flooding={this.state.flooding}/>  
                    </animated.div>
                  )}
                </Spring>
              </div>
            </Parallax.Layer>

            {/* Tide layer */}
            <Parallax.Layer
              offset={1.8}
              speed={0.65}
              style={this.tideLayer}
              factor={0.63}
            >
              <br />
              <Moon />
              <TidePredictionsDisplay
                water_level_noaa={this.state.water_level_noaa}
              />
            </Parallax.Layer>

            {/* Six feet info box */}
            <Parallax.Layer offset={2.2} speed={-3} factor={0.5}>
              <SixFeetInfo />
            </Parallax.Layer>

            {/* carousel of flooding pics */}
            <Parallax.Layer offset={2.8} speed={0.75} factor={0.75}>
              <div className="container carouselContainer">
                <CarouselCMP />
              </div>
            </Parallax.Layer>

            {/* september rain box */}
            <Parallax.Layer offset={3.3} speed={1.8} factor={0.85}>
              {/* <SeptemberRainInfo /> */}
              <UnsubscribeInfo />
            </Parallax.Layer>

            <Parallax.Layer offset={4.1} speed={-0.01}>
              <FooterPage />
            </Parallax.Layer>
          </Parallax>
        </MediaQuery>
        {/* phone sizing media queries */}
        <MediaQuery query="(max-device-width: 950px)">
          <Parallax ref="parallax" pages={4} scrolling={true}>
            <AlertCMP props={this.state.alertValue} />
            {/* SignUp layer at the top */}

            <Parallax.Layer offset={0} speed={0}>
              <div style={{ fontSize: ".3em", marginLeft: "7.5%" }}>
                <span className="letter" data-letter="W">
                  Welcome to
                </span>
                <span className="letter" data-letter="S">
                  SLR
                </span>
                <span className="letter" data-letter="M">
                  Maine
                </span>
              </div>
              <SignUp
                style={{ padding: "0", margin: "0", width: "100%" }}
                subscribeCall={this.subscribeCall}
                toastMsg={this.state.viewToastMsg}
              />
            </Parallax.Layer>

            {/* data info layer/current conditions */}
            <Parallax.Layer offset={0.95} speed={0.1} factor={0.5}>
              <Data
                wind_speed={this.state.wind_speed}
                water_level={this.state.water_level}
                air_temp={this.state.air_temp}
                wind_card={this.state.wind_card}
                todaysDate={this.state.todaysDate}
                currentTime={this.state.currentTime}
                water_level_noaa={this.state.water_level_noaa}
                water_temp_noaa={this.state.water_temp_noaa}
              />
            </Parallax.Layer>

            {/* Tide layer */}
            <Parallax.Layer
              offset={1.8}
              speed={0.85}
              style={this.tideLayer}
              factor={0.83}
            >
              <br />
              <TidePredictionsDisplay
                water_level_noaa={this.state.water_level_noaa}
              />
            </Parallax.Layer>
            {/* Six feet info box */}
            <Parallax.Layer offset={2.3} speed={-3}>
              <SixFeetInfo />
            </Parallax.Layer>

            {/* september rain box */}
            <Parallax.Layer offset={2.7} speed={1.5} factor={0.8}>
              <SeptemberRainInfo />
            </Parallax.Layer>
            <Parallax.Layer offset={3.2} speed={-0.01}>
              <MediaFooterPage />
            </Parallax.Layer>
          </Parallax>
        </MediaQuery>
      </div>
    );
  }
}

export default MainView;