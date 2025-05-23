import React, { useEffect } from "react";
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
import { Link, useLoaderData } from "react-router";
import FoodTwo from "../lotttie/foodTwo/FoodTwo";
import FoodThree from "../lotttie/foodThree/FoodThree";
import FoodFour from "../lotttie/foodFour/FoodFour";
import FoodOne from "../lotttie/foodOne/FoodOne";
import RecipeCard from "../components/RecipeCard";
import EggFlorentine from "../assets/eggs-florentine.png";
import ChickenWings from "../assets/chicken-wings.png"
import PanCake from "../assets/japaneese-pancake-breakfast.png";
import ChickenKaraage from "../assets/chicken-karaage.png";
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const topSixRecipes = useLoaderData();
  // console.log(topSixRecipes);
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
  

  return (
    <>
      <section className="padding slider-container py-10">
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

      <section className="padding py-10">
        <div className="bg-teal-500 shadow-2xl py-10 px-5">
          <div className="flex flex-col gap-2 mb-5 lg:mb-10">
            <h2 className="text-2xl font-semibold text-center bg-teal-200 py-2 shadow-md inset-1/2">
              Six Top Like Count Recipes:
            </h2>
            <Link className="self-end" to="/all-recipes">
              <button className="btn border-none">See All Recipes</button>
            </Link>
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSixRecipes.map((topRecipe) => (
              <RecipeCard key={topRecipe._id} recipe={topRecipe}></RecipeCard>
            ))}
          </div>
        </div>
      </section>



      <section className="padding py-10">
        <div className="bg-teal-500 shadow-2xl py-10 px-5">
            <h2 className="text-2xl font-semibold text-center bg-teal-200 py-2 shadow-sm mb-8">
              Popular Recipes:
            </h2>
            
          <div className="bg-teal-100 px-5 py-10 mb-10">
            <div className="flex justify-center mb-8">
              <img className="max-h-[300px] rounded-lg" src={EggFlorentine} alt="EggFlorentine" />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
              Egg Florentine
            </h2>
            <p className="text-justify text-gray-500">
              It’s probably no surprise that if choosing between having brunch at a restaurant or making it at home, I’m squarely on team Brunch At Home, especially when we find a way to pull it off and still sleep in. There’s nothing worse than waiting too long for a table only to be served an overcooked, unseasoned omelet, home fries with those gnarly bits of green pepper in there (I will die on the hill that nobody has ever longed for green peppers in their potatoes), or soggy bacon.
            </p>
          </div>
          <div className="bg-teal-100 px-5 py-10 mb-10">
            <div className="flex justify-center mb-8">
              <img className="max-h-[300px] rounded-lg" src={ChickenWings} alt="ChickenWings" />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
              Chicken Wings
            </h2>
            <p className="text-justify text-gray-500">
              Sink your teeth into these golden, crispy chicken wings, where flavor meets perfection in every bite. Marinated in a bold blend of spices, these wings are oven-roasted or deep-fried to a perfect crunch — then tossed in a sticky, sweet & spicy glaze that clings to each wing like a delicious secret. Whether you're serving them at game night, a family feast, or a midnight craving session, these wings are guaranteed to disappear fast. Crispy on the outside, juicy on the inside, and coated with flavor that'll have you licking your fingers clean.
            </p>
          </div>
          <div className="bg-teal-100 px-5 py-10 mb-10">
            <div className="flex justify-center mb-8">
              <img className="max-h-[300px] rounded-lg" src={PanCake} alt="PanCake" />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
              Japanese Pan Cake
            </h2>
            <p className="text-justify text-gray-500">
              Treat yourself to a cloud-like experience with this fluffy Japanese pancake — an irresistible tower of soft, airy perfection. Each bite melts in your mouth like a dream, with a golden, lightly crisped edge that gives way to a center as juicy and tender as a soufflé. Topped with a glossy drizzle of maple syrup, fresh fruits, or a dollop of whipped cream, this pancake is not just breakfast — it’s a heavenly indulgence. Delicately sweet, ultra-fluffy, and impossibly light — it’s like eating a sweet, delicious cloud.
            </p>
          </div>
          <div className="bg-teal-100 px-5 py-10 mb-10">
            <div className="flex justify-center mb-8">
              <img className="max-h-[300px] rounded-lg" src={ChickenKaraage} alt="ChickenKaraage" />
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-3">
              Chicken Karaage
            </h2>
            <p className="text-justify text-gray-500">
              Japan’s beloved fried chicken that redefines comfort food. Each tender bite bursts with juicy, umami-rich flavor, thanks to its marinade of soy sauce, garlic, and ginger. Coated in a light layer of seasoned potato starch and fried to golden perfection, the crust delivers an irresistible crunch while locking in all that succulent, mouth-watering goodness.
            </p>
          </div>
          
        </div>
       
      </section>



      <section className="padding py-10">
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
