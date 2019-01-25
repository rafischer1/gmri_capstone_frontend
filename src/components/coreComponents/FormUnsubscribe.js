import React from 'react'
import {PhoneFormat} from '../function_exports/ConversionFuncs'
import { Input, Toast } from "react-materialize";


export default class FormUnsubscribe extends React.Component {
  unsubscribe = (callback) => (ev) => {
    ev.preventDefault();
    let phone = PhoneFormat(ev.target[0].value);
    if (phone.length === 10 && ev.target[1].checked === true) {
      callback(phone);
    }
  };

  unsubCss = {
    border: "2px solid black",
    textAlign: "left",
    width: "60%",
    marginLeft: "20%",
    padding: "5%",
    marginTop: "2%",
    borderRadius: "10px"
  }

  phoneInput = {
    marginLeft: "25%",
    width: "125%"
  }

  render() {
    return <form className="unsubscribe-form" style={this.unsubCss} onSubmit={this.unsubscribe(this.props.unsubscribeCall)}>
      <div className="form-group row">
        <h5>Input Phone Number to Unsubscribe from SLR SMS Messages</h5>
        <span className="input-field col s12">
          <label htmlFor="icon_phone" />
          <i className="material-icons prefix">phone</i>
          <Input style={this.phoneInput} id="phone" type="tel" pattern="[0-9]{10}" className="validate" placeholder="207-555-5555" required />
        </span>
        <label>
          <Input name="group1" type="checkbox" value="green" label="I  no longer want to receive messages" className="filled-in" defaultChecked="checked" />
          <span />
        </label>
      </div>
      {!this.props.toastMsg ? <button type="submit" className="btn btn-login float-right">
        Unsubscribe
          </button> : <Toast className="red" toast={this.props.toastMsg}>
          {this.props.toastMsg}
        </Toast>}
    </form>
  }
}
