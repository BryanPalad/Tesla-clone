import React from 'react'
import './sectioneight.css';
import image1 from '../../images/section8image1.jpg';
import image2 from '../../images/section8image2.jpg';
import image3 from '../../images/section8image3.jpg';
import { Fade } from 'react-reveal';
function Sectioneight() {
  return (
    <div className='model-s-section8'>
        <div className='container'>
            <div className="group-item">
                <div className='item-two'>
                    <Fade bottom>
                    <div className='item-two-desc'>
                        <div className="list-item-two">
                        <h3>Relentless Performance</h3>
                        <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                        </div>
                    </div>
                    <div className='item-img'>
                    <img src={image1} alt='first'/>
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
                        <h3>Optimized Aerodynamics</h3>
                        <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='item-two'>
                    <Fade bottom>
                    <div className='item-two-desc'>
                        <div className="list-item-two">
                        <h3>Refined Stylingd</h3>
                        <p>An iconic silhouette meets refreshed, elegant proportions.</p>
                        </div>
                    </div>
                    <div className='item-img'>
                    <img src={image3} alt='first'/>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectioneight