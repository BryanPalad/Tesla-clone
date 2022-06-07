import React from 'react'
import './sectioneight.css';
import image from '../../image/section8image.jpg';
import { Fade } from 'react-reveal';

function Sectioneight() {
  return (
    <div className='sroof-section8'>
    <div className='section-eight-left'>
        <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Value</p>
                    <h2>Pay Less for Electricity</h2>
                    <h4>Solar Roof is the only roof that can help pay for itself with the energy you produce. 
                    Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
        </div>
    </div>
    <div className='section-eight-right'>
    <div className='clip'>
            <div className='clip-img'>
               <img src={image} alt='section8'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectioneight