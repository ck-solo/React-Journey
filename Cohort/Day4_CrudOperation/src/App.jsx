import React, { useState } from "react";

import Write from "./Components/Write";
import Read from "./Components/Read";

const App = () => {
  
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
  ]);


  return (
    <div className="flex border-2 border-white rounded-md m-5">
      <Write todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
      
    </div>
  );
};

export default App;
