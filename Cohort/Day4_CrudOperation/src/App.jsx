import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {

  const [todos, settodos] = useState([
    {
      id:1, title: "Learn React", isCompleted: false
    }
  ])

  
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

  const updateTodo = todos.map(todos=>{
    return <li key={todos}>{todos.title}</li>
  })

  const [title, settitle] = useState('')

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={HandleSubmit}>
        <input 
        onChange={(e)=>{ settitle(e.target.value)}}
        value={title}
        type="text"
        placeholder="Enter the title" />
        <br />
        <br />
        <button>Submit</button>
        <hr />

        <h1>Pending Tasks</h1>
        <p>{updateTodo}</p>
        
      </form>
    </div>
  )
}

export default App