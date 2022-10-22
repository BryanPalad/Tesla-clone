import React from 'react'
import './sectioneleven.scss';
import image from '../../images/section11image.jpg';
import { Fade } from 'react-reveal';
function Sectioneleven() {
  return (
    <div className='model-s-section11'>
        <div className='section-nine-left'>
            <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Safety</p>
                    <h2>High Impact Protection</h2>
                    <h4>Model S is built from the ground up as an electric vehicle, 
                    with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. 
                    Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
        <div className='section-nine-right'>
            <img src={image} alt="car"/>
            <div className='car-specs'>
                
            </div>
        </div>
    </div>
  )
}

export default Sectioneleven