import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-materialize'
import SignUp from './components/SignUp'
import HeaderCMP from './components/HeaderCMP'

class App extends Component {
  render() {
    return <div className="App">
        <HeaderCMP />
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
