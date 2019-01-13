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
    this.setState({
      todaysDate: `${year}${month}${day}`
    }) 
  }

  // converts new Date object to current time in API format
  hourConverter() {
    let t = new Date();
    this.setState({ currentTime: `${t.getHours()}:${t.getMinutes()}` });
  }


  
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
