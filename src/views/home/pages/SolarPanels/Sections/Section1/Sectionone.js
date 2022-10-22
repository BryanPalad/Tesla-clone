import React from 'react'
import './sectionone.scss';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function Sectionone() {
  return (
    <div>
    <div className="spanels-section1">
        <div className='first-section'>
            <div className="item-text">
                <h1>Solar for Existing Roofs</h1>
                <p>Lowest Cost Solar Panels in America—Money-back guarantee</p>
            </div>
            <div className="item-desc">
                <div className='item-desc-4'>
                <h1>Solar</h1>
                <p>Convert Sunlight to Energy</p>
                </div>
                <div className='item-desc-4'>
                <center>
                <AttachMoneyIcon style={{fontSize: '35px', backgroundColor: 'white'}}/>
                </center>
                <p>Guaranteed Lowest Price for Solar</p>
                </div>
                <div className='item-desc-4'>
                <h1>24/7</h1>
                <p>Energy Monitoring</p>
                </div>
                <div className='ordernow'>
                    <h3>Order Now</h3>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sectionone
