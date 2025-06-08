import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 text-xl mb-10'>
        <NavLink className={(e)=> e.isActive ? "text-red-700" : ""} to='/'>
            Home
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-700" : ""} to='/about'>
            About
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-700" : ""} to='/recipes'>
            Recipes
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-700" : ""} to='/create-recipe'>
            Create Recipe
        </NavLink>
    </div>
  )
}

export default Nav