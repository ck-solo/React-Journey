import { useNavigate } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate()
  return (
    <div className="p-20">
        <h1 className="text-2xl mb-3">Product 1</h1>
        <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem repudiandae nostrum reprehenderit.</p>
        <button onClick={()=> navigate(-1)} className="p-2 text-sm bg-red-400 mb-20">GO Back</button>
        <h1 className="text-2xl mb-3">Product 2</h1>
        <p className="text-xs mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem repudiandae nostrum reprehenderit.</p>
        <button onClick={()=> navigate(-1)} className="p-2 text-sm bg-red-400">GO Back</button>
    </div>
  )
}

export default ProductDetails