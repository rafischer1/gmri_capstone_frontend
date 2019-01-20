import React from 'react'
import {Carousel} from 'react-materialize'

const Information = () => {
  return <div className="informationDataPage">
      Flip through Carousel impages of flooding in Portland
      <Carousel options={{ fullWidth: true }} images={["https://i1.wp.com/emmavreed.com/wp-content/uploads/2016/11/ezgif.com-9de85b22b4.gif?resize=604%2C453", 
     "Hi ho scroll here"]} />
    </div>;
}

export default Information;


