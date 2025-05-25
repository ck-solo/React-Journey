import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const Service = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='text-2xl font-thin mb-5'>Service</h1>
      <button onClick={()=> navigate("/service/detail")}  className="text-lg p-2 m-10 font-bold bg-white rounded text-black">More Details</button>

      <button onClick={()=> navigate("/service/updates")}  className="text-lg p-2 font-bold bg-white rounded text-black">More Updates</button>
      <hr className='my-10' />
       <Outlet/>
    </div>
  )
}

export default Service