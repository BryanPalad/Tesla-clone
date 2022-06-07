import React from 'react'
import './sectiontwo.css';
import { Fade } from "react-reveal";

function Sectiontwo() {
  return (
    <div className="sroofs-section2">
    <div className="section-two-img">
      
    </div>
    <div className="lower-desc">
      <div className="lower-container">
        <div className="lower-items">
          <Fade bottom>
            <div className="lower-left">
              <p>Design</p>
              <h1>A Beautiful Roof</h1>
            </div>
            <div className="lower-right">
              <p>
              Install Solar Roof and power your home with a fully integrated solar and storage system. 
              With a seamless design, each tile looks great up-close or from the street, 
              complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.
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

export default Sectiontwo