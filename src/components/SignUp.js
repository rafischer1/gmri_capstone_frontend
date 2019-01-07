import React from 'react'
import {Row, Input} from 'react-materialize'
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  return <div className="container signup">
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">
                Sign Up For Flooding Notifications
              </h2>
              <form className="login-form">
                <div className="form-group row">
                <span class="input-field col s6">
                  <i class="material-icons prefix">phone</i><br />
                  <Input id="icon_telephone" type="tel" class="validate" placeholder="207-555-5555"></Input>
                    <label for="icon_telephone"></label>
        </span>
                </div>
                <div className="form-group">
                  <Row>
                    <Input s={12} type="select" label="Select Location:" defaultValue="1">
                      <option value="1">Portland</option>
                      <option value="2">South Portland</option>
                      <option value="3">Cape Elizabeth</option>
                      <option value="4">Falmouth</option>
                    </Input>
                  </Row>
                  
                </div>
                <br />
                <br />
                <button type="submit" className="btn btn-login float-right">
                  Sign Up
                </button>
                <a type="a" href="./proposal.html" className="btn btn-login float-right info">
                  Continue to Site
                </a>
              </form>
            </div>
            <div className="col-md-8 banner-sec" />
          </div>
        </div>
      </section>
    </div>;
}


export default SignUp