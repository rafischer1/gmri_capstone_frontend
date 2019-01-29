import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCMP = () => {
  return <div className="carouselPage">
      <Carousel style={{width: "50%"}}>
      <div>
          <img src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/1/attachments/1" />
          <p className="legend">Flooding in the Old Port</p>
        </div>
        <div>
          <img alt="flooding image" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/3/attachments/5" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/4/attachments/7" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://crise.gmri.org/sites/crise.gmri.org/files/2016-12/beach_car.png" />
          <p className="legend">Legend 1</p>
        </div>
        {/* <div>
          <img src="http://www.stormheroes.com/moments/wp-content/uploads/2011/04/20110416_01.jpg" />
          <p className="legend">Legend 1</p>
        </div> */}
      </Carousel>

    </div>;
}

export default CarouselCMP;




// <p>
//   From April 15 - 18, 2007 a Northeaster known as the Patriot's Day
//   Storm battered the coast of the Gulf of Maine. This storm lasted
//   through 6 high-tide cycles, bringing hurricane-force winds and extreme
//   rainfall, causing a 2.7 foot storm surge and 13.3 foot storm tide
//   resulting in flooding in coastal areas and extensive flooding of
//   streams and rivers inland. 28-30 foot waves were recorded by NOAA buoys
//   in the Gulf of Maine during the Patriot's Day storm
//       </p> , <span>
//     A 3.3 foot sea level rise will result in 616 floods per year. This is
//         the amount of sea level rise experts recommend we plan for in Maine.{" "}
//   </span>

// , "https://i1.wp.com/emmavreed.com/wp-content/uploads/2016/11/ezgif.com-9de85b22b4.gif?resize=604%2C453"