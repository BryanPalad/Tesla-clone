import React from 'react'
import './sectiontwelve.css';
import image from '../../images/section12image.png';
import { Fade } from 'react-reveal';

function Sectiontwelve() {
  return (
    <div className='model-x-section12'>
        <div className='section-twelve-left'>
            <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Safety</p>
                    <h2>Built for Safety</h2>
                    <h4>Model X is built from the ground up as an electric vehicle, 
                    with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. 
                    Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
        <div className='section-twelve-right'>
            <img src={image} alt="car"/>
            <div className='car-specs'>
                
            </div>
        </div>
    </div>
  )
}

export default Sectiontwelve