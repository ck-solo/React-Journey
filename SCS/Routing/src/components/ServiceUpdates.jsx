import { useNavigate } from "react-router-dom"

const ServiceUpdates = () => {
  const navigate = useNavigate()

  return (
    <div> 
    <h2 className="text-2xl font-thin mb-4  ">Services Updates</h2>  
    <p className="font-thin mb-4">Choose better service...</p>
    <button onClick={()=> navigate(-1)}  className="text-lg p-2 font-bold bg-blue-700 rounded text-black">Go Back</button>  
     </div>
  )
}

export default ServiceUpdates