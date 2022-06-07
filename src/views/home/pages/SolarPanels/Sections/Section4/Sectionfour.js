import React from 'react'
import './sectionfour.css';
import { Fade } from "react-reveal";

function Sectionfour() {
  return (
    <div className="spanel-section4">
    <div className="section-four-img">
    </div>
    <div className="lower-desc">
      <div className="lower-container">
        <div className="lower-items">
          <Fade bottom>
            <div className="lower-left">
              <p>Powerwall</p>
              <h1>Home Battery Backup</h1>
            </div>
            <div className="lower-right">
              <p>
              Powerwall is bundled with every Tesla solar purchase, allowing you to store your solar energy for use anytime—at night or during an outage.
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

export default Sectionfour