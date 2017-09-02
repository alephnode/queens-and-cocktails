import React, { Component } from 'react'
import './style.css'
import Navbar from './components/common/Navbar'
import About from './components/about/About'
import Bios from './components/bios/Bios'
import ShowtimesTickets from './components/showtimes-tickets/ShowtimesTickets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header-section">
          <div className="logo-container">
            <img src={require("./assets/images/qandclogo.png")}/>
          </div>
          <p>coming soon ...</p>
        </div>
        <About />
        <Bios />
        <ShowtimesTickets />
      </div>
    );
  }
}

export default App;
