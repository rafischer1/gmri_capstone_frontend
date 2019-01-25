import React from "react";
import UnsubscribeInfo from "../visualComponents/UnsubscribeInfo";
import FormUnsubscribe from './FormUnsubscribe'

const Unsubscribe = ({unsubscribeCall, toastMsg}) => {
  return <div className="unsubscribe">
      <FormUnsubscribe unsubscribeCall={unsubscribeCall} toastMsg={toastMsg}/>
      <UnsubscribeInfo number={1}/>
    </div>;
}

export default Unsubscribe
