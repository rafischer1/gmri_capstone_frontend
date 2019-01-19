import React from 'react';

const BlizzardInfo = ({ weatherApi, water_level_noaa, water_temp_noaa, currentTime }) => {

  const largeSix = {
    fontFamily: "Aleo",
    fontSize: "4.5em",
    padding: "1%"
  }

  return <div className="sixFtPage">
    <span style={largeSix}>14.3</span>
    <br />
    <h4>
     On February 7, 1978 Portland Maine saw a storm tide of 14.3 feet
           when a blizzard landed during high tide.
      </h4>
    <a id="GISLink" href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" target="_blank" rel="noopener noreferrer">
      Explore GMRI Resources
      </a>
  </div>;

}

export default BlizzardInfo