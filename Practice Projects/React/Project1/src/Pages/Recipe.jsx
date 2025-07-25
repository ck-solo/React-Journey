import { useContext } from "react"
import { recipecontext } from '../Context/RecipeContext'
import RecipeCard from "../Components/RecipeCard";

 
const Recipe = () => {
  const { data }  = useContext(recipecontext);


  const renderrecipe = data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))


  return (
    <div className="flex flex-wrap">{data.length > 0 ? renderrecipe : "No recipes found!"}</div>
  )
}

export default Recipe