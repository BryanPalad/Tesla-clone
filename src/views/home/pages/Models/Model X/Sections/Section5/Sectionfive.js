import React from 'react'
import './sectionfive.scss';
import { Fade } from 'react-reveal';

function Sectionfive() {
    const descItems = [
        {
            header: '1,020 hp',
            desc: 'Peak Power',
        },
        {
            header: '9.99 s',
            desc: '1/4 mile',
        },
        {
            header: '2.5 s',
            desc: '0-60 mph*',
        },
    ]
  return (
    <div className='model-x-section5'>
        <div className="section-five-img">
            <div className='image-desc'>
                <Fade bottom>
                {descItems.map(({header, desc}) => {
                        return <div className='image-desc-items'>
                        <h3>{header}</h3>
                        <p>{desc}</p>
                        </div>
                    })}   
                </Fade>
            </div>
        </div>
        <div className='lower-desc'>
            <div className='lower-container'>
                <div className='lower-items'>
                    <Fade bottom>
                    <div className='lower-left'>
                        <p>Plaid</p>
                        <h1>Beyond Ludicrous</h1>
                    </div>
                    <div className='lower-right'>
                    <p>With the most power and quickest acceleration of any SUV, 
                    Model X Plaid is the highest performing SUV ever built. 
                    All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.</p>
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

export default Sectionfive