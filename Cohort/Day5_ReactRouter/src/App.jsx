import React from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'

function App() {
  return (
    <div className='w-{100%} h-{100%} bg-blue-950 text-white '> 
      
      <Nav />
      <MainRoutes />
      
    </div>
  )
}

export default App