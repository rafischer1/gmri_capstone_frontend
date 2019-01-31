import React from 'react';
// import UnsubscribeInfo from '../visualComponents/UnsubscribeInfo';
import SeptemberRainInfo from '../visualComponents/SeptemberRainInfo'
import FormUnsubscribe from './FormUnsubscribe'

const Unsubscribe = ({unsubscribeCall, toastMsg}) => {
  return <div className="unsubscribe">
      <FormUnsubscribe unsubscribeCall={unsubscribeCall} toastMsg={toastMsg}/>
      <SeptemberRainInfo />
    </div>;
}

export default Unsubscribe
