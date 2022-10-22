import React from 'react'
import './sectionone.scss';

function SectionOne() {
  return (
    <div>
        <div className="model-s-section1">
            <div className='first-section'>
                <div className="item-text">
                    <h1>Model S</h1>
                    <p>Plaid</p>
                </div>
                <div className="item-desc">
                    <div className='item-desc-4'>
                    <h1>396 mi</h1>
                    <p>Range (EPA est.)</p>
                    </div>
                    <div className='item-desc-4'>
                    <h1>1.99s</h1>
                    <p>0-60 mph*</p>
                    </div>
                    <div className='item-desc-4'>
                    <h1>200 mph</h1>
                    <p>Top Speed†</p>
                    </div>
                    <div className='item-desc-4'>
                    <h1>1,020 hp</h1>
                    <p>Peak Power</p>
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

export default SectionOne
