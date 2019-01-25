import React from 'react'
import {Row, Input, Toast} from 'react-materialize'
import {PhoneFormat} from '../function_exports/ConversionFuncs'
import "react-phone-number-input/style.css";
import ScrollAnimation from "react-animate-on-scroll";


const SignUp = ({ subscribeCall, toastMsg }) => {

  const Subscribe = (callback) => (ev) => {
    ev.preventDefault();
    let phone = ev.target[0].value;
    phone = PhoneFormat(phone);
    let location = ev.target[1].value;
    if (phone.length === 10 && location) {
      ev.target[0].value = ''
      ev.target[1].value = 1
      callback(phone, location);
    } 
  };

  return <div className="container signup">
    
      <ScrollAnimation animateIn="fadeInDown">
        <section className="login-block">

          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">
                  Sign Up For Sea Level Rise/Flooding Notifications
                </h2>
                <form className="login-form" onSubmit={Subscribe(subscribeCall)}>
                  <div className="form-group row">
                    <span className="input-field col s12">
                      <i className="material-icons prefix">phone</i>
                      <br />
                      <Input id="phone" type="tel" pattern="[0-9]{10}" className="validate" placeholder="207-555-5555" required />
                      <label htmlFor="icon_phone" />
                    </span>
                  </div>
                  <div className="form-group">
                    <Row>
                      <Input s={12} id="location" type="select" label="Select Location:" defaultValue="1">
                        <option defaultChecked value="1">
                          Portland
                        </option>
                        <option value="2">South Portland</option>
                        <option value="3">Cape Elizabeth</option>
                        <option value="4">Falmouth</option>
                        <option value="4">Westbrook</option>
                        <option value="5">Other</option>
                      </Input>
                    </Row>
                  </div>
                  <br />
                  <br />
                  {!toastMsg ? <button type="submit" className="btn btn-login float-right">
                      Sign Up
                    </button> : <Toast toast={toastMsg}>{toastMsg}</Toast>
                    }
                </form>
              </div>
              <div className="col-md-8 banner-sec" />
            </div>
          </div>
          
        </section>
      <ScrollAnimation className="animated infinite bounce delay-4s" animateIn="bounce"><span style={{ fontSize: "44px", color: "darkgrey", width: "44px" }}>↓</span>
      </ScrollAnimation>
      </ScrollAnimation>
<br />
    
 
    </div>;
};


export default SignUp


