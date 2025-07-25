import { NavLink } from "react-router-dom"

 
const Navbar = () => {
  return (
    <div className="flex justify-center gap-20 ">
        <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to="/recipe">Recipe</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500" : ""} to="/create-recipe">CreateRecipe</NavLink>
    </div>
  )
}

export default Navbar