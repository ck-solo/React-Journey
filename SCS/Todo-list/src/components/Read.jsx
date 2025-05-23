import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
       const [todos, settodos] = useContext(todocontext)

  const DeleteHandler = (id)=>{
   const filtedtodo =  todos.filter((todo) => todo.id != id)
    settodos(filtedtodo) 
    toast.error("Todo-Deleted")
  }


   const renderdata = todos.map((todo) => {
    return <li className="flex justify-between p-6 bg-gray-700 rounded mb-10" key={todo.id}>
     <span className="text-xl font-thin"> {todo.title}</span>   
     <button className="font-thin text-red-400 " onClick={()=> DeleteHandler(todo.id)}>Delete</button> </li>;
  }); 
 
  return (
    <div className="w-[40%] p-10">
      <h2 className=" mb-10 text-4xl font-thin"><span className="text-orange-400">
       Pending </span> Work</h2>
      <ol>{renderdata}</ol>
    </div>
  );
};

export default Read;
