import React from 'react'
import { NavLink } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='px-10 mb-10 flex flex-col   '> 
    <h1 className='text-5xl py-4 '>Courses</h1>
    <div className='mb-10' >
      <h2 className='text-3xl'>Frontend Course</h2>
      <button className='text-black  font-semibold bg-yellow-500 mt-5 rounded p-2'>See More</button> 
    </div>
    <div className='mb-10' >
      <h2 className='text-3xl'>Backend Course</h2>
      <button className='text-black font-semibold bg-yellow-500 mt-5 rounded p-2'>See More</button>
    </div>
    <div className='mb-10' >
      <h2 className='text-3xl'>Full Stack Development</h2>
      <button className='text-black font-semibold bg-yellow-500 mt-5 rounded p-2'>See More</button>
    </div>
    
    </div>
  )
}

export default Courses