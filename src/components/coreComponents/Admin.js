import React from "react";
import { Modal, Button, Toast, Row, Input } from "react-materialize";
import FloodDataList from '../dataComponents/FloodDataList'
import SubscribeLocationChart from '../dataComponents/SubscribeLocationChart'

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
      adminToastMsg: "", 
      passwordVerfified: false, 
      floodData: [], 
      subscribers: 0, 
      showToast: false,
      subscribeData: []
    };
    }
  
  renderToast = (msg) => {
    this.setState({
      showToast: true,
      adminToastMsg: msg,
      passwordVerified: true,
    })
  }
    renderErrorToast = (msg) => {
      this.setState({
        showToast: true,
        adminToastMsg: msg,
        passwordVerified: false,
      })
    }
  
  /**
   * Sign in verification function on the initial
   * modal form
   * 
   */
  checkPassword = async(ev) => {
    ev.preventDefault()

    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/admin/${ev.target[0].value}`);
    let resJson = await response.json()

    if (resJson === 200) {
      let msg = `Password Verified!`;
      this.renderToast(msg);

      setTimeout(() => {
        msg = "";
        this.renderToast(msg);
        this.setState({
          showToast: false
        })
      }, 2000);

    } else if (resJson === 400) {
      let msg = `Password Incorrect!`;
      this.renderErrorToast(msg);
      setTimeout(() => {
        msg = "";
        this.renderErrorToast(msg);
        this.setState({
          showToast: false
        })
      }, 2000);
    }
  }

  /**
   * Post both to the SMS system and
   * as an entry to the database
   * 
   */
  postSMS = async(ev) => {
    ev.preventDefault()

    let postBody = {
      Msg: ev.target[0].value,
      WindMPH: +(ev.target[2].value),
      WindDir: ev.target[3].value,
      SeaLevelFt: +(ev.target[1].value)
    }

    console.log("postbody data:", postBody)

    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/data`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let resJson = await response.json()

    if (resJson === null) {
      let msg = `SMS Sent!`;
      this.renderToast(msg);

      setTimeout(() => {
        msg = "";
        this.renderToast(msg);
        this.setState({
          showToast: false
        })
      }, 2000);

      this.getAlertData()
    }
  }
  
  /***
   * Two component did mount functions
   * to retrieve the # of subscribers
   * and posted SMS data posts
   */

  getSubscribers = async() => {
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/subscribe`)
    let resJson = await response.json()
    this.setState({
      subscribers: resJson.length,
      subscribeData: resJson
    })
  }
  getAlertData = async() => {
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/data`)
    let resJson = await response.json()
 
    this.setState({
      floodData: resJson
    })
  }

  componentDidMount() {
    this.getSubscribers()
    this.getAlertData()
  }

  // in component styles for select elements
  formStyle = {
    textAlign: "center",
    width: "80%",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "3%",
    marginTop: "5%"

  }

  buttonStyle = {
    margin: "5%"
  }

  curUsersCss = {
    fontSize: "20px"
  }

  hidden = {
    display: "none"
  }

  render() {
    return this.props.props === false ? <div /> : <div className="adminPage">
        {!this.state.adminToastMsg && !this.state.passwordVerified ? <Modal header="Admin Page" trigger={<Button className="teal">
                Password Verification
              </Button>}>
            <form id="form1" name="form1" onSubmit={this.checkPassword}>
              Sign In
              <input type="password" required placeholder="password" />
              <button className="btn teal" type="submit">
                Validate Password
              </button>
            </form>
            <div>{this.passwordCorrect}</div>
          </Modal> : this.state.showToast ? <Toast className="btn teal" toast={this.state.adminToastMsg}>
            {this.state.adminToastMsg}
          </Toast> : <div />}
        {!this.state.passwordVerified ? <div /> : <div>
            <div className="container topOfAdminPage">
              <Row style={this.formStyle}>
                <form onSubmit={this.postSMS}> Enter Data for SMS Message
                  <Input type="textarea" label="SMS Message" s={12} />
                  <Input type="number" step="0.01" s={4} label="Sea Level Ft" />
                  <Input type="number" step="0.01" s={4} label="Wind Mph" />
                  <br />
                  <Input type="text" s={4} label="Wind Direction" />
                  <br />
                  <Button style={this.buttonStyle} type="submit">
                    Submit
                  </Button>
                </form>
              </Row>
              <Row>
                <h4>Example template for SMS:</h4>
              </Row>
              <Row>
                <h5>
                  Flooding expected (time of day) Portland Harbor. High
                  tide: (so many ft). (Any other information regarding the
                  weather system or important notice) (Link to SLR Maine
                  site) or (Link to City fo Portland Twitter)
                </h5>
              </Row>
            </div>
            <hr />
            <div style={this.curUsersCss}>
              Current # of subscribers in system
              <h4>{this.state.subscribers}</h4>
              <SubscribeLocationChart subscribeData={this.state.subscribeData}/>
            </div>
            <table>
              <FloodDataList floodData={this.state.floodData} />
            </table>
          </div>}
      </div>;
  }
};
