import React from "react";
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Write = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
    const [title, settitle] = useState("");
    
    const HandleSubmit = (e) =>{
        e.preventDefault()
    
        const newtodo = {
          id: nanoid(),
          title:title,
          isCompleted:false
        }
        settodos([...todos,newtodo])
        settitle('')
      }
    
     

  return (
    <div className="w-[50%]  rounded-md   text-center">
      <h1 className="m-20 text-6xl">Set Reminders for tasks</h1>
      <form  onSubmit={HandleSubmit}>
        <input className="w-[80%] border-b-2 text-4xl"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter the title"
        />
        <br />
        <br />
        <button className="p-3 m-5 text-white text-3xl border-blue-200 border-2 rounded-md">Create Todo</button>
         
      </form>
    </div>
  );
};

export default Write;
