import React from 'react'
import './sectionone.scss';

function Sectionone() {
  return (
    <div>
    <div className="model-3-section1">
        <div className='first-section'>
            <div className="item-text">
                <h1>Model 3</h1>
                {/* <p>Plaid</p> */}
            </div>
            <div className="item-desc">
                <div className='item-desc-4'>
                <h1>3.1 s</h1>
                <p>0-60 mph*</p>
                </div>
                <div className='item-desc-4'>
                <h1>358 mi</h1>
                <p>Range (EPA est.)</p>
                </div>
                <div className='item-desc-4'>
                <h1>AWD</h1>
                <p>Dual Motor</p>
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