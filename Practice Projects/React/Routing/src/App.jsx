import Nav from "./Components/Nav"
import ReactRoutes from "./Routes/ReactRoutes"

const App = () => {
  return (
    <div className="w-full h-screen px-20 bg-gray-900 text-white">
      
      <Nav />
      <ReactRoutes />
      
    </div>
  )
}  

export default App