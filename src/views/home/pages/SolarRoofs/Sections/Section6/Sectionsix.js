import React from 'react'
import './sectionsix.css';
import image from '../../image/section6image.avif';
import { Fade } from 'react-reveal';

function Sectionsix() {
  return (
    <div className='sroof-section6'>
    <div className='section-six-left'>
        <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Efficiency</p>
                    <h2>Maximum Solar Production</h2>
                    <h4>Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. 
                    Combined with Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. With built-in connectivity, 
                    Tesla Solar Inverter will continue to improve with each over-the-air software update.</h4>
                </div>
                <div className='left-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
        </div>
    </div>
    <div className='section-six-right'>
    <div className='clip'>
            <div className='clip-img'>
               <img src={image} alt='section6'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectionsix