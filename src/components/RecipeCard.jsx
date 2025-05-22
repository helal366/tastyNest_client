import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
//   console.log(recipe);
  const { image, title, category, cuisineType, _id } = recipe;
  return (
    <div className="bg-gray-200 border border-teal-600 text-teal-600 rounded flex flex-col justify-center p-2">
      <div className="w-full flex justify-center mb-5">
        <img
          className="w-[80%] h-40 rounded-lg border border-teal-600 p-1"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-center text-sm">Category: {category}</p>
      <p className="text-center text-sm mb-4">Cuisine Type: {cuisineType}</p>

      <Link className="flex justify-center" to={`/single-recipe-page/${_id}`}>
        <button className="btn bg-teal-500 text-gray-950 hover:bg-teal-900 hover:text-gray-100">Details</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
