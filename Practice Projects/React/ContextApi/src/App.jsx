import Create from "./components/Create"
import  Read  from "./components/Read"

const App = () => {
  
  return (
    <div className="flex w-full h-screen bg-gray-900 p-10 text-red-200">
      <Create />
     <Read/>
      </div>
  );
};

export default App;