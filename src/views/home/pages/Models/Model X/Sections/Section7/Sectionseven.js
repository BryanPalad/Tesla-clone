import React from 'react'
import './sectionseven.scss';
import image from '../../images/section7image.jpg';
import { Fade } from 'react-reveal';
function Sectionseven() {
  return (
    <div className='model-x-section7'>
        <div className='section-seven-left'>
            <div className='left-side-desc'>
                <Fade bottom>
                    <div className='left-side-item'>
                        <p>Utility</p>
                        <h2>Even More Capable</h2>
                        <h4>With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, 
                        Model X delivers maximum utility. Front doors open and close automatically, 
                        Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.</h4>
                    </div>
                    <div className='left-side-btn'>
                        <p>Order now</p>
                    </div>
                    </Fade>
            </div>
        </div>
        <div className='section-seven-right'>
        <div className='clip'>
                <div className='clip-img'>
                   <img src={image} alt='section7'/>
                </div>
                <div className='clip-desc'>
                    <div className='clip-desc-item'>
                        <h2>91ft³</h2>
                        <p>Storage capacity</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2>5,000 lbs</h2>
                        <p>Towing capacity</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2></h2>
                        <p>Falcon Wing doors</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionseven