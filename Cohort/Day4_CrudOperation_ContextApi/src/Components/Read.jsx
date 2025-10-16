import React, { useContext } from "react";
import style from "../style.module.css";
import { toast } from "react-toastify";
import { createtodo } from "../Wrapper";

 
const Read = () => {
  const [todos, settodos] = useContext(createtodo);


   const DeleteHandler= (id) =>{
        const filtertodo = todos.filter((todos) => todos.id !== id)
        settodos(filtertodo)
        toast.error("Todo deleted ")

    
      }

  const updateTodo = todos.map((todos) => {
    return (
      <li className="flex p-2 rounded-md bg-gray-800 mb-5 text-3xl justify-between " key={todos.id}>
       <span className="">{todos.title}</span>  {" "}
        <button className="text-red-800 font-thin cursor-pointer text-2xl" onClick={() => DeleteHandler(todos.id)}>Delete</button>{" "}
      </li>
    );
  });
  

  return (
    <div className="w-[50%]  p-20">
      {/* <h1 className={style.read_list_heading} >Todo List</h1> */}
      <h1 className="text-6xl mb-10 "><span className="text-orange-600">Pending</span> Todo List</h1>
      <ol>{updateTodo}</ol>
    </div>
  );
};

export default Read;
