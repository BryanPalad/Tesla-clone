import React from 'react'
import './sectiontwo.scss';
import { Fade } from 'react-reveal';
import interior from '../../../Model S/images/interiordesign.jpg';
function Sectiontwo() {
  return (
    <div>
        <div className='model-s-section2'>
            <div className="second-section">
                <div className="second-section-title">
                    <Fade bottom>
                    <h1>Interior of the Future</h1>
                    </Fade>
                </div>
                <div className='second-section-img'>
                    <img src={interior} alt='interior'/>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Sectiontwo