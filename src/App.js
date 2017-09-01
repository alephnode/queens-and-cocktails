import React, { Component } from 'react'
import './style.css'
import Navbar from './components/common/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <h2>Queens & Cocktails</h2>
          <p>coming soon ...</p>
        </div>
      </div>
    );
  }
}

export default App;
