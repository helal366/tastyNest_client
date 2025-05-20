import React from "react";
import { useLoaderData } from "react-router";

const SingleRecipePage = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  const {
    image,
    title,
    category,
    cuisineType,
    _id,
    ingredients,
    instructions,
    preparationTimeMin,
  } = recipe;
  return (
    <div className="py-8">
      single recipe here
      <div className="bg-gray-200 border border-teal-600 rounded max-w-sm mx-auto flex flex-col justify-center p-5">
        <div className="w-full flex justify-center rounded-full border border-teal-600 mb-6">
          <img
            className=" rounded-full  p-1"
            src={image}
            alt={title}
          />
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">Category: {category}</p>
        <p className="text-sm ">Cuisine: {cuisineType}</p>
        <p className="text-sm mb-4">Preparation Time:{preparationTimeMin}</p>
        <div className="mb-5">
          <h3 className="font-semibold">Instructions: </h3>
          <p>{instructions}</p>
        </div>
        <div>
            <h3 className="font-semibold">Ingredients:</h3>
            {
                ingredients.map((ingre, i)=><p key={i} >{i+1}: {ingre}</p>)
            }
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
