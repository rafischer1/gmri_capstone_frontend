import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-materialize'
import SignUp from './components/SignUp'
import HeaderCMP from './components/HeaderCMP'
import Moon from "./components/Moon";
import Data from './components/Data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherApi: {
        water_temp: 37,
        water_level: 4.5,
        air_temp: 38,
        high_tide: `18:38`
      }
    }
    console.log("state:", this.state.messages)

  }
  render() {
    return <div className="App">
        <HeaderCMP />
        <Moon />
        <Data weatherApi={this.state.weatherApi}/>
        <SignUp />
        
        <footer>
          <Button className="footer-btn right grey">About GMRI</Button>
          <Button className="footer-btn right grey">Unsubscribe</Button>
          <Button className="footer-btn right grey">Disclaimer</Button>
        </footer>
      </div>;
  }
}

export default App;
