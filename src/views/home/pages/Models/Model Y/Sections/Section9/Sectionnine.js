import React from 'react'
import './sectionnine.scss';
import FooterComp from '../../../../../../../components/Footer';
import { Fade } from 'react-reveal';
import image from '../../images/section8image.avif';
function Sectionnine() {
  return (
    <>
    <div className='model-y-section9'>
        <div className='container'>
            <div className='left-side'>
                <div className="header">
                    <h1>Order Model Y</h1>
                </div>
                <Fade bottom>
                <div className='buttons'>
                    <p>Order Now</p>
                    <p>Compare</p>
                </div>
                </Fade>
            </div>
            <div className='right-side'>
             <img src={image} alt='sectionnine'/>
            </div>
        </div>
        <FooterComp/>
    </div>
    </>
  )
}

export default Sectionnine