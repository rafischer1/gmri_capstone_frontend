import React from 'react';
import ChatLoginCard from './ChatLoginCard';
import SignUpCard from './SignUpCard';
import ChatComponent from './ChatComponent';

export default class ChatParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      token: '',
      // water_level: 0,
      loggedIn: false
    };
  }

  _chatLoginCallback = async (username, password) => {
    // console.log("hit the route", username, password);
    let reqBody = {
      username,
      password
    };
    let response = await fetch(`${process.env.REACT_APP_AWS}/login`, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 403) {
      return alert(
        'ERROR 403 🚨: Username or password incorrect - please login again. Or sign up first!'
      );
    }
    let resJson = await response.json();
    let token = resJson.token;
    // console.log("token", token, resJson, response.headers)
    if (resJson) {
      this.setState({ loggedIn: true, username: username, userToken: token });
    } else {
      alert('ERROR 409 🚨: try logging in again...stream / stream');
    }
  };

  _chatSignUpCallback = async (username, password) => {
    let reqBody = {
      username,
      password
    };
    let response = await fetch(`${process.env.REACT_APP_AWS}/users`, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      alert('👍🏼: Please login with username and password 🐋');
    }
    if (response.status === 409) {
      alert('🚨: Username already exists in database!');
    }
  };

  _logoutCallback = () => this.setState({ loggedIn: false, username: '' });

  render() {
    return (
      <div className='ChatParent'>
        {!this.state.loggedIn ? (
          <div className='login'>
            <ChatLoginCard chatLoginCallback={this._chatLoginCallback} />
            <SignUpCard chatSignUpCallback={this._chatSignUpCallback} />
          </div>
        ) : (
          <div className='chatLoginSuccess animated fadeOutUp'>
            <ChatLoginCard chatLoginCallback={this._chatLoginCallback} />
            <SignUpCard chatSignUpCallback={this._chatSignUpCallback} />
          </div>
        )}
        <div>
          {!this.state.loggedIn ? (
            <div className='Chat'>
              <ChatComponent
                username={this.state.username}
                token={this.state.userToken}
              />
            </div>
          ) : (
            <div className='Chat'>
              <ChatComponent
                username={this.state.username}
                token={this.state.userToken}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
