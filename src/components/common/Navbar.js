import React from 'react';
import '../../style.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a className="logo">Queens & Cocktails</a>
        <a className="no-tiny">About</a>
        <a className="no-tiny">Bios</a>
        <a className="no-tiny">Showtimes & Tickets</a>
      </div>
    );
  }
}

export default Navbar
