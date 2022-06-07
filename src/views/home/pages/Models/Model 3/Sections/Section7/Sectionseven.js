import React from 'react'
import './sectionseven.css';
import { Fade } from 'react-reveal';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SignalWifi0BarIcon from '@mui/icons-material/SignalWifi0Bar';
function Sectionseven() {
  return (
    <div className='model-3-section7'>
    <div className="section-seven-img">
        <div className='image-desc'>
            <Fade bottom>
            <div className='image-desc-items'>
                <h3>15 inch</h3>
                <p>A touchscreen display designed to improve over time</p>
            </div>
            <div className='image-desc-items'>
                <SignalWifi0BarIcon style={{fontSize: '50px'}}/>
                <p>Over-the-air software updates introduce new features, functionality and performance</p>
            </div>
            <div className='image-desc-items'>
                <RemoveRedEyeOutlinedIcon style={{fontSize: '50px'}}/>
                <p>An expansive Glass Roof provides more headroom and UV protection</p>
            </div>
            </Fade>
        </div>
    </div>
    <div className='lower-desc'>
        <div className='lower-container'>
            <div className='lower-items'>
                <Fade bottom>
                <div className='lower-left'>
                    <p>Interior</p>
                    <h1>Built Around the Driver</h1>
                </div>
                <div className='lower-right'>
                <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, 
                and access all driver controls in the central 15-inch touchscreen. 
                The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
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

export default Sectionseven