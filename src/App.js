import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-materialize'
import SignUp from './components/SignUp'
import HeaderCMP from './components/HeaderCMP'
import Moon from "./components/Moon";
import Data from './components/Data'

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      water_level_noaa: [],
      water_temp_noaa: [],
      todaysDate: "",
      currentTime: "",
      weatherApi: {
        water_temp: 37,
        water_level: 4.5,
        air_temp: 38
      },
      show: false
    };
  }


  /**
 * subscribeCall to POST a subscriber
 * @param {*} phone 
 * @param {*} location 
 */
  async subscribeCall(phone, location) {
    console.log('call phone location:', phone, location)
    let postBody = {
      phone,
      location
    }
    let response = await fetch('http://localhost:3003/subscribe', {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => {
      console.log(err)
    })
    
    let res = await response.json()
    console.log("Res:", res)
    // Content:<nil>3333333333Maine
    
    
  }

  // converts new Date object to current date in API format and calls API
  dateConverter() {
    let { year, month, day } = dateCalculator();
    let noaaDate = `${year}${month}${day}`;
    this.setState({
      todaysDate: `${year}${month}${day}`
    });
    this.waterLevelNOAA(noaaDate);
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
      return this.setState({
        water_level_noaa: resJson.predictions
      });
    }
  }

  // Water temp API call - sent as props to Data cmp
  async waterTemplNOAA() {
    let { year, month, day } = dateCalculator();
    let noaaDate = `${year}${month}${day}`;
    let noaaDatePlusOne = `${year}${month}${day + 1}`;
    console.log("date in temp call:", +noaaDate, +noaaDatePlusOne);
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=water_temperature&application=NOS.COOPS.TAC.PHYSOCEAN&begin_date=${+noaaDate}&end_date=${+noaaDatePlusOne}&station=8418150&time_zone=GMT&units=english&interval=6&format=json`
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

  componentDidMount() {
    console.log("component did mount");
    this.dateConverter();
    this.hourConverter();
    // getWeather();
  }

  render() {
    return <div className="App">
        <Router>
          <div className="navbar">
            <HeaderCMP />
            <Route exact path="/" />

            <Route path="/signup" render={props => <SignUp {...props} subscribeCall={this.subscribeCall} />} />
            <Route path="/data" component={Data} />
            <Moon />
          </div>
        </Router>

        <Data weatherApi={this.state.weatherApi} todaysDate={this.state.todaysDate} currentTime={this.state.currentTime} water_level_noaa={this.state.water_level_noaa} water_temp_noaa={this.state.water_temp_noaa} />


        <footer>
          <Button className="footer-btn right grey">About GMRI</Button>
          <Button className="footer-btn right grey">Unsubscribe</Button>
          <Button className="footer-btn right grey">Disclaimer</Button>
        </footer>
      </div>;
  }
}

export default App;

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
