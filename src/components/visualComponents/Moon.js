import moon1 from "../../images/moon_phases/moon_1.jpg";
import moon3 from "../../images/moon_phases/moon_3.jpg";
import moon5 from "../../images/moon_phases/moon_5.jpg";
import moon7 from "../../images/moon_phases/moon_7.jpg";
import moon9 from "../../images/moon_phases/moon_9.jpg";
import moon11 from "../../images/moon_phases/moon_11.jpg";
import moon13 from "../../images/moon_phases/moon_13.jpg";
import moon15 from "../../images/moon_phases/moon_15.jpg";
import moon17 from "../../images/moon_phases/moon_17.jpg";
import moon19 from "../../images/moon_phases/moon_19.jpg";
import moon22 from "../../images/moon_phases/moon_22.jpg";
import moon24 from "../../images/moon_phases/moon_24.jpg";
import moon25 from "../../images/moon_phases/moon_25.jpg";
import moon26 from "../../images/moon_phases/moon_26.jpg";
import moon28 from "../../images/moon_phases/moon_28.jpg";
import moon29 from "../../images/moon_phases/moon_29.jpg";

import React from 'react'
var lune = require("lune");

/***
 * 
 * Simple calculator component to display image of moon phase
 * 
 */

const Moon = () => {
  let current_phase = lune.phase();
  let current_moon_age = Math.floor(current_phase.age);
  let moon_phase_src = '' 
  moon_phase_src = moonPhaseCalc(current_moon_age, moon_phase_src);
  return <div className="moonPage"><img src={moon_phase_src} alt="Moon Phase" />
  </div >
    ;
  
}
export default Moon


function moonPhaseCalc(current_moon_age, moon_phase_src) {
  if (current_moon_age === 0 || current_moon_age === 1) {
    moon_phase_src = moon1;
  } else if (current_moon_age === 2 || current_moon_age === 3) {
    moon_phase_src = moon3;
  } else if (current_moon_age === 4 || current_moon_age === 5) {
    moon_phase_src = moon5;
  } else if (current_moon_age === 6 || current_moon_age === 7) {
    moon_phase_src = moon7;
  } else if (current_moon_age === 8 || current_moon_age === 9) {
    moon_phase_src = moon9;
  } else if (current_moon_age === 10 || current_moon_age === 11) {
    moon_phase_src = moon11;
  } else if (current_moon_age === 12 || current_moon_age === 13) {
    moon_phase_src = moon13;
  } else if (current_moon_age === 14 || current_moon_age === 15) {
    moon_phase_src = moon15;
  } else if (current_moon_age === 16 || current_moon_age === 17) {
    moon_phase_src = moon17;
  } else if (current_moon_age === 18 || current_moon_age === 19) {
    moon_phase_src = moon19;
  } else if (
    current_moon_age === 20 ||
    current_moon_age === 21 ||
    current_moon_age === 22
  ) {
    moon_phase_src = moon22;
  } else if (current_moon_age === 23 || current_moon_age === 24) {
    moon_phase_src = moon24;
  } else if (current_moon_age === 25 || current_moon_age === 26) {
    moon_phase_src = moon25;
  } else if (current_moon_age === 26) {
    moon_phase_src = moon26;
  } else if (current_moon_age === 27 || current_moon_age === 28) {
    moon_phase_src = moon28;
  } else {
    moon_phase_src = moon29;
  }
  return moon_phase_src;
}