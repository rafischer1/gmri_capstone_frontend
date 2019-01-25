import React, { Component } from 'react';
import {Navbar} from 'react-materialize'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Component Imports
import Admin from './components/coreComponents/Admin'
import MainView from './components/MainView'
import Unsubscribe from './components/coreComponents/Unsubscribe'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cool_info: 0,
      toastMsg: '',
    };
  }

  renderToast = (msg) => {
    this.setState({
      toastMsg: msg
    })
  }

  /**
  * unsubscribeCall to DELETE a subscriber
  * @param {*} phone

  */
  unsubscribeCall = async(phone) => {
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/subscribe/${phone}`, {
      method: "DELETE",
    });

    let res = await response.json();


    if (res === 200) {
      let msg = `${phone} Unsubscribed`;
      this.renderToast(msg);
      setTimeout(() => {
        msg = '';
        this.renderToast(msg);
      }, 3000);
    }
  }

  async postSMSCall() {
    let postBody = {}
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/data`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let resJson = await response.json()
    console.log("posSMScall body:", resJson)
  }

  render() {
    return <div className="AppView">
        <Router>
          <div>
            <Navbar className="white">
              <ul>
                <li>
                  <Link to="/">SLR Maine</Link>
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
            <Route path="/admin" component={() => <Admin postSMSCall={this.portSMSCall} />} />
            <Route path="/unsubscribe" component={() => <Unsubscribe unsubscribeCall={this.unsubscribeCall} toastMsg={this.state.toastMsg} />} />
          </div>
        </Router>
      </div>;
  }
}
   
