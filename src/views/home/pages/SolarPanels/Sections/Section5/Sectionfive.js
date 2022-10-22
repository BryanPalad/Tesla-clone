import React from 'react'
import './sectionfive.scss';
import { Fade } from "react-reveal";
import clip from '../../clip/section5clip.mp4';
function Sectionfive() {
  return (
    <div className="spanel-section5">
    <div className="section-five-vid">
            <video loop muted autoPlay controls = ''>
                <source src={clip} type="video/mp4"/>
            </video>
    </div>
    <div className="lower-desc">
      <div className="lower-container">
        <div className="lower-items">
          <Fade bottom>
            <div className="lower-left">
              <p>Power On</p>
              <h1>Order and Installation</h1>
            </div>
            <div className="lower-right">
              <p>
              From permitting to powering on, we’ll take care of everything. 
              After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. 
              Chat with an energy advisor to ask any questions about going solar with Tesla.
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

export default Sectionfive