import React from 'react'
import './sectionfive.scss';
import clip from '../../clip/section5clip.mp4';
import { Fade } from 'react-reveal';

function Sectionfive() {
  return (
    <div className='model-y-section5'>
        <div className='section-five-left'>
            <div className='clip'>
                <div className='clip-video'>
                    <video loop muted autoPlay controls = ''>
                    <source src={clip} type="video/mp4"/>
                    </video>
                </div>
                <div className='clip-desc'>
                    <div className='clip-desc-item'>
                        <h2>330 mi</h2>
                        <p>Go anywhere with up to 330 miles of estimated range on a single charge</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2>15 min</h2>
                        <p>Recharge up to 162 miles in 15 minutes at Supercharger locations</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2>30,000 +</h2>
                        <p>Superchargers placed along well traveled routes around the world</p>
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
                    <h4>Model Y is fully electric, so you never need to visit a gas station again. 
                    If you charge overnight at home, you can wake up to a full battery every morning. 
                    And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. 
                    We currently have over 30,000 Superchargers worldwide, with six new locations opening every week.</h4>
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