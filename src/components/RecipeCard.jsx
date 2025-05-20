import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const { image, title, category, cuisineType } = recipe;
  return (
    <div className="bg-gray-200 border border-teal-600 rounded flex flex-col justify-center p-2">
      <div className="w-full flex justify-center">
        <img
          className="w-30 h-30 rounded-lg border border-teal-600 p-1"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-center text-sm">{category}</p>
      <p className="text-center text-sm mb-4">{cuisineType}</p>
      
      <Link className="flex justify-center" to='/single-recipe-page'>
        <button className="btn">Details</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
