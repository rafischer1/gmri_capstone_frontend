import React from "react";
import { Modal, Button } from "react-materialize";


export default class Admin extends React.Component {
  
  checkPassword = async (ev) => {
    ev.preventDefault()
    console.log("check password", ev.target[0].value)
    let response = await fetch(`http://localhost:3003/admin/${ev.target[0].value}`);
    let resJson = await response.json()
    console.log("resjson for admin:", resJson)
  }

  render() {
    return this.props.props === false ? <div /> : <div className="adminPage">
      <Modal header="Admin Page" trigger={<Button className="teal darken-2">Password Verification
      </Button>}>
      <form onSubmit={this.checkPassword}>Sign In
      <input type="password" required placeholder="password" />
      <button type="submit">Validate Password</button>
      </form>
      <hr />
      <div>{this.passwordCorrect}</div>
      </Modal>
    </div>;
  }
};
