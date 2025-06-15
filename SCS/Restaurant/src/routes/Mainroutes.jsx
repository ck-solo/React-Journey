import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Fav from '../pages/Fav'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import { PageNotFound } from '../pages/PageNotFound'


const Mainroutes = () => {
  return  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/create-recipe' element={<Create/>}/>
    <Route  path='/recipes' element={<Recipes />}/>
    <Route  path='/recipe/details/:id' element={<SingleRecipe />}/>
    <Route  path='/about' element={<About />}/>
    <Route  path='/fav' element={<Fav />}/>

    <Route  path='*' element={<PageNotFound />}/>
  </Routes>
}

export default Mainroutes