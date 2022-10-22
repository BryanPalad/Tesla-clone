import React from 'react'
import './sectionten.scss';
import image from '../../images/section10image.jpg';
import { Fade } from 'react-reveal';
function Sectionten() {
  return (
    <div className='model-x-section10'>
        <div className='section-ten-left'>
            <div className='clip'>
                    <div className='clip-img'>
                    <img src={image} alt='section7'/>
                    </div>
                    <div className='clip-desc'>
                        <div className='clip-desc-item'>
                            <h2>348 mi</h2>
                            <p>Go anywhere with up to 348 miles of estimated range on a single charge</p>
                        </div>
                        <div className='clip-desc-item'>
                            <h2>175 mi</h2>
                            <p>Supercharge up to 175 miles in 15 minutes</p>
                        </div>
                        <div className='clip-desc-item'>
                            <h2>30,000+</h2>
                            <p>Superchargers placed along popular routes</p>
                        </div>
                    </div>
                </div>

        </div>
        <div className='section-ten-right'>
            <div className='right-side-desc'>
                <Fade bottom>
                    <div className='right-side-item'>
                        <p>Range</p>
                        <h2>Go Anywhere</h2>
                        <h4>Travel farther on a single charge than any other electric SUV—and keep going with access to 30,000+ Superchargers globally. 
                        By combining up to 348 miles of estimated range with Tesla fast charging technology, 
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

export default Sectionten