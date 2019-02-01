import React from 'react';
import SeptemberRainInfo from '../visualComponents/SeptemberRainInfo'
import FormUnsubscribe from './FormUnsubscribe'

const Unsubscribe = ({unsubscribeCall, toastMsg}) => <div className="unsubscribe">
      <FormUnsubscribe unsubscribeCall={unsubscribeCall} toastMsg={toastMsg}/>
      <SeptemberRainInfo />
    </div>;


export default Unsubscribe
