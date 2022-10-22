import React from 'react'
import './sectionfour.scss';
import { Fade } from 'react-reveal';
function Sectionfour() {
    const descItems = [
        {
            header: '2',
            desc: 'Independent motors digitally control torque to the front and rear wheels',
        },
        {
            header: '10 ms',
            desc: 'Dual motors respond to changing conditions in as little as 10 milliseconds',
        },
        {
            header: 'Clouds',
            desc: 'Unparalleled traction and control, in all weather conditions',
        },
    ]
  return (
    <div className='model-3-section4'>
    <div className="section-four-img">
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
                    <p>All-Wheel Drive</p>
                    <h1>Dual Motor</h1>
                </div>
                <div className='lower-right'>
                <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, 
                each with only one moving part for minimal maintenance and maximum durability. 
                Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
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

export default Sectionfour