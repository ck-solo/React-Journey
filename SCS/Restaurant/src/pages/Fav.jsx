import RecipeCard from '../components/RecipeCard'; 

const Fav = () => { 
const favrate =  JSON.parse(localStorage.getItem("fav") || []);

const renderrecipes = favrate.map((recipe) => (
  <RecipeCard key={recipe.id} recipe={recipe} />
))
  return (
    <div className='flex flex-wrap  '>{favrate.length > 0 ? renderrecipes : "No Favrate found!"}</div>
  )

}

export default Fav