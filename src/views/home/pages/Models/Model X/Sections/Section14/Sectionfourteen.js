import React from 'react'
import './sectionfourteen.scss';
import FooterComp from '../../../../../../../components/Footer';
import { Fade } from 'react-reveal';

function Sectionfourteen() {
  return (
    <>
    <div className='model-x-section14'>
        <div className='container'>
            <div className='left-side'>
                <div className="header">
                    <h1>Model X</h1>
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

export default Sectionfourteen