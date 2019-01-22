import React, { Component } from 'react';
import {Navbar} from 'react-materialize'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Component Imports
import Admin from './components/coreComponents/Admin'
import MainView from './components/MainView'
import Unsubscribe from './components/coreComponents/Unsubscribe'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cool_info: 0
    };
  }

  /**
  * unsubscribeCall to DELETE a subscriber
  * @param {*} phone

  */
  async unsubscribeCall(phone) {
    console.log("in the unsub phone:", phone)
    let response = await fetch(`http://localhost:3003/subscribe/${phone}`, {
      method: "DELETE",
    });

    let res = await response.json();
   console.log("unsub res:", res)
  }


  render() {
    return <div className="AppView">
      <Router>
        <div>
          <Navbar className="grey darken-1" >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/unsubscribe">Unsubscribe</Link>
              </li>
            </ul>
          <ul className="nav navbar-nav right">
            <li>
              <img id="logo" src="https://www.gmri.org/sites/default/files/logo_0.png" height="60" alt="" />
              <img src="https://static1.squarespace.com/static/5a75f43a692ebeeb1159413d/t/5adf368f2b6a28995d5d1539/1524577943240/Seal.Navy.png" height="60" width="60" alt="" />
           </li>
          </ul>
          </Navbar>
          <Route exact path="/" component={MainView} />
          <Route path="/admin" component={Admin} />
          <Route path="/unsubscribe" component={() => <Unsubscribe unsubscribeCall={this.unsubscribeCall}/>}  />
        </div>

      </Router>
      {/* <Header /> */}
      {/* <MainView /> */}
    </div>;
  }
}
   


export default App;
