import React from 'react'
import './sectionseven.scss';
import { Fade } from 'react-reveal';
function Sectionseven() {
  return (
    <div className='model-s-section7'>
        <div className="section-seven-img">
        </div>
        <div className='lower-desc'>
            <div className='lower-container'>
                <div className='lower-items'>
                    <Fade bottom>
                    <div className='lower-left'>
                        <p>Exterior</p>
                        <h1>Designed for Efficiency</h1>
                    </div>
                    <div className='lower-right'>
                    <p>With a drag coefficient of just .208 Cd, the lowest on the planet, 
                    Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive 
                    performance so you can take corners quicker and with more confidence.</p>
                    </div>
                    </Fade>
                </div>
                <Fade bottom>
                <div className='lower-left-btn'>
                        <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Sectionseven