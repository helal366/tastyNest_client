import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyRecipeCard = ({ recipe }) => {
//   console.log(recipe);
  const {
    image,
    title,
    category,
    cuisineType,
    _id,
    instructions,
    ingredients,
    likeCount
  } = recipe;
  const handleDelete=(id)=>{
    // console.log(id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://server-tasty-nest.vercel.app/recipes/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    })
  }
});
  }
  return (
    <>
      <div className="bg-gray-200 border border-teal-600 rounded flex flex-col items-start p-6">
        <div className="flex-1">
          <div className="w-full flex justify-center mb-6 p-6">
            <img
              className="w-full h-60 bg-gray-200 rounded-lg border border-teal-600 p-1"
              src={image}
              alt={title}
            />
          </div>
          <h3 className="font-semibold text-teal-600">{title}</h3>
          <p className="text-sm">Category: {category}</p>
          <p className="text-sm mb-1">Cuisine Type: {cuisineType}</p>
            <p className="text-sm mb-4 font-medium text-teal-600">Likes: {likeCount}</p>
          <div className="mb-5">
            <h3 className="font-semibold text-teal-600">Instructions: </h3>
            <p>{instructions}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-teal-600">Ingredients:</h3>
            {ingredients.map((ingre, i) => (
              <p key={i}>
                {i + 1}: {ingre}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between">
          
            <button className="btn bg-teal-600/50 hover:bg-teal-900 hover:text-white">Update</button>
            <button onClick={()=>handleDelete(_id)}
            className="btn bg-teal-600/50 hover:bg-teal-900 hover:text-white">Delete</button>
        </div>
      </div>
    </>
  );
};

export default MyRecipeCard;
