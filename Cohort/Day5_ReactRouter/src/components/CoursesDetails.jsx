import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursesDetails = () => {
  const navigate = useNavigate()
  const handleback = ()=>{
    navigate(-1)
  }
  return (
    <>
    <div className='p-10  '>
      <h1 className='text-4xl mb-2'>HTML</h1>
      <p className='text-2xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias eum ducimus quod nulla vero dolore a numquam. Incidunt, quidem similique.</p>
      <button onClick={handleback}  className='text-black font-semibold bg-yellow-500 mt-5 rounded p-2'>Get back</button>
    </div>
    <div className='p-10  '>
      <h1 className='text-4xl mb-2'>HTML</h1>
      <p className='text-2xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias eum ducimus quod nulla vero dolore a numquam. Incidunt, quidem similique.</p>
      <button onClick={handleback}  className='text-black font-semibold bg-yellow-500 mt-5 rounded p-2'>Get back</button>
    </div>
    <div className='p-10  '>
      <h1 className='text-4xl mb-2'>HTML</h1>
      <p className='text-2xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat alias eum ducimus quod nulla vero dolore a numquam. Incidunt, quidem similique.</p>
      <button onClick={handleback}  className='text-black font-semibold bg-yellow-500 mt-5 rounded p-2'>Get back</button>
    </div>
    </>
  )
}

export default CoursesDetails