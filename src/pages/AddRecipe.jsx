import React, { useContext } from "react";
import AuthContext from "../contexts-providers/AuthContext";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const AddRecipe = () => {
  // https://server-tasty-nest.vercel.app/recipes
//   http://localhost:5000/recipes
  //   https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const userEmail = user ? user.email : "";
  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {preparationTimeMin, ...rest} = Object.fromEntries(formData.entries());
    const newRecipe={
        ...rest,
        preparationTimeMin: parseInt(preparationTimeMin)
    }
    console.log(newRecipe, userEmail);

    // add to mongodb server
    fetch(`https://server-tasty-nest.vercel.app/recipes`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            toast.success('Your recipe added')
            console.log(data)
        }
    })
  };
  return (
    <div className="py-10">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddRecipe} className="fieldset">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input"
              placeholder="Title"
            />
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input"
              placeholder="Ex: Breakfast, Lunch, Dinner, Dessert, Vegan"
            />
            <label className="label">Cuisine Type</label>
            <input
              type="text"
              name="cuisineType"
              className="input"
              placeholder="Cuisine Type (ex: American, Chinese, Indian)"
            />
            <label className="label">Preparation Time</label>
            <input
              type="number"
              name="preparationTimeMin"
              className="input"
              placeholder="Preparation Time (in min and a number)"
            />
            <label className="label">Instructions</label>
            <input
              type="text"
              name="instructions"
              className="input"
              placeholder="Instructions"
            />
            <label className="label">Ingredients</label>
            <input
              type="text"
              name="ingredients"
              className="input"
              placeholder="(ex: ['abc', 'def', 'mnp'])"
            />
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="Image URL"
            />
            <label className="label">Like Count</label>
            <input
              type="number"
              name="likeCount"
              className="input"
              placeholder="starting value is 0"
              value={0}
              readOnly
            />
            <label className="label">User Email </label>
            <input
              type="email"
              name="adderEmail"
              className="input"
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
