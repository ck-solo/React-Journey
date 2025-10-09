import React from "react";
import style from "../style.module.css";

 
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;


   const DeleteHandler= (id) =>{
        const filtertodo = todos.filter((todos) => todos.id !== id)
        settodos(filtertodo)
    
      }

  const updateTodo = todos.map((todos) => {
    return (
      <li className="flex p-2 rounded-md bg-gray-800  text-3xl justify-between " key={todos.id}>
       <span className="">{todos.title}</span>  {" "}
        <span className="text-red-700" onClick={() => DeleteHandler(todos.id)}>Delete</span>{" "}
      </li>
    );
  });

  return (
    <div className="w-[50%]  p-20">
      {/* <h1 className={style.read_list_heading} >Todo List</h1> */}
      <h1 className="text-6xl mb-10 ">Todo List</h1>
      <ol>{updateTodo}</ol>
    </div>
  );
};

export default Read;
