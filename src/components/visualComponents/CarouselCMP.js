import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const CarouselCMP = () => {
  return <div className="carouselPage">
      <Carousel style={{ width: "50%" }}>
        <div>
          <img alt="J's oyster bar flooding" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/4/attachments/7" />
          <p className="legend">Coastal Flooding in the Old Port</p>
        </div>
        <div>
          <img alt="Flooding in town portland" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/3/attachments/5" />
          <p className="legend">
            Flooding during a heavy rain event in Portland
          </p>
        </div>
        <div>
          <img alt="Flooding on Market Street in the Old port" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/1/attachments/1" />
          <p className="legend">Flooding on Market Street in the Old port</p>
        </div>
        <div>
          <img alt="Storm surge flooding in Woodford's Corner - September 30, 2015" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/6/attachments/11" />
          <p className="legend">
            Storm surge flooding in Woodford's Corner - September 30, 2015
          </p>
        </div>
        <div>
          <img alt=" Deering Oaks Park after heavy rain" src="https://services3.arcgis.com/IWh1Id1sBCnK9p7O/arcgis/rest/services/Portland_Flooding/FeatureServer/0/5/attachments/9" />
          <p className="legend">
            Deering Oaks Park after heavy rain (Ben McCanna/Staff
            Photographer)
          </p>
        </div>
        <div>
          <img alt="NOAA Patriot's Day Storm GIF" src="http://www1.ncdc.noaa.gov/pub/data/images/april2007noreaster-loop-small.gif" />
          <p className="legend">
            From April 15-18, 2007 a Northeaster known as the Patriot's Day
            Storm battered the coast of the Gulf of Maine. This storm lasted
            through 6 high-tide cycles, bringing hurricane-force winds and
            extreme rainfall, causing a 2.7 foot storm surge and 13.3 foot
            storm tide resulting in flooding in coastal areas and extensive
            flooding of streams and rivers inland.
          </p>
        </div>
        <div>
          <img alt=" Storm Surge Damage in Saco" src="http://crise.gmri.org/sites/crise.gmri.org/files/2016-12/beach_car.png" />
          <p className="legend">
            Storm Surge Damage in Saco. This storm was responsible for ~$45
            million in damages.
          </p>
        </div>
        <div>
          <img alt="Coastal road and barrier damage during the Patriot's Day Storm" src="http://crise.gmri.org/sites/crise.gmri.org/files/2016-12/washedoutroad.png" />
          <p className="legend">
            Coastal road and barrier damage during the Patriot's Day Storm
          </p>
        </div>
        <div>
          <img alt="The 'Somerset Lagoon' in Portland's Bayside neighborhood" src="https://www.arcgis.com/sharing/rest/content/items/c4359dc37639481690fb65cc218f2496/resources/somersetlagoon__1496263627768__w1087.jpg" />
          <p className="legend">
            The 'Somerset Lagoon' in Portland's Bayside neighborhood during a
            King Tide
          </p>
        </div>

        <div>
        <img alt="Storm surge at Camp Ellis / Biddeford Pool" src="https://www.arcgis.com/sharing/rest/content/items/c4359dc37639481690fb65cc218f2496/resources/campellis__1496263202227__w900.jpg" />
          <p className="legend">Storm surge at Camp Ellis / Biddeford Pool</p>
        </div>
        <div>
        <img alt=" Portland Waterfront during a King Tide event" src=" https://www.arcgis.com/sharing/rest/content/items/c4359dc37639481690fb65cc218f2496/resources/portlandkingtide__1496263548992__w966.jpg" />
          <p className="legend">
            Portland Waterfront during a King Tide event
          </p>
        </div>

        <div>
        <img alt="Increase in sea level anomalies by year - NOAA" src="https://i1.wp.com/emmavreed.com/wp-content/uploads/2016/11/ezgif.com-9de85b22b4.gif?resize=604%2C453" />
          <p className="legend">Increase in sea level anomalies by year - NOAA</p>
        </div>
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