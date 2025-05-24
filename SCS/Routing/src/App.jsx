import Nav from "./components/Navbar" 
import Mainroutes from "./routes/MainRoute"


const App = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white p-10">

      <Nav />
       <Mainroutes />
    </div>
  )
}

export default App