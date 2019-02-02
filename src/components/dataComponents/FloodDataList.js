import React from 'react';
import {FormatDate} from '../function_exports/ConversionFuncs'
const Spinner = require('react-spinkit');

const FloodDataList = ({floodData}) => {
   
  const ulStyle = { width: "100px", marginLeft: "5%", marginBottom: "2%", fontFamily: "Aleo", borderBottom: "1px dashed rgb(123, 189, 228)" };

  return floodData === undefined || floodData === null ? <Spinner className="spinner" name="wave" color="teal" /> : floodData.map(
      el => {
        let elDate = FormatDate(el.createdat)
        return <thead key={el.id} style={ulStyle}>
        <tr>
          <td>{elDate}</td>
            <td >Message: {el.msg}</td>
            <td>Category: {el.category}</td>
            <td>Sea Level Ft: {el.sealevelft.toFixed(1)}</td>
            <td >Wind Mph: {el.windmph.toFixed(2)}</td>
            <td>Wind Direction: {el.winddir}</td>
            </tr>
          </thead>;
      }
  );
}

export default FloodDataList