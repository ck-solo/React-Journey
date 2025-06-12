import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
    const{data,setdata} = useContext(recipecontext)
    const {register, handleSubmit , reset }= useForm() 

    const SubmitHandler = (recipe)=>{
        recipe.id = nanoid()  
       const newData = [...data, recipe];
       setdata(newData)
       toast.success("New Recipe Created!")
        reset()

        navigate("/recipes")
    }
  return (
    
    <form className='text-sm' onSubmit={handleSubmit(SubmitHandler)}>
        <input  className='border-b outline-0 p-2 block'
        {...register('image')}
        type="url"
        placeholder='Enter the Image URL'
         />
         <small className='text-red-400 '>File not empty</small>

        <input  className='border-b outline-0 p-2 block mt-5'
        {...register('title')}
        type="text"
        placeholder='Enter the Title'
         />
         
        <input  className='border-b outline-0 p-2 block mt-5'
        {...register('chef')}
        type="text"
        placeholder='chief name '
         />


        <textarea  className='border-b outline-0   block mt-5'
        {...register('desc')} 
        placeholder='Enter the Description here'
         >
         </textarea> 

        <textarea  className='border-b outline-0  block mt-5'
        {...register('ing')} 
        placeholder='Write the Ingredients here...'
         >
         </textarea>

        <select  className='border-b outline-0  block mt-5 bg-gray-700'
        {...register('Cate')}  
         >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
         </select> 

         <button className='block mt-5 px-2 py-3 bg-blue-600 rounded ease-in'>Create Recipe</button>
    </form>
  )
}

export default Create