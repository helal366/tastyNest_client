import React from "react";
import noRecipe from "./noRecipePageImage.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const NoRecipePage = () => {
  return (
    <div>
      <div className="h-60 flex justify-center w-full">
        <Lottie animationData={noRecipe} loop={true}></Lottie>
      </div>
      <div className="w-full flex justify-center ">
        <h1 className="text-4xl my-10 inline-block bg-teal-600/20 p-5 rounded">
          No Recipe Here. You can add your recipe.
        </h1>
      </div>
        <div className="flex justify-center">
            <Link to="/add-recipe">
            <button className="btn bg-teal-600/50 hover:bg-teal-900 hover:text-white">
                Go to Add Recipe
            </button>
            </Link>
        </div>
    </div>
  );
};

export default NoRecipePage;
