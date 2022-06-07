import React from 'react'
import './sectionthree.css';
import image from '../../image/section3image.jpg';
import { Fade } from 'react-reveal';
function Sectionthree() {
  return (
    <div className='sroof-section3'>
    <div className='section-three-left'>
        <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Energy Storage</p>
                    <h2>Backup Protection</h2>
                    <h4>Powerwall is a compact home battery that is bundled with every Tesla solar purchase, 
                    providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, 
                    so you can power your home anytime—at night or during an outage.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                    <p>Learn More</p>
                </div>
                </Fade>
        </div>
    </div>
    <div className='section-three-right'>
    <div className='clip'>
            <div className='clip-img'>
               <img src={image} alt='section7'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectionthree