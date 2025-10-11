import React from "react";
 
import { nanoid } from 'nanoid'
import {useForm} from 'react-hook-form'

const Write = (props) => {
    const todos = props.todos;
    const settodos = props.settodos; 

    const {register, handleSubmit, reset,formState:{errors}} = useForm()
    
    
    const SubmitHandler = (data) =>{  
      data.id = nanoid(),
      data.isCompleted = false
         
      const copytodo = [...todos]
      copytodo.push(data)
      settodos(copytodo)
        
        reset()
      }
    
     

  return (
    <div className="w-[50%]  rounded-md   text-center">
      <h1 className="m-20 text-6xl">Set <span className='text-red-800'>Reminders</span> for tasks</h1>
      <form  onSubmit={handleSubmit(SubmitHandler)}>
        <input className="w-[80%] border-b-2 text-4xl "
           {...register('title', {required: true})}
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
