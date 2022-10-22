import React from 'react'
import './sectiontwo.scss';
import clip from '../../clip/section2clip.mp4';
import { Fade } from 'react-reveal';
function Sectiontwo() {
  return (
    <div className='spanel-section2'>
    <div className='section-two-left'>
    <div className='left-side-desc'>
        <Fade bottom>
            <div className='left-side-item'>
                <p>Savings</p>
                <h2>Electricity For Less</h2>
                <h4>Use solar energy to power your home and reduce your dependence on the grid. 
                Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. 
                Learn more about your potential savings in our Design Studio.</h4>
            </div>
            <div className='left-side-btn'>
                <p>See your savings</p>
            </div>
            </Fade>
        </div>
    </div>
    <div className='section-two-right'>
        <div className='clip'>
            <div className='clip-video'>
                <video loop muted autoPlay controls = ''>
                <source src={clip} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Sectiontwo