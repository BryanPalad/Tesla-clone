import React from 'react'
import './sectionnine.scss';
import FooterComp from '../../../../../../../components/Footer';
import { Fade } from 'react-reveal';
import image from '../../image/section9image.jpg';
function Sectionnine() {
  return (
    <>
    <div className='model-3-section9'>
        <div className='container'>
            <div className='left-side'>
                <div className="header">
                    <h1>Experience Model 3</h1>
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