import React, { Component } from 'react'
import './style.css'
import Navbar from './components/common/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <div className="logo-container">
            <img src={require("./assets/images/qandclogo.png")}/>
          </div>
          <p>coming soon ...</p>
        </div>
      </div>
    );
  }
}

export default App;
