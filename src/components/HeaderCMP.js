import React from 'react'
import {Navbar, NavItem} from 'react-materialize'


const HeaderCMP = () => {
  const waveFunc = () => {
    // make some waves.
    var ocean = document.getElementById("ocean"),
      waveWidth = 10,
      waveCount = Math.floor(window.innerWidth / waveWidth),
      docFrag = document.createDocumentFragment();

    for (var i = 0; i < waveCount; i++) {
      var wave = document.createElement("div");
      wave.className += " wave";
      docFrag.appendChild(wave);
      wave.style.left = i * waveWidth + "px";
      wave.style.webkitAnimationDelay = (i / 100) + "s";
    }
    ocean.appendChild(docFrag);
  }

  return <header className="App-header" onClick={waveFunc} id="ocean">
    <Navbar className="teal lighten-4" >
        <ul className="nav navbar-nav right">
          <li>
            <a href="/SignUp">Sign Up</a>
          </li>
          <li>
            <a href="/Data">Current Conditions: Portland Waterfront</a>
          </li>
          <li>
            <img id="logo" src="https://www.gmri.org/sites/default/files/logo_0.png" height="60" alt="" />
            <img src="https://static1.squarespace.com/static/5a75f43a692ebeeb1159413d/t/5adf368f2b6a28995d5d1539/1524577943240/Seal.Navy.png" height="60" width="60" alt="" />
          </li>
        </ul>
        <NavItem className="" onClick={() => console.log("test click")}>
          F.A.S. React Frontend
        </NavItem>
      </Navbar>
    </header>;
}

export default HeaderCMP