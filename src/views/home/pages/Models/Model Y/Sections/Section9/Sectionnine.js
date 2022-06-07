import React from 'react'
import './sectionnine.css';
import FooterComp from '../../../../../../../components/Footer';
import { Fade } from 'react-reveal';

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
                
            </div>
        </div>
    </div>
    <FooterComp/>
    </>
  )
}

export default Sectionnine