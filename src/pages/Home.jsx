import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../assets/sliderOne.jpg";
import sliderTwo from "../assets/sliderTwo.jpg";
import sliderThree from "../assets/sliderThree.jpg";
import sliderFour from "../assets/sliderFour.jpg";
import sliderFive from "../assets/sliderFive.jpg";
import TypeWriterHome from "../components/TypeWriterHome";
import TypeWriteHomeTwo from "../components/TypeWriteHomeTwo";
import { Link } from "react-router";
import FoodTwo from "../lotttie/foodTwo/FoodTwo";
import FoodThree from "../lotttie/foodThree/FoodThree";
import FoodFour from "../lotttie/foodFour/FoodFour";
import FoodOne from "../lotttie/foodOne/FoodOne";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // top six like count
  // fetch(``)
  return (
    <>
      <section className="padding slider-container py-10 bg-teal-100">
        <Slider {...settings}>
          <div>
            <img src={sliderOne} alt="Slider One" />
          </div>
          <div>
            <img src={sliderTwo} alt="Slider Two" />
          </div>
          <div>
            <img src={sliderThree} alt="Slider Three" />
          </div>
          <div>
            <img src={sliderFour} alt="Slider Four" />
          </div>
          <div>
            <img src={sliderFive} alt="Slider Five" />
          </div>
        </Slider>
      </section>

      <section></section>
      <section className="padding bg-teal-100  py-10 ">
        <div className="bg-teal-200 rounded py-10 px-5 flex flex-col gap-10 justify-center shadow-2xl">
          <div className="flex gap-16 flex-wrap items-end bg-teal-100 p-8">
            <FoodOne></FoodOne>
            <FoodTwo></FoodTwo>
            <FoodThree></FoodThree>
            <FoodFour></FoodFour>
          </div>
          <TypeWriterHome></TypeWriterHome>
          <TypeWriteHomeTwo></TypeWriteHomeTwo>
          <div className="flex justify-center">
            <Link to="/all-recipes">
              <button className="btn bg-[#fe9eb9] text-xl border  border-purple-600 hover:bg-teal-700 hover:text-white">
                All Recipes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
