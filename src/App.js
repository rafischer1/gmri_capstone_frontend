import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem} from 'react-materialize'
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <Navbar className="cyan lighten-4"  left>
            <ul className="nav navbar-nav navbar-right black">
              <li>
                <img id="logo" src="https://www.gmri.org/sites/default/files/logo_0.png" height="60" alt="" />
                <img src="https://static1.squarespace.com/static/5a75f43a692ebeeb1159413d/t/5adf368f2b6a28995d5d1539/1524577943240/Seal.Navy.png" height="60" width="60" alt="" />
              </li>
            </ul>
          <NavItem className="cyan" onClick={() => console.log("test click")}>
              F.A.S. React Frontend
            </NavItem>
          </Navbar>
        </header>
        <SignUp />
      </div>;
  }
}

export default App;
