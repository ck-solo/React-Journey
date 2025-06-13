import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext"; 
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const SingleRecipe = () => {
    const navigate = useNavigate()
    const{data,setdata} = useContext(recipecontext)
    const {register, handleSubmit , reset }= useForm() 


    const UpdateHandler = (recipe)=>{
      const index = data.findIndex((recipe)=> params.id == recipe.id)
      const copydata = [...data];
      copydata[index] = {...copydata[index],...recipe}
      setdata(copydata)
      toast.success("Recipe updated!")   
    }

    const DeleteHandler = () => {
      const filterdata = data.filter((r) => r.id != params.id)
      setdata(filterdata)
      toast.success("Recipe Deleted!")
      navigate("/recipe")
    }

    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);
    console.log(recipe)

  return recipe ? (
    <div className='flex '>
      <div className="left w-1/2 p-2 ml-50">
        <img className='w-[10vw]' src={recipe.image} alt="" />
        <h1 className="text-2xl font-black">{recipe.title}</h1>
        <small className="text-sm mt-10">{recipe.chef}</small>
        <p className="w-[20vw] text-xs font-semibold">{recipe.desc}</p>
      </div>

        <form className='text-sm  w-1/2 ' onSubmit={handleSubmit(UpdateHandler)}>
        <input  className='border-b outline-0 p-2 block'
        {...register('image')}
        type="url"
        value={recipe.image}
        placeholder='Enter the Image URL'
         />
         <small className='text-red-400 '>File not empty</small>

        <input  className='border-b outline-0 p-2 block mt-5'
        {...register('title')}
        type="text"
        value={recipe.title}

        placeholder='Enter the Title'
         />
         
        <input  className='border-b outline-0 p-2 block mt-5'
        {...register('chef')}
        type="text"
        value={recipe.chef}

        placeholder='chief name '
         />


        <textarea  className='border-b outline-0   block mt-5'
        {...register('desc')} 
        value={recipe.desc}

        placeholder='Enter the Description here'
         >
         </textarea> 

        <textarea  className='border-b outline-0  block mt-5'
        {...register('ing')} 
        value={recipe.ing}
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

         <button  className='block mt-5 px-2 py-3 bg-blue-600 rounded ease-in'>Update Recipe</button>

         <button onClick={DeleteHandler} className='block mt-5 px-2 py-3 bg-red-600 rounded ease-in'>Delete Recipe</button>
    </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
