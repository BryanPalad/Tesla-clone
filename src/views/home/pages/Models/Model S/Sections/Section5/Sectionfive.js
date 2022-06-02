import React from 'react'
import './sectionfive.css';
import { Fade } from 'react-reveal';
function Sectionfive() {
  return (
    <div className='model-s-section5'>
        <div className="section-five-img">
            <div className='image-desc'>
                <Fade bottom>
                <div className='image-desc-items'>
                    <h3>1,020 hp</h3>
                    <p>Peak Power   </p>
                </div>
                <div className='image-desc-items'>
                    <h3>9.23 s</h3>
                    <p>@155 mph 1/4 mile</p>
                </div>
                <div className='image-desc-items'>
                    <h3>1.99 s</h3>
                    <p>0-60 mph*</p>
                </div>
                </Fade>
            </div>
        </div>
        <div className='lower-desc'>
            <div className='lower-container'>
                <div className='lower-items'>
                    <Fade bottom>
                    <div className='lower-left'>
                        <p>Plaid</p>
                        <h1>Beyond Ludicrous</h1>
                    </div>
                    <div className='lower-right'>
                    <p>Model S Plaid has the quickest acceleration of any vehicle in production. 
                        Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
                    </div>
                    </Fade>
                </div>
                <Fade bottom>
                <div className='lower-left-btn'>
                        <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Sectionfive