import { useNavigate} from "react-router-dom"

  const Product = () => {
    const navigate = useNavigate()

  const NavigateHandler = (name) => {
    navigate(`/product/detail/${name}`)

  }


  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Products</h1>
      <div className="p-2"> 
        <h2 className="text-2xl font-thin mb-4  ">Product 1</h2>
        <button onClick={() => NavigateHandler("Product 1")} className="text-xl p-4 font-bold bg-red-700 rounded text-black">See Details</button>
      </div>
      
      <div className="p-2">
        <h2 className="text-2xl font-thin mb-4  ">Product 2</h2>
        <button onClick={() => NavigateHandler("Product 2")} className="text-xl p-4 font-bold bg-red-700 rounded text-black">See Details</button>
      </div>

      <div className="p-2">
        <h2 className="text-2xl font-thin mb-4  ">Product 3</h2>
        <button onClick={() => NavigateHandler("Product 3")} className="text-xl p-4 font-bold bg-red-700 rounded text-black">See Details</button>
      </div>

    </div>
  )
}

export default Product