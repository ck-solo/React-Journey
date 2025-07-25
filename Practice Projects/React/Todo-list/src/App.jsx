import { useState } from "react";
import Create from "./components/Create"
import  Read  from "./components/Read"

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "First Todos", isCompleted: false },
  ]);
  
  return (
    <div className="flex w-screen h-screen bg-gray-900 p-10">
      <Create todos={todos} settodos={settodos} />
     <Read todos={todos} settodos={settodos}/>
      </div>
  );
};

export default App;
