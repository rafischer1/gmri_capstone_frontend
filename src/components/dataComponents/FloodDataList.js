import React from "react";
const Spinner = require("react-spinkit");

const FloodDataList = ({floodData}) => {
   
  const ulStyle = { width: "100px", marginLeft: "5%", fontFamily: "Aleo", borderBottom: "1px dashed rgb(123, 189, 228)" };

  return floodData === undefined ? <Spinner className="spinner" name="wave" color="teal" /> : floodData.map(
      el => {
        let elDate = formatDate(el.createdat)
        return <thead key={el.id} style={ulStyle}>
        <tr>
          <td>ID: {el.id}</td>
          <td>{elDate}</td>
            <td >Message: {el.msg}</td>
            <td>Sea Level Ft: {el.sealevelft.toFixed(1)}</td>
            <td >Wind Mph: {el.windmph.toFixed(2)}</td>
            <td>Wind Direction: {el.winddir}</td>
            </tr>
          </thead>;
      }
    );
}

const formatDate = (createdAt) => {
  let date = ''
  date = `${createdAt.split(":")[0].split("-")[1]}/${createdAt.split(":")[0].split("-")[2].split("T")[0]}/${createdAt.split(":")[0].split("-")[0]}`
  return date
}

export default FloodDataList