import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Some text</p>
          <button onClick = {()=>this.goToLogin()}>Login</button>
          <button onClick = {()=>this.goToSplash()}>Splash</button>
          <button onClick= {()=>this.goToSignUp()}>Signup</button>
      </div>
    );
  }
}

export default App;
