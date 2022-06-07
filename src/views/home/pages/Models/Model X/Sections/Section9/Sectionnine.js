import React from 'react'
import './sectionnine.css';
import { Fade } from 'react-reveal';
import image1 from '../../images/section9image1.jpg';
import image2 from '../../images/section9image2.jpg';
import image3 from '../../images/section9image3.jpg';
function Sectionnine() {
  return (
    <div className='model-x-section9'>
        <div className='container'>
            <div className="group-item">
                <div className='item-two'>
                    <Fade bottom>
                    <div className='item-two-desc'>
                        <div className="list-item-two">
                        <h3>New Wheels and Tires</h3>
                        <p>New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look.</p>
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
                        <p>Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='item-two'>
                    <Fade bottom>
                    <div className='item-two-desc'>
                        <div className="list-item-two">
                        <h3>Refined Styling</h3>
                        <p>Exterior design combines an iconic look with elegant proportions.</p>
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

export default Sectionnine