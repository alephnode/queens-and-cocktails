import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#about" className="no-tiny">About</a>
        <a href="#bios" className="no-tiny">Bios</a>
        <a href="#showtimes-packages" className="no-tiny">Showtimes & Packages</a>
      </div>
    );
  }
}

export default Navbar
