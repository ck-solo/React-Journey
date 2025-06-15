import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    toast.success("Recipe updated!");
    // navigate("/recipe")
  };

  const Deletehandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("recipe deleted!");
    navigate("/recipe");
  };

  useEffect(() => {}, []); // by using [] it stop the rerendering(delete and create)

  const favrate = JSON.parse(localStorage.getItem("fav")) || [];

  const favHandler = () => {
    favrate.push(recipe)
    localStorage.setItem("fav",JSON.stringify(favrate))
  };
  
  const unFavHandler = () => {}
    console.log(favrate)
    console.log(favrate.find((f) => f.id == recipe?.id))

  return recipe ? (
    <div className="w-full flex ">
      <div className="relative left w-1/2 p-2">
        {recipe in favrate ? (
          <i
            onClick={unFavHandler}
            className="absolute text-4xl right-[15%]  text-red-400  ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="absolute text-4xl right-[15%] text-red-400 ri-heart-line"
          ></i>
        )}
        <h1 className="text-2xl fontext-3xl    t-black">{recipe.title}</h1>
        <img className="h-[40vh] mt-5" src={recipe.image} alt="" />
        <h1 className="text-x mt-5">{recipe.chef}</h1>
        <h1 className="text-sm mt-5">{recipe.desc}</h1>
      </div>

      <form
        className="w-1/2 p-2 text-2xl"
        onSubmit={handleSubmit(UpdateHandler)}
      >
        <input
          className="block px-2  text-xl  border-b "
          {...register("image")}
          type="url"
          placeholder="Enter the Url of Images"
        />
        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}

        <input
          className="block border-b mt-2  text-xl"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}

        <input
          className="block border-b mb-2 mt-5 text-x"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}

        <textarea
          className="block border-b mt-5 text-sm h-10 w-80"
          {...register("desc")}
          placeholder="start from here"
        ></textarea>
        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}
        <textarea
          className="block border-b outline-0 mt-5 text-sm h-10 w-70 "
          {...register("ingr")}
          placeholder="Write Ingredients separated by commas"
        ></textarea>

        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}
        <textarea
          className="block border-b outline-0 mt-5 text-sm"
          {...register("inst")}
          placeholder="Write Instructions"
        ></textarea>
        {errors.image && (
          <small className="text-red-400">This field is required</small>
        )}
        <select className="block border-b outline-0 mt-3 text-sm ">
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

        <button
          onClick={handleSubmit(UpdateHandler)}
          className=" block mt-6 px-2 py-1 rounded bg-blue-700  text-xl"
        >
          Save Recipe
        </button>
        <button
          onClick={handleSubmit(Deletehandler)}
          className=" block mt-6 px-2 py-1 rounded bg-red-700  text-xl"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
