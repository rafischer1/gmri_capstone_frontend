import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-materialize'
import SignUp from './components/SignUp'
import HeaderCMP from './components/HeaderCMP'
import Data from './components/Data'
import Moon from "./components/visualComponents/Moon";
import Parallax from "react-springy-parallax";
import TidePredictionsDisplay from './components/dataComponents/TidePredictionsDisplay'

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
    })
    
    let res = await response.json()
    console.log("Res:", res)
    if (res === 200) {
      localStorage.setItem("token", res);
      return <Data to={{
        pathname: '/Data',
       
      }}/> 
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
    console.log("component did mount", this.state.res);
    this.dateConverter();
    this.hourConverter();
    this.setState({
      show: true
    })
    // getWeather();
  }

  // css styles for scroll layer
  tideLayer = {
    backgroundColor: "black"
  }

  render() {
    return <div className="App">
        
          <div className="navbar">
            <HeaderCMP />
          </div>
        
        <Parallax ref="parallax" pages={3}>
         {/* SignUp layer at the top */}
          <Parallax.Layer // Page offset, or where the layer will be at when scrolled to
            // 0 means start, 1 second page, 1.5 second and half, and so on ...
            offset={0} // Parallax factor, allows for positive and negative values
            // Shifts the layer up or down in accordance to its offset
            speed={0}
            >
            <SignUp subscribeCall={this.subscribeCall} />
            <br />
          </Parallax.Layer>

          {/* Moon layer */}

          <Parallax.Layer 
            offset={.4}
            speed={-0.6}
          >
            <div className="moonDiv">
           <Moon />
           </div>
            {/* <Information /> */}
          </Parallax.Layer>

        <Parallax.Layer
          offset={.9}
          speed={0.2}
          >

          <Data weatherApi={this.state.weatherApi} todaysDate={this.state.todaysDate} currentTime={this.state.currentTime} water_level_noaa={this.state.water_level_noaa} water_temp_noaa={this.state.water_temp_noaa} />
          <br />
          <br />
         

        </Parallax.Layer>

          {/* Tide layer */}

        <Parallax.Layer
          offset={1.3}
          speed={0.8}
          style={this.tideLayer}>
            <br />
            <br />
            <TidePredictionsDisplay water_level_noaa={this.state.water_level_noaa} />
        
          {/* <Information /> */}
        </Parallax.Layer>
          <footer>
            <Button className="footer-btn right grey">About GMRI</Button>
            <Button className="footer-btn right grey">Unsubscribe</Button>
            <Button className="footer-btn right grey">Disclaimer</Button>
          </footer>
        </Parallax>
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
