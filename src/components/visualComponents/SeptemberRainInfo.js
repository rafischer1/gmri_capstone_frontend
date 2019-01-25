
import React from 'react';


const SeptemberRainInfo = () => {

  const largeSix = {
    fontFamily: "Aleo",
    fontSize: "4.5em",
    padding: "1%"
  }

  return <div className="septemberPage">
  
      <span style={largeSix}>5.63</span>
      <br />
      <h4>
        On September 30, 2015 Portland experienced a rainfall of 5.63 inches,
        putting this day in one of the top 10 rainiest days since 1871. This
        rainfall occurred during a high tide of 11.6 feet.
      </h4>
    <a id="SeptLink" href="https://www.pressherald.com/2015/09/30/heavy-rains-slowing-morning-commute-across-southern-maine/" target="_blank" rel="noopener noreferrer">
        Portland Press Herald Article
      </a>
   
    </div>;

}

export default SeptemberRainInfo
