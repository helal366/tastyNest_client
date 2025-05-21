import React, { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../contexts-providers/AuthContext";
import { toast } from "react-toastify";
const MyRecipeCard = ({ recipe }) => {
  const { allRecipes, setAllRecipes } = useContext(AuthContext);
  const {
    image,
    title,
    category,
    cuisineType,
    _id,
    instructions,
    ingredients,
    likeCount,
    preparationTimeMin,
  } = recipe;

  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-tasty-nest.vercel.app/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainings = allRecipes.filter(
                (recipe) => recipe._id !== id
              );
              setAllRecipes(remainings);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const form=e.target;
    const formData=new FormData(form);
    const { preparationTimeMin, ingredientsInput, likeCount, ...rest } =
      Object.fromEntries(formData.entries());
    const ingredientsStringified = ingredientsInput.replace(/'/g, '"');
    const ingredientsParsed = JSON.parse(ingredientsStringified);
    
    const newRecipe = {
      ...rest,
      ingredients: ingredientsParsed,
      likeCount: parseInt(likeCount),
      preparationTimeMin: parseInt(preparationTimeMin),
    };
    // console.log(newRecipe, _id);

    // update in mongodb database
    fetch(`https://server-tasty-nest.vercel.app/recipes/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        toast.success(`Your recipe updated successfully.`);
        // console.log(data)
      }
    })
  };
  return (
    <> 
    
      <div className="bg-gray-200 border border-teal-600 rounded flex flex-col items-start p-2 md:p-4 lg:p-6 ">
        <div className="flex-1">
          <div className="w-full flex justify-center mb-6 p-2 md:p-4 lg:p-6">
            <img
              className="w-full h-60 bg-gray-200 rounded-lg border border-teal-600 p-1"
              src={image}
              alt={title}
            />
          </div>
          <h3 className="font-semibold text-teal-600">{title}</h3>
          <p className="text-sm">Category: {category}</p>
          <p className="text-sm mb-1">Cuisine Type: {cuisineType}</p>
          <p className="text-sm mb-4 font-medium text-teal-600">
            Likes: {likeCount}
          </p>
          <div className="mb-5">
            <h3 className="font-semibold text-teal-600">Instructions: </h3>
            <div>{instructions} </div>
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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-teal-600/50 hover:bg-teal-900 hover:text-white"
            onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
          >
            Update
          </button>

          <dialog
            id={`my_modal_${_id}`}
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl bg-teal-200/50">
                <div className="card-body">
                  <h2 className="text-xl text-center font-semibold mb-4">
                    Please Update Your Recipe Here!
                  </h2>
                  <form onSubmit={handleUpdateRecipe} className="fieldset">
                    <label className="label">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="input w-full"
                      defaultValue={title}
                    />
                    <label className="label">Category</label>
                    <input
                      type="text"
                      name="category"
                      className="input w-full"
                      defaultValue={category}
                    />
                    <label className="label">Cuisine Type</label>
                    <input
                      type="text"
                      name="cuisineType"
                      className="input w-full"
                      defaultValue={cuisineType}
                    />
                    <label className="label">Preparation Time</label>
                    <input
                      type="number"
                      name="preparationTimeMin"
                      className="input w-full"
                      defaultValue={preparationTimeMin}
                    />
                    <label className="label">Instructions</label>
                    <textarea
                      name="instructions"
                      className="textarea textarea-bordered h-40 w-full"
                      defaultValue={instructions}
                      required
                    ></textarea>

                    <label className="label">Ingredients</label>
                    <textarea
                      name="ingredientsInput"
                      className="textarea textarea-bordered h-28 w-full"
                      defaultValue={JSON.stringify(ingredients)}
                      required
                    ></textarea>

                    <label className="label">Image URL</label>
                    <input
                      type="text"
                      name="image"
                      className="input w-full"
                      defaultValue={image}
                    />
                    <label className="label">Like Count</label>
                    <input
                      type="number"
                      name="likeCount"
                      className="input w-full"
                      placeholder="starting value is 0"
                      defaultValue={likeCount}
                    />

                    <button 
                    type="submit" className="btn bg-black text-white hover:bg-gray-300 hover:text-black mt-4">
                      Update Recipe
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-teal-100 hover:bg-teal-700 hover:text-white">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-teal-600/50 hover:bg-teal-900 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MyRecipeCard;
