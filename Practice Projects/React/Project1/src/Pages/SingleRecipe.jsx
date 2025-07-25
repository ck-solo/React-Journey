import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit,formState: { errors } ,reset } = useForm({defaultValues: 
    {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst : recipe?.inst,
      desc : recipe?.desc,
      ingr : recipe?.ingr
    }
  })

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    toast.success("Recipe updated!");
    navigate("/recipe")
  };

  const Deletehandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("recipe deleted!");
    navigate("/recipe")
  };

  useEffect(()=>{
      console.log("singleRecipe is mounted")

      return ()=>{
        console.log("singleRecipe is unmounted")
      }
    },[])  // by using [] it stop the rerendering(delete and create)
  

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2">
        <h1 className="text-2xl font-black">{recipe.title}</h1>
        <img className="h-[40vh]" src={recipe.image} alt="" />
        <h1>{recipe.chef}</h1>
        <h1>{recipe.desc}</h1> 
      </div>

       
    <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
      <input
        className="block px-2 mt-10 border-b "
        {...register("image", { required: true })}
        type="url"
        placeholder="Enter the Url of Images"
      />
      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}

      <input
        className="block border-b mb-2"
        {...register("title", { required: true })}
        type="text"
        placeholder="Recipe Title"
      />
      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}

      <input
        className="block border-b mb-2"
        {...register("chef", { required: true })}
        type="text"
        placeholder="Chef Name"
      />

      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}

      <textarea
        className="block border-b "
        {...register("desc", { required: true })}
        placeholder="start from here"
      ></textarea>
      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}
      <textarea
        className="block border-b outline-0 "
        {...register("Ingr", { required: true })}
        placeholder="Write Ingredients separated by commas"
      ></textarea>

      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}
      <textarea
        className="block border-b outline-0 "
        {...register("Inst ", { required: true })}
        placeholder="Write Instructions"
      ></textarea>
      {errors.image && (
        <small className="text-red-400">This field is required</small>
      )}
      <select
        className="block border-b outline-0 mt-3  "
        {...register("Instruction", { required: true })}
        placeholder="Write Instructions"
      >
        <option className="bg-blue-400  mb-3" value="Breakfast">
          Breakfast
        </option>
        <option
          className="bg-blue-400 
             mb-3"
          value="Lunch"
        >
          Lunch
        </option>
        <option
          className="bg-blue-400 
             mb-3"
          value="Dinner"
        >
          Dinner
        </option>
      </select>

      <button className=" block mt-6 px-2 py-1 rounded bg-blue-700  text-xl">
        Save Recipe
      </button>
    </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
