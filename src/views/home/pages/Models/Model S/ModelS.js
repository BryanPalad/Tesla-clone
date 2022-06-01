import React from 'react'
import './models.css';
import interior from '../Model S/images/interiordesign.jpg';
import slide1 from './clip/slide1.mp4';
import slide2 from './clip/slide2.mp4';
import slide3 from './clip/slide3.mp4';
import slide4 from './clip/slide4.mp4';
import slide5 from './clip/slide5.mp4';
import { Fade } from 'react-reveal';
import Carousel from 'react-bootstrap/Carousel';
import { Paper, Button } from '@mui/material'


function ModelS() {
    const videoclips = [
        {
            vid: {slide1},
            title: 'Cinematic Experience',
            description: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
        },
        {
            vid: {slide2},
            title: 'Yoke Steering',
            description: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
        },
        {
            vid: {slide3},
            title: 'Perfect Environment',
            description: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
        },
        {
            vid: {slide4},
            title: 'Redesigned Second Row',
            description: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
        },
        {
            vid: {slide5},
            title: 'Console-Grade Gaming',
            description: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
        },

    ]
  return (
  <div className='models-section'>
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
    <div className='model-s-section2'>
            <div className="second-section">
                <div className="second-section-title">
                    <Fade bottom>
                    <h1>Interior of the Future</h1>
                    </Fade>
                </div>
                <div className='second-section-img'>
                    <img src={interior} alt='interior'/>
                </div>
            </div>
    </div>
    <div className="model-s-section3">
        <div className='third-section'>
            <div className="slider">
            <Carousel>
  <Carousel.Item>
   <video width="1200" height="900" loop muted autoPlay controls = ''>
            <source src={slide3} type="video/mp4"/>
            <source src={slide3} type="video/ogg"/>
            Your browser does not support the video tag.
            </video>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video width="1200" height="900" loop muted autoPlay controls = ''>
            <source src={slide3} type="video/mp4"/>
            <source src={slide3} type="video/ogg"/>
            Your browser does not support the video tag.
            </video>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            {/* <video width="1200" height="900" loop muted autoPlay controls = ''>
            <source src={slide3} type="video/mp4"/>
            <source src={slide3} type="video/ogg"/>
            Your browser does not support the video tag.
            </video> */}
           
            </div>
            <div className='slider-details'>

            </div>
        </div>
    </div>
  </div>
  )
}

export default ModelS