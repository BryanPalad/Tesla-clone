import React from 'react'
import './sectionsix.scss';
import image from '../../images/section6image.avif';
import { Fade } from 'react-reveal';

function Sectionsix() {
  return (
    <div className='spanel-section6'>
    <div className='section-six-left'>
        <div className='left-side-desc'>
            <Fade bottom>
                <div className='left-side-item'>
                    <p>Efficiency</p>
                    <h2>Maximum Solar Production</h2>
                    <h4>Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, 
                    even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable.</h4>
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