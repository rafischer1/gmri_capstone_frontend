import React from 'react';
import { Modal, Button, Toast, Row, Input, Container, Col } from 'react-materialize';
import FloodDataList from '../dataComponents/FloodDataList'
import SubscribeLocationChart from '../dataComponents/SubscribeLocationChart'
import FloodingDatumChart from "../dataComponents/FloodingDatumChart";
import '../../CSS/Admin.css';
// import Typist from 'react-typist'

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
      adminToastMsg: "", 
      passwordVerfified: false, 
      floodData: [], 
      subscribers: 0, 
      showToast: false,
      subscribeData: [],
      sms: ""
    };
    }
  
  renderToast = (msg) => {
    if (msg === `SMS Sent!`) {
      console.log("msg:", msg)
      this.setState({
        showToast: true,
        adminToastMsg: msg,
        sms: "sms",
        passwordVerified: true,
      })
    } else {
      this.setState({
        showToast: true,
        sms: "",
        adminToastMsg: msg,
        passwordVerified: true,
      })
    }
   
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

    let response = await fetch(`${process.env.REACT_APP_API_URL}/admin/${ev.target[0].value}`);
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
      SeaLevelFt: +(ev.target[1].value),
      Category: ev.target[4].value
    }

    console.log("postbody data:", postBody)

    let response = await fetch(`${process.env.REACT_APP_API_URL}/data`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json"
      }
    });
   
    
    let resJson = await response.json()
    // console.log(resJson)
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
    let response = await fetch(`${process.env.REACT_APP_API_URL}/subscribe`)
    let resJson = await response.json()
    this.setState({
      subscribers: resJson.length,
      subscribeData: resJson
    })
  }
  getAlertData = async() => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/data`)
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
  buttonStyle = {
    margin: "5%",
    width: "33%",
    borderRadius: "10px",
    backgroundColor: "#576FC9"
  }

  hidden = {
    display: "none"
  }

  render() {
    return this.props.props === false ? (
      <div />
    ) : (
      <div className="adminPage">
        {!this.state.adminToastMsg && !this.state.passwordVerified ? (
          <Modal
            header="Admin Page"
            trigger={
              <Button className="teal signInAdmin">
                Password Verification
              </Button>
            }
          >
            <form id="form1" name="form1" onSubmit={this.checkPassword}>
              Sign In
              <input type="password" required placeholder="password" />
              <button className="btn teal" type="submit">
                Validate Password
              </button>
            </form>
            <div>{this.passwordCorrect}</div>
          </Modal>
        ) : this.state.showToast ? (
          <Toast
            className={`btn teal toast" ${this.state.sms}`}
            toast={this.state.adminToastMsg}
          >
            {this.state.adminToastMsg}
          </Toast>
        ) : (
          <div />
        )}
        {!this.state.passwordVerified ? (
          <div />
        ) : (
          <div>
            <div className="container topOfAdminPage">
              <Container className="adminStats">
                <Row>
                  <Col className="s12">
                    <SubscribeLocationChart
                      subscribeData={this.state.subscribeData}
                    />
                    <h5>Subscribers/Location</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="s12 curUsers">
                                      <div>
                      # of subscribers
                      <h4 style={{ color: "#576FC9" }}>
                        <b>{this.state.subscribers}</b>
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="s12">
                    <FloodingDatumChart floodData={this.state.floodData} />
                    <h5>Flood Category/Event</h5>
                  </Col>
                </Row>
              </Container>
              <Container className="smsContainer">
                <Row style={this.formStyle}>
                  <Col className="s12">
                    <form onSubmit={this.postSMS}>
                      <h4>Enter SMS Message</h4>
                      <Input type="textarea" label="SMS Message" s={12} required/>
                      <Input
                        type="number"
                        step="0.01"
                        s={4}
                        label="Sea Level Ft"
                        required
                      />
                      <Input
                        type="number"
                        step="0.01"
                        s={4}
                        label="Wind Mph"
                        required
                      />
                      <Input type="text" s={4} label="Wind Direction" required/>
                      <Input
                        s={12}
                        id="location"
                        type="select"
                        label="Flooding Category"
                        defaultValue="2"
                        required
                      >
                        <option defaultChecked={true} value="1">
                          Splash Over
                        </option>
                        <option value="2">Minor</option>
                        <option value="3">Moderate</option>
                        <option value="4">Major</option>
                        <option value="4">Extreme</option>
                      </Input>
                      <br />

                      <br />
                      <Button style={this.buttonStyle} type="submit">
                        Submit
                      </Button>
                    </form>

                    <span className="my-custom-class">
                      <h5>Example template for SMS:</h5>
                    </span>
                    <br />
                    <div className="container">
                      <h6>
                        Flooding expected (time of day) Portland Harbor.
                        High tide: (so many ft). (Any other information
                        regarding the weather system or important notice)
                        (Link to SLR Maine site) or (Link to City fo
                        Portland Twitter)
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <h5 className="h5">Data Display and Messages Sent</h5>

            <table className="messagesTable">
              <FloodDataList floodData={this.state.floodData} />
            </table>
          </div>
        )}
      </div>
    );
  }
};
