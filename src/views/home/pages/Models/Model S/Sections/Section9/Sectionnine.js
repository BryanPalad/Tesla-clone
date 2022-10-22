import React from 'react'
import './sectionnine.scss';
import clip from '../../clip/section9clip.mp4';
import { Fade } from 'react-reveal';
function Sectionnine() {
  return (
    <div className='model-s-section9'>
        <div className='section-nine-left'>
            <div className='clip'>
                <div className='clip-video'>
                    <video loop muted autoPlay controls = ''>
                    <source src={clip} type="video/mp4"/>
                    </video>
                </div>
                <div className='clip-desc'>
                    <div className='clip-desc-item'>
                        <h2>405 mi</h2>
                        <p>Go anywhere with up to 405 miles of estimated range on a single charge</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2>15 min</h2>
                        <p>Recharge up to 200 miles in 15 minutes at Supercharger locations</p>
                    </div>
                    <div className='clip-desc-item'>
                        <h2>30,000 +</h2>
                        <p>Superchargers placed along popular routes</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section-nine-right'>
            <div className='right-side-desc'>
            <Fade bottom>
                <div className='right-side-item'>
                    <p>Range</p>
                    <h2>Go Anywhere</h2>
                    <h4>Travel farther on a single charge than any other electric vehicle—and keep going with access to 30,000+ Superchargers globally. 
                    By combining up to 405 miles of estimated range with Tesla fast charging technology, 
                    you’ll spend less time charging and even more time on the road.</h4>
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

export default Sectionnine