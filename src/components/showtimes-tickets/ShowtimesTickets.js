import React from 'react';

class ShowtimesTickets extends React.Component {
  render() {
    return (
      <div id="showtimes-tickets" className="showtimes-container">
        <div className="showtimes-title">Upcoming Shows &amp; Packages</div>
        <div className="showtimes-time-container">
          <div className="showtime">
            <p>Join us every Friday &amp; Saturday from 8:45 - 10:20 p.m.<br/></p>
            <p>Doors at 8 p.m.<br/></p>
            <p>All-You-Can Drink from 8:20 - 10:20 p.m.</p>
          </div>
        </div>
          <div className="showtimes-button-container">
            <a href="https://www.ticketsource.us/lasvegasdrag"><button>Purchase All-You-Can Drink Package</button></a>
          </div>
        </div>
    );
  }
}

export default ShowtimesTickets
