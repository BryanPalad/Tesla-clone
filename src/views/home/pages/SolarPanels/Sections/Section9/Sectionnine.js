import React from 'react'
import './sectionnine.scss';
import FooterComp from '../../../../../../components/Footer';
import { Fade } from 'react-reveal';

function Sectionnine() {
  return (
    <>
    <div className='spanel-section9'>
        <div className='container'>
           <div className='section-nine-items'>
               <h1>Power Your Home</h1>
               <h2>Order now or talk to a Tesla Advisor if you have any questions</h2>
               <p>Order Now</p>
               <p>Chat with energy advisor</p>
               <a>Get Energy Updates</a>
           </div>
        </div>
        <FooterComp/>
    </div>
    </>
  )
}

export default Sectionnine