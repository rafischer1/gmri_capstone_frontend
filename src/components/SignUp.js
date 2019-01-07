import React from 'react'

const SignUp = () => {
  return <div className="container index">
    <section className="login-block">
      <div className="container">
        <div className="row">
          <div className="col-md-4 login-sec">
            <h2 className="text-center">Sign Up For Flooding Notifications</h2>
            <form className="login-form">
              <div className="form-group row">
                <div className="col-10">
                  <label htmlFor="example-tel-input" className="col-2 col-form-label">Telephone</label>
                  <input className="form-control" type="tel" value="1-(207)-555-5555" id="example-tel-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="sel1">Select Location:</label>
                  <select className="form-control" id="sel1">
                    <option>Portland</option>
                    <option>South Portland</option>
                    <option>Falmouth</option>
                    <option>Cape Elizabeth</option>
                  </select>
                </div>
                <br />
                <br />
                <button type="submit" className="btn btn-login float-right">Sign Up</button>
                <a type="a" href='./proposal.html' className="btn btn-login float-right info">Continue to Site</a>
              </form>
            </div>
            <div className="col-md-8 banner-sec">

            </div>
          </div>

        </div>
      </section>
      <footer>

      </footer>
    </div>
}


export default SignUp