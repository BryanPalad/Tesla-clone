import React from 'react'
import './sectionseven.scss';
import { Fade } from "react-reveal";

function Sectionseven() {
  return (
    <div className="spanel-section7">
    <div className="section-seven-img">
      
    </div>
    <div className="lower-desc">
      <div className="lower-container">
        <div className="lower-items">
          <Fade bottom>
            <div className="lower-left">
              <p>Control</p>
              <h1>Monitor and Optimize</h1>
            </div>
            <div className="lower-right">
              <p>
              With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.
              </p>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="lower-left-btn">
            <p>Order now</p>
          </div>
        </Fade>
      </div>
    </div>
  </div>
  )
}

export default Sectionseven