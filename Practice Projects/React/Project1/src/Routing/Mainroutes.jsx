import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Recipe from "../Pages/Recipe"
import CreateRecipe from "../Pages/CreateRecipe"
import SingleRecipe from "../Pages/SingleRecipe"

 

const Mainroutes = () => {
  return (
     
<Routes >
    <Route  path="/" element={<Home />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/recipe/details/:id" element={<SingleRecipe />} />
    <Route path="/create-recipe" element={<CreateRecipe />} />
    <Route path="/about" element={<About />} />
</Routes>
  )
}

export default Mainroutes