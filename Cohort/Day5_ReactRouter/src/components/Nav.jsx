 import React from 'react'
import { Link } from 'react-router-dom'
 
 const Nav = () => {
   return (
     <div className='flex   justify-around items-center w-full h-16 bg-blue-900 text-white'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
     </div>
   )
 }
 
 export default Nav