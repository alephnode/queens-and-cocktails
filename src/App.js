import React, { Component } from 'react'
import './style.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import About from './components/about/About'
import VegasHeroImage from './components/vegas-hero-image/VegasHeroImage'
import ShowtimesTease from './components/showtimes-tease/ShowtimesTease'
import Bios from './components/bios/Bios'
import TeaseBios from './components/tease-bios/TeaseBios'
import ShowtimesTickets from './components/showtimes-tickets/ShowtimesTickets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header-section">
          <div className="logo-container">
            <img alt="" src={require("./assets/images/qandclogo.png")}/>
          </div>
          <p>Be Fabulous.</p>
        </div>
        <About />
        <VegasHeroImage />
        <TeaseBios />
        <Bios />
        <ShowtimesTease />
        <ShowtimesTickets />
        <Footer />
      </div>
    );
  }
}

export default App;
