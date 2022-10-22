import React from 'react'
import './sectionsix.scss';
import { Fade } from 'react-reveal';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Sectionsix() {
  return (
    <div className='model-y-section6'>
        <div className="section-six-img">
            <div className='image-desc'>
                <Fade bottom>
                <div className='image-desc-items'>
                    <h3>360°</h3>
                    <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
                <div className='image-desc-items'>
                    <h3>250m</h3>
                    <p>Powerful visual processing at up to 250 meters of range</p>
                </div>
                <div className='image-desc-items'>
                    <RemoveRedEyeOutlinedIcon style={{fontSize: '50px'}}/>
                    <p>Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
                </div>
                </Fade>
            </div>
        </div>
        <div className='lower-desc'>
            <div className='lower-container'>
                <div className='lower-items'>
                    <Fade bottom>
                    <div className='lower-left'>
                        <p>Autopilot</p>
                        <h1>Future of Driving</h1>
                    </div>
                    <div className='lower-right'>
                    <p>Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
                    </div>
                    </Fade>
                </div>
                <Fade bottom>
                <div className='lower-left-btn'>
                        <p>Order now</p>
                </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Sectionsix