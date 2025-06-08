import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const{id,image,title,chef,desc} = props.recipe;
    console.log(props)

  return (

    <Link className='block w-[30vw] rounded overflow-hidden'>
    <img className='object-cover w-full h-[20vh]' src={image} alt="" />
    <h1 className='p-2 font-black'>{title}</h1>
    <small className='p-2 '>{chef}</small> 
    <p className='p-2'>{desc.slice(0, 100)}...
        <small className='text-blue-500'>More</small>
    </p>
    
    </Link>
      
  )
}

export default RecipeCard