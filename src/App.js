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
    super(props)
    this.state = {
      water_level_noaa: [],
      todaysDate: '',
      currentTime: '',
      weatherApi: {
        water_temp: 37,
        water_level: 4.5,
        air_temp: 38,
        high_tide: `18:38`
      }
    }
     
      
  }


   componentDidMount() {
     console.log("component did mount");
     this.dateConverter()
     this.hourConverter() 
    getWeather()
  }

  // converts new Date object to current date in API format
  dateConverter() {
    let d = new Date()
    let year = d.getFullYear();
    let month = d.getMonth();
    if (month.toString().length === 1) {
      month = `0${month + 1}`
    } else if (month.toString().length === 2) {
      month = month + 1
    }
    let day = d.getDate();

    let noaaDate = `${year}${month}${day}`;
  
    
    this.setState({
      todaysDate: `${year}${month}${day}`
    }) 
    this.waterLevelNOAA(noaaDate);
  }

  // converts new Date object to current time in API format
  hourConverter() {
    let t = new Date();
    
    // this is calculating the current EST from MST...
    this.setState({ currentTime: `${t.getHours() + 2}:${t.getMinutes()}` });
  }

  async waterLevelNOAA(noaaDate) {
    console.log("date in noaa call:", noaaDate)
    let response = await fetch(
      `https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=${noaaDate}&end_date=${+noaaDate +
      1}&datum=MLLW&station=8418150&time_zone=lst_ldt&units=english&interval=hilo&format=json`
    );

    let resJson = await response.json();
    console.log(resJson);
    if (resJson.predictions === undefined) {
      return 'wait'
    } else {
      return this.setState({
        water_level_noaa: resJson.predictions
      })
    }
  };


  
  render() {
    console.log("state:", this.state)
    return <div className="App">
       <Router>
       <div>
        <HeaderCMP />
          <Route exact path="/"  />
          <Route path="/signup" component={SignUp} />
          <Route path="/data" component={Data} />
          <Moon />
        </div>
      </Router>
      
      <Data 
        weatherApi={this.state.weatherApi} 
        todaysDate={this.state.todaysDate} 
        currentTime={this.state.currentTime}
        water_level_noaa={this.state.water_level_noaa}

        />
      {/* <SignUp /> */}
        <footer>
          <Button className="footer-btn right grey">About GMRI</Button>
          <Button className="footer-btn right grey">Unsubscribe</Button>
          <Button className="footer-btn right grey">Disclaimer</Button>
        </footer>
      </div>;
  }
}

// initial API weather fetch
const getWeather = async () => {
  let weather = "hi";
  // let weather = await fetch(`https://api.darksky.net/forecast/1d577a6cf480a1d51c10dce5e2d4d865/43.6567,-70.2467`);
  console.log("weather:", weather);
};




export default App;
