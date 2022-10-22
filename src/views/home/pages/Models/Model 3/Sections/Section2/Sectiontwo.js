import React from 'react'
import './sectiontwo.scss';
import image from '../../image/section2image.png';
import { Fade } from 'react-reveal';

function Sectiontwo() {
  return (
    <div className='model-3-section2'>
        <div className='section-two-left'>
            <div className='clip'>
                    <div className='clip-img'>
                    <img src={image} alt='section2'/>
                    </div>
                </div>

        </div>
        <div className='section-two-right'>
            <div className='right-side-desc'>
                <Fade bottom>
                    <div className='right-side-item'>
                        <p>Safety</p>
                        <h2>Built for Safety</h2>
                        <h4>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.</h4>
                        <br/>
                        <h4>Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.</h4>
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

export default Sectiontwo