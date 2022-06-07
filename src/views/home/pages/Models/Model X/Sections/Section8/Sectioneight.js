import React from 'react'
import './sectioneight.css';
import { Fade } from 'react-reveal';
function Sectioneight() {
    const descItems = [
        {
            header: '1,020 hp',
            desc: 'Peak Power',
        },
        {
            header: '9.99 s',
            desc: '1/4 mile',
        },
        {
            header: '2.5 s',
            desc: '0-60 mph*',
        },
    ]
  return (
    <div className='model-x-section8'>
        <div className="section-eight-img">
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
                        <p>Exterior</p>
                        <h1>Designed for Efficiency</h1>
                    </div>
                    <div className='lower-right'>
                    <p>With the lowest drag coefficient of any SUV, Model X is built for speed and range. 
                    Refined aerodynamic elements work together with new wheels and tires to help you travel farther, 
                    with sharper handling and better ride comfort.</p>
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

export default Sectioneight