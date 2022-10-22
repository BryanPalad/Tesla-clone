import React from 'react'
import './sectionfive.scss';
import { Fade } from 'react-reveal';
function Sectionfive() {
    const descItems = [
        {
            header: '1,020 hp',
            desc: 'Peak Power',
        },
        {
            header: '9.23 s',
            desc: '@155 mph 1/4 mile',
        },
        {
            header: '1.99 s',
            desc: '0-60 mph*',
        },
    ]
  return (
    <div className='model-s-section5'>
        <div className="section-five-img">
            <div className='image-desc'>
                <Fade bottom>
                {descItems.map(({header, desc}) => {
                        return <div className='image-desc-items'>
                        <h3>{header}</h3>
                        <p>{desc}</p>
                        </div>
                    })}   
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