import React from 'react'
import './sectionthree.scss';
import { Fade } from 'react-reveal';
import image from '../../images/section3image.png';
function Sectionthree() {
  return (
    <div className='spanel-section3'>
    <div className='section-three-left'>
        <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Design</p>
                    <h2>Sleek and Durable</h2>
                    <h4>Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. 
                    Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. 
                    Chat with an energy advisor to ask any questions about Tesla solar panels.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
        </div>
    </div>
    <div className='section-three-right'>
    <div className='clip'>
            <div className='clip-img'>
               <img src={image} alt='section3'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectionthree