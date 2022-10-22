import React from 'react'
import './sectionfour.scss';
import image1 from '../../images/section4image1.jpg';
import image2 from '../../images/section4image2.jpg';
import image3 from '../../images/section4image3.jpg';
import { Fade } from 'react-reveal';

function Sectionfour() {
  return (
    <div className='model-x-section4'>
    <div className='container'>
        <div className="group-item">
            <div className='item-one'>
                <Fade bottom>
                <div className='item-img'>
                <img src={image1} alt='first'/>
                </div>
                <div className='item-one-desc'>
                    <div className="list-item-one">
                    <h3>Wireless Gaming</h3>
                    <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
                    </div>
                </div>
                </Fade>
            </div>
            <div className='item-two'>
                <Fade bottom>
                <div className='item-two-desc'>
                    <div className="list-item-two">
                    <h3>Stay Connected</h3>
                    <p>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>
                    </div>
                </div>
                <div className='item-img'>
                <img src={image2} alt='first'/>
                </div>
                </Fade>
            </div>
            <div className='item-one'>
                <Fade bottom>
                <div className='item-img'>
                <img src={image3} alt='second'/>
                </div>
                <div className='item-one-desc'>
                    <div className="list-item-one">
                    <h3>Your Best Audio System</h3>
                    <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.</p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectionfour