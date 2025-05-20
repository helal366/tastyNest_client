import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from '../assets/sliderOne.jpg';
import sliderTwo from '../assets/sliderTwo.jpg';
import sliderThree from '../assets/sliderThree.jpg';
import sliderFour from '../assets/sliderFour.jpg'
import sliderFive from '../assets/sliderFive.jpg';

const Home = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
    return (
       <div className="slider-container pt-3">
      <Slider {...settings}>
        <div >
          <img src={sliderOne} alt="Slider One" />
        </div>
        <div>
          <img src={sliderTwo} alt="Slider Two" />
        </div>
        <div>
         <img src={sliderThree} alt="Slider Three" />
        </div>
        <div>
         <img src={sliderFour} alt="Slider Four"/>
        </div>
        <div>
         <img src={sliderFive} alt="Slider Five"/>
        </div>
       
      </Slider>
    </div>
    );
};

export default Home;