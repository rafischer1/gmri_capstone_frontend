import React from "react";
import { Modal, Button, Toast, Row, Input } from "react-materialize";
import FloodDataList from '../dataComponents/FloodDataList'

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        adminToastMsg: "", 
        passwordVerfified: false,
        floodData: []
    };
    }
  
  renderToast = (msg) => {
    this.setState({
      adminToastMsg: msg,
      passwordVerified: true,
      subscribers: 20,
      
    })
  }

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
      }, 2000);
    }

  }

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
    console.log("resjson data:", resJson)
    if (resJson === null) {
      alert('Post succesfull!')
      this.getAlertData()
    }
  }

  componentDidMount() {
    this.getSubscribers()
    this.getAlertData()
  }

  getSubscribers = async() => {
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/subscribe`)
    let resJson = await response.json()
    this.setState({
      subscribers: resJson.length
    })
  }

  getAlertData = async () => {
    let response = await fetch(`${process.env.REACT_APP_DEV_API_URL}/data`)
    let resJson = await response.json()
    console.log("get all data:", resJson)
    this.setState({
      floodData: resJson
    })
  }

  formStyle = {
    textAlign: "center",
    width: "80%",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "3%"

  }

  buttonStyle = {
    margin: "5%"
  }

  render() {
    return this.props.props === false ? <div /> : <div className="adminPage">
      {!this.state.adminToastMsg ? <Modal header="Admin Page" trigger={<Button className="teal">Password Verification
      </Button>}>
        <form onSubmit={this.checkPassword}>Sign In
      <input type="password" required placeholder="password" />
          <button type="submit">Validate Password</button>
        </form>
        <hr />
        <div>{this.passwordCorrect}</div>
      </Modal> : <Toast className="teal" toast={this.state.adminToastMsg}>
        {this.state.adminToastMsg}
      </Toast>}
      {!this.state.passwordVerified ? <div></div> : <div>
      <h4>Use the following template to format the message for SMS:</h4>
      <h5>Flooding expected (time of day) Portland Harbor. High tide: (so many ft). (Any other information regarding the weather system or important notice) (Link to SLR Maine site) or (Link to City fo Portland Twitter)</h5>
          <Row style={this.formStyle}>
          <form onSubmit={this.postSMS}>
          <Input type="textarea" label="SMS Message" s={12} />
            <Input type="number" step="0.01" s={4} label="Sea Level Ft" />
         
            <Input type="number" step="0.01" s={4} label="Wind Mph" />
          <br />
          <Input type="text" s={4} label="Wind Direction" />
          <br />
          <Button style={this.buttonStyle} type="submit">Submit</Button>
          </form>
        </Row>
      <div>Current # of subscribers in system {this.state.subscribers}</div>
      <hr />
        <table><FloodDataList floodData={this.state.floodData} /></table>
      </div>}
    </div>;
  }
};

// Msg        string`json:"msg"`
// WindMPH    float64`json:"windmph"`
// WindDir    string`json:"winddir"`
// SeaLevelFt float64`json:"sealevelft"`