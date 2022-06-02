import React from 'react'
import './sectionfour.css';
import image1 from '../../images/section4image1.jpg';
import image2 from '../../images/section4image2.jpg';
import clip1 from '../../clip/section4clip1.mp4';
import { Fade } from 'react-reveal';
function Sectionfour() {
  return (
    <div className='model-s-section4'>
        <div className='container'>
            <div className="group-item">
                <div className='item-one'>
                    <Fade bottom>
                    <div className='item-img'>
                    <img src={image1} alt='first'/>
                    </div>
                    <div className='item-one-desc'>
                        <div className="list-item-one">
                        <h3>Stay Connected</h3>
                        <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='item-two'>
                    <Fade bottom>
                    <div className='item-two-desc'>
                        <div className="list-item-two">
                        <h3>Immersive Sound</h3>
                        <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality</p>
                        </div>
                    </div>
                    <div className='item-vid'>
                    <video width="900" height="500" loop muted autoPlay controls = ''>
                    <source src={clip1} type="video/mp4"/>
                    <source src={clip1} type="video/ogg"/>
                    Your browser does not support the video tag.
                    </video>
                    </div>
                    </Fade>
                </div>
                <div className='item-one'>
                    <Fade bottom>
                    <div className='item-img'>
                    <img src={image2} alt='second'/>
                    </div>
                    <div className='item-one-desc'>
                        <div className="list-item-one">
                        <h3>Room for Everything</h3>
                        <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off-and your luggage too.</p>
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