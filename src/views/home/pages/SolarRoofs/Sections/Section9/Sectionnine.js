import React from 'react'
import './sectionnine.scss';
import FooterComp from '../../../../../../components/Footer';
import { Fade } from 'react-reveal';

function Sectionnine() {
  return (
    <>
    <div className='sroof-section9'>
        <div className='container'>
          <Fade bottom>
           <div className='section-nine-items'>
               <h1>Transform Your Roof</h1>
               <h2>Order now or talk to a Tesla Advisor if you have any questions</h2>
               <p>Order Now</p>
               <p>Chat with energy advisor</p>
               <a>Get Energy Updates</a>
           </div>
           </Fade>
        </div>
        <FooterComp/>
    </div>
    </>
  )
}

export default Sectionnine