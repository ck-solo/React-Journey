import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
     const copydata = [...data];
     copydata.push(recipe)
     localStorage.setItem("recipe",JSON.stringify(copydata))
    toast.success("New recipe created!");
    reset();
    navigate("/recipe");
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
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
  );
};

export default CreateRecipe;
