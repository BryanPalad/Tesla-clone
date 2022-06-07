import React from 'react'
import './sectionone.css';

function Sectionone() {
  return (
    <div>
        <div className="model-y-section1">
            <div className='first-section'>
                <div className="item-text">
                    <h1>Model Y</h1>
                    {/* <p>Plaid</p> */}
                </div>
                <div className="item-desc">
                    <div className='item-desc-4'>
                    <h1>76 cu ft</h1>
                    <p>Cargo Space</p>
                    </div>
                    <div className='item-desc-4'>
                    <h1>330 mi</h1>
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