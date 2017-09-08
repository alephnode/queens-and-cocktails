import React from 'react';

class Bios extends React.Component {
  render() {
    return (
      <div className="bio-box-container">
          <div className="bio-box">
            <img className="bolivia" alt="" src={require("../../assets/images/bolivia-570h-final.jpg")}/>
          </div>
          <div className="bio-box">
            <img className="briana" alt="" src={require("../../assets/images/briana-570h-final.jpg")}/>
          </div>
          <div className="bio-box">
            <img className="derrick" alt="" src={require("../../assets/images/derrick-570h-final.jpg")}/>
          </div>
          <div className="bio-box">
            <img className="felicity" alt="" src={require("../../assets/images/felicity-570h-final.jpg")}/>
          </div>
          <div className="bio-box">
            <img className="nebraska" alt="" src={require("../../assets/images/nebraska-570h-final.jpg")}/>
          </div>
          <div className="bio-box">
            <img className="toni" alt="" src={require("../../assets/images/toni-570h-final.jpg")}/>
          </div>
      </div>
    );
  }
}

export default Bios
