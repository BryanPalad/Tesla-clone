import React from 'react'
import './sectionfifteen.scss';
import FooterComp from '../../../../../../../components/Footer';
import { Fade } from 'react-reveal';
function Sectionfifteen() {
  return (
      <>
    <div className='model-s-section15'>
        <div className='container'>
            <div className='left-side'>
                <div className="header">
                    <h1>Model S</h1>
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

export default Sectionfifteen