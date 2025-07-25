import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const {id, image , title, desc, chef} = props.recipe;
  return (
    <Link to={`/recipe/details/${id}`} className=" hover:scale-105 mr-3 mb-3 p-5 block w-[20vw] rounded overflow-hidden shadow">
    <img className="w-full h-[20vh] object-cover" src={image}  />
    <h1 className="mt-2 font-black ">{title}</h1>
    <small className="mt-2 text-orange-300 text-2xl">{chef}</small>
    <p className="">{desc?.slice(0,100)}...{" "}<small className="text-blue-500">more </small> </p>
    </Link>
  )
}

export default RecipeCard