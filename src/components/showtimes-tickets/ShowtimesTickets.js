import React from 'react';

class ShowtimesTickets extends React.Component {
  render() {
    return (
      <div id="showtimes-tickets" className="showtimes-container">
        <div className="showtimes-title">Upcoming Shows &amp; Tickets</div>
        <div className="showtimes-time-container">
          <div className="showtime">
            Sept. 15, 2017 | 7-9 p.m., Doors at 6 p.m. | <span className="opener">Opening Night!</span>
          </div>
          <div className="showtime">
            Sept. 16, 2017 | 7-9 p.m., Doors at 6 p.m.
          </div>
            <div className="divide">
            --------------
            </div>
            <div className="showtime">
              Sept. 22, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
            <div className="showtime">
              Sept. 23, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
            <div className="divide">
            --------------
            </div>
            <div className="showtime">
              Sept. 29, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
            <div className="showtime">
              Sept. 30, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
            <div className="divide">
            --------------
            </div>
            <div className="showtime">
              Oct. 6, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
            <div className="showtime">
              Oct. 7, 2017 | 7-9 p.m., Doors at 6 p.m.
            </div>
          </div>
          <div className="showtimes-button-container">
            <button>Buy Tickets</button>
            <p>Coming Soon!!!</p>
          </div>
        </div>
    );
  }
}

export default ShowtimesTickets
