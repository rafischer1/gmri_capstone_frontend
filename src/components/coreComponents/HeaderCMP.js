import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainView from '../MainView'
import Admin from './Admin'

const Header = () => {
 

  // return <header className="App-header" onClick={waveFunc} id="ocean">
  //   <Navbar className="teal lighten-4" >
  //       <ul className="nav navbar-nav right">
  //         <li>
  //           <a href="/SignUp">Sign Up</a>
  //         </li>
  //         <li>
  //           <a href="/Data">Current Conditions: Portland Waterfront</a>
  //         </li>
  //         <li>
  //           <img id="logo" src="https://www.gmri.org/sites/default/files/logo_0.png" height="60" alt="" />
  //           <img src="https://static1.squarespace.com/static/5a75f43a692ebeeb1159413d/t/5adf368f2b6a28995d5d1539/1524577943240/Seal.Navy.png" height="60" width="60" alt="" />
  //         </li>
  //       </ul>
  //       <NavItem className="" onClick={() => console.log("test click")}>
  //         F.A.S. React Frontend
  //       </NavItem>
  //     </Navbar>
  //   </header>;

  // return <Router>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/admin">Admin</Link>
  //       </li>
  //       <li>
  //         <Link to="/unsibscribe">Unsubscribe</Link>
  //       </li>
  //     </ul>

  //     <hr />

  //     <Route exact path="/" component={MainView} />
  //     <Route path="/admin" component={Admin} />
  //     {/* <Route path="/unsubscribe" component={Unsubscribe} /> */}
  //   </div>
  // </Router>
}

export default Header