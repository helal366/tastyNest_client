import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts-providers/AuthContext";
import MyRecipeCard from "../components/MyRecipeCard";
import NoRecipe from "../components/NoRecipe";

const MyRecipe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { allRecipes, user } = useContext(AuthContext);
  const userEmail = user?.email;
  const filteredRecipesByEmail = allRecipes.filter(
    (recipe) => recipe?.adderEmail === userEmail
  );
  const recipeNumber=filteredRecipesByEmail?.length ||0
  // console.log(filteredRecipesByEmail);
  return (
    <div className="padding">
      <h2 className="text-center text-2xl font-semibold py-4">
        My recipes: {recipeNumber}
      </h2>
      {recipeNumber===0 ? (
        <NoRecipe></NoRecipe>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 py-4">
          {filteredRecipesByEmail?.map((recipe) => (
            <MyRecipeCard key={recipe._id} recipe={recipe}></MyRecipeCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipe;
