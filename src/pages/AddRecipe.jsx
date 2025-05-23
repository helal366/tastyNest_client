import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts-providers/AuthContext";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const AddRecipe = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const { user, loading, setAllRecipes } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const userEmail = user ? user.email : "";
  const handleAddRecipe = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { preparationTimeMin, ingredientsInput, likeCount, ...rest } =
      Object.fromEntries(formData.entries());

      const ingredientsParsed = ingredientsInput.replace(/[[\]]/g, '').replace(/[&/\\#+()$~%.'":*?<>{};]/g, '').split(",").map(ingredient=>ingredient.trim().replace(/'/g, '"')).filter(item=>item);
      
    
    const newRecipe = {
      ...rest,
      ingredients: ingredientsParsed,
      likeCount: parseInt(likeCount),
      preparationTimeMin: parseInt(preparationTimeMin),
    };
    ;

    // add to mongodb server
    fetch(`https://server-tasty-nest.vercel.app/recipes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your recipe added");
          
          setAllRecipes(prev=>[...prev, {newRecipe, _id:data.insertedId}])
        }
      });
  };
  return (
    <div className="py-10 padding">
      <div className="card bg-base-100 w-full mx-auto max-w-3xl shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-xl text-center font-semibold mb-4">
            Please Add Your Recipe Here!
          </h2>
          <form onSubmit={handleAddRecipe} className="fieldset">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Title"
              required
            />
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Ex: Breakfast, Lunch, Dinner, Dessert, Vegan"
              required
            />
            <label className="label">Cuisine Type</label>
            <input
              type="text"
              name="cuisineType"
              className="input w-full"
              placeholder="Cuisine Type (ex: American, Chinese, Indian)"
              required
            />
            <label className="label">Preparation Time</label>
            <input
              type="number"
              name="preparationTimeMin"
              className="input w-full"
              placeholder="Preparation Time (in min and a number)"
              required
            />
            <label className="label">Instructions</label>
            <textarea
              name="instructions"
              className="textarea textarea-bordered h-40 w-full"
              placeholder="Please write cooking instructions here"
              required
            ></textarea>

            <label className="label">Ingredients</label>
            <textarea
              name="ingredientsInput"
              className="textarea textarea-bordered h-28 w-full"
              placeholder="Please write your ingredients here and separate them by comma(,). Example: chicken, oil, garlic"
              required
            ></textarea>

            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Image URL"
              required
            />
            <label className="label">Like Count</label>
            <input
              type="number"
              name="likeCount"
              className="input w-full"
              placeholder="starting value is 0"
              value={`${parseInt(0)}`}
              readOnly
            />
            <label className="label">User Email </label>
            <input
              type="email"
              name="adderEmail"
              className="input w-full"
              placeholder="User Email"
              value={userEmail}
              readOnly
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
