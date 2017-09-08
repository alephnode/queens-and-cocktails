import { ParallaxController, Parallax } from 'react-scroll-parallax'
import React from 'react'
ParallaxController.init()

const MainImage = () =>
// <div className="header-section">
//   <div className="logo-container">
//     <img alt="" src={require("../../assets/images/qandclogo.png")}/>
//   </div>
//   <p>Be Fabulous.</p>
// </div>
<div className="header-section">
<Parallax
    className="custom-class"
    offsetYMax={-50}
    offsetYMin={20}
    fasterScrollRate
    tag="figure"
>
 <div className="logo-container">
    <img alt="" src={require("../../assets/images/qandclogo.png")} />
</div>
</Parallax>
</div>

export default MainImage
