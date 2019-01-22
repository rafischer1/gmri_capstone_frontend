import React from "react";
import {Input, Toast} from "react-materialize";
import SixFeetInfo from "../visualComponents/SixFeetInfo";



const Unsubscribe = ({unsubscribeCall, toastMsg}) => {
  const unsubscribe = (callback) => (ev) => {
    ev.preventDefault();
    let phone = ev.target[0].value;
    if (phone.length === 10 && ev.target[1].checked === true) {
      callback(phone);
    }
  };

  const unsubCss = {
     border: "2px solid black",
     width: "50%",
     marginLeft: "25%",
     padding: "5%"
  }

  return <div className="unsubscribe">
      <form className="unsubscribe-form" style={unsubCss} onSubmit={unsubscribe(unsubscribeCall)}>
        <div className="form-group row">
          <span className="input-field col s12">
            <i className="material-icons prefix">phone</i>
            <br />
            <Input id="phone" type="tel" pattern="[0-9]{10}" className="validate" placeholder="207-555-5555" required />
            <label htmlFor="icon_phone" />
          </span>
          <label>
            <Input name="group1" type="checkbox" value="green" label="I  no longer want to receive messages" className="filled-in" defaultChecked="checked" />
            <span />
          </label>
        </div>

      {!toastMsg ? <button type="submit" className="btn btn-login float-right">
        Unsubscribe
        </button>  : <Toast className="red" toast={toastMsg}>
        {toastMsg}
      </Toast>}
      </form>
   
      <SixFeetInfo />
    </div>;
}

export default Unsubscribe
