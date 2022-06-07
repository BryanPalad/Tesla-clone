import React from 'react'
import './sectionfive.css';
import image from '../../image/section5image.jpg';
import image2 from '../../image/section5image2.png';
import { Fade } from 'react-reveal';

function Sectionfive() {
  return (
    <div className='model-3-section5'>
        <div className='section-five-left'>
            <div className='clip'>
                    <div className='clip-img'>
                    <img src={image} alt='section5'/>
                    </div>
                    <div className='clip-desc'>
                        <div className='clip-desc-item'>
                            <h2>358 mi</h2>
                            <p>Go anywhere with up to 358 mi of estimated range on a single charge</p>
                        </div>
                        <div className='clip-desc-item'>
                            <h2>15 min</h2>
                            <p>Recharge up to 175 mi in 15 minutes at Supercharger locations</p>
                        </div>
                        <div className='clip-desc-item'>
                            <h2>30,000+</h2>
                            <p>Superchargers placed along well-traveled routes around the world</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='section-five-right'>
            <div className='right-side-desc'>
                <Fade bottom>
                    <div className='right-side-item'>
                        <p>Range</p>
                        <h2>Go Anywhere</h2>
                        <h4>Model 3 is fully electric, so you never need to visit a gas station again. 
                        If you charge overnight at home, you can wake up to a full battery every morning. 
                        And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. 
                        We currently have over 30,000 Superchargers worldwide, with six new locations opening every week.</h4>
                        <img src={image2} alt='section5'/>
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

export default Sectionfive