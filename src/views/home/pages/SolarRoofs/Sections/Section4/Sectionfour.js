import React from 'react'
import './sectionfour.scss';
import clip from '../../clip/section4clip.webm';
import { Fade } from 'react-reveal';

function Sectionfour() {
  return (
    <div className='sroof-section4'>
        <div className='section-four-left'>
            <div className='clip'>
                <div className='clip-video'>
                    <video loop muted autoPlay controls = ''>
                    <source src={clip} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
        <div className='section-four-right'>
            <div className='right-side-desc'>
            <Fade bottom>
                <div className='right-side-item'>
                    <p>Durability</p>
                    <h2>Built to Last</h2>
                    <h4>Solar Roof tiles are durable, strong and engineered for all-weather protection. 
                        With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come.</h4>
                </div>
                <div className='right-side-btn'>
                    <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
        
    </div>
  )
}

export default Sectionfour