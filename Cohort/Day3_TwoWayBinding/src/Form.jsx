import React, { useState } from "react";
import Write from "./components/Write";
import Read from "./components/Read";

const Form = () => {
     const [users, setusers] = useState([
    {
      name: "Shriyasmh",
      age: 25,
    },
    {
      name: "Rahul",
      age: 25,
    },
    {
      name: "Ruhani",
      age: 295,
    },
  ]);
   
 
   
  return (
    <div style={{ margin: "10px", fontSize: "30px" }}>
     
     <Write/>
      <hr />
      <Read users={users}/>
      
    </div>
  );
};

export default Form;
