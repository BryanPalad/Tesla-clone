import React from 'react'
import './sectionthree.css';
import slide1 from '../../clip/slide1.mp4';
import slide2 from '../../clip/slide2.mp4';
import slide3 from '../../clip/slide3.mp4';
import slide4 from '../../clip/slide4.mp4';
import slide5 from '../../clip/slide5.mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sectionthree() {
    const settings = {
        fade: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'dots',
        className: 'slider-desc',
        autoPlay: true, 
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand',
        appendDots: dots => <ul>{dots}</ul>,
      };
    const videoclips = [
        {
            vid: `${slide1}`,
            title: 'Cinematic Experience',
            description: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
        },
        {
            vid: `${slide2}`,
            title: 'Yoke Steering',
            description: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
        },
        {
            vid: `${slide3}`,
            title: 'Perfect Environment',
            description: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
        },
        {
            vid: `${slide4}`,
            title: 'Redesigned Second Row',
            description: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
        },
        {
            vid: `${slide5}`,
            title: 'Console-Grade Gaming',
            description: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
        },

    ]
  return (
    <div>
        <div className="model-s-section3">
                <div className="slider">
                <Slider {...settings}>
                    {videoclips.map(({vid, title, description}) => {
                        return <div>
                        <video width="1200" height="900" loop muted autoPlay controls = ''>
                        <source src={vid} type="video/mp4"/>
                        <source src={vid} type="video/ogg"/>
                        Your browser does not support the video tag.
                        </video>
                        <div className="slider-desc">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        </div>
                    </div>
                    })}
                    </Slider>
                </div>
        </div>
    </div>
  )
}

export default Sectionthree