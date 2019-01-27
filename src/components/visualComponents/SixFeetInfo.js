import React from 'react';
import { Spring, config } from "react-spring";

const SixFeetInfo = ({ weatherApi, water_level_noaa, water_temp_noaa, currentTime }) => {
  
 const largeSix = {
   fontFamily: "Aleo",
   fontSize: "4.5em",
   padding: "1%"
 }

  return <div className="sixFtPage">
    <Spring config={config.molasses} from={{ number: 0 }} to={{ number: 6 }}>
        {props => <div style={largeSix}>{props.number.toFixed(2)}</div>}
      </Spring>

      <br />
      <h4>
        A 6 foot sea level rise will result in sunny-day floods with every
        high tide of the year.
      </h4>
      <a id="GISLink" href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" target="_blank" rel="noopener noreferrer">
        Explore Maine GIS SLR Maps
      </a>

      {/* <img alt="slr scenarios" height="600" style={{ marginLeft: "2%" }} src="http://www.neracoos.org/sites/neracoos.org/files/images/slr/scenario_high_0.png"></img> */}
   
    </div>;
}

export default SixFeetInfo