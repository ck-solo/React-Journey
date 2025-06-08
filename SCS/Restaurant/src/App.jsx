import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-screen bg-gray-700 text-2xl font-semibold text-white'>
      <Nav/>
      <Mainroutes />
    </div>
  )
}

export default App