import { useNavigate } from "react-router-dom"

const ProductDetail = () => {
  const navigate = useNavigate()
  return (
    <div>
    <h1>Product Name</h1>

    <h2 className="text-2xl font-thin mb-4  ">Product Details</h2>  
    <p className="font-thin mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus molestiae</p>
    <button onClick={()=> navigate(-1)}  className="text-lg p-2 font-bold bg-blue-700 rounded text-black">Go Back</button>  
     </div>
  )
}

export default ProductDetail