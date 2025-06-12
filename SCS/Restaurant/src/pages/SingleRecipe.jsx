import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const params = useParams();
  const { data } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);

  console.log(recipe);
  return recipe ? (
    <div>
      <div className="left">
        <img src={recipe.img} alt="" />
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <small className="text-2xl mt-10">{recipe.chef}</small>
        <p className="w-[50vw] font-semibold">{recipe.desc}</p>
      </div>
      <div className="right"></div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
