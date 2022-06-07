import React from 'react'
import './sectionthree.css';
import { Fade } from 'react-reveal';
function Sectionthree() {
    const descItems = [
        {
            header: '3.1 s',
            desc: 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds',
        },
        {
            header: '162 mph',
            desc: 'Improved handling and aerodynamics allow for a top speed of 162 mph',
        },
        {
            header: 'AWD',
            desc: 'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
        },
    ]
  return (
    <div className='model-3-section3'>
    <div className="section-three-img">
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
                    <p>Performance</p>
                    <h1>Quickest Acceleration</h1>
                </div>
                <div className='lower-right'>
                <p>Model 3 comes with the option of dual motor all-wheel drive, 
                20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. 
                A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</p>
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

export default Sectionthree