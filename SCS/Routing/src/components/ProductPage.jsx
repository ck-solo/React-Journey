import { useNavigate } from "react-router-dom"

 
const Product = () => {
  const navigate = useNavigate()

  const NavigateHandler = () =>{
    navigate("/product/detail")
  }


  return (
    <div className="p-20">
      <h1 className="text-4xl mb-2">Products</h1>
      <p className="text-2xl mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, recusandae. Fuga suscipit eius repudiandae fugit! Possimus tenetur harum dolore obcaecati.</p>

      <button onClick={NavigateHandler} className="p-4 bg-red-400">See More</button>
    </div>
  )
}

export default Product