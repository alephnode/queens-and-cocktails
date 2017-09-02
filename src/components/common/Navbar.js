import React from 'react';
import '../../style.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="/" className="logo">Queens & Cocktails</a>
        <a href="#about" className="no-tiny">About</a>
        <a href="#bios" className="no-tiny">Bios</a>
        <a href="#showtimes-tickets" className="no-tiny">Showtimes & Tickets</a>
      </div>
    );
  }
}

export default Navbar
