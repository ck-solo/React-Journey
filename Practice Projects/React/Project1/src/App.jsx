import Mainroutes from './Routing/Mainroutes'
import Navbar from './Components/Navbar'
 
 const App = () => {
   return (
    <div className='px-40 py-10 bg-gray-900 w-full h-screen text-white'>
    <Navbar />
    <Mainroutes />
    </div>
   )
 }
 
 export default App