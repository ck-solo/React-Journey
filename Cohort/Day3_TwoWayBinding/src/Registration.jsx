import React, { useState } from 'react'

const Registration = () => {

     const [todos, settodos] = useState([
        {id:1, title:"Learn React", isCompleted:false},
     ])

     const [name, setname] = useState('')
     const [completed, setcompleted] = useState(false)
    const [gender, setgender] = useState('Female')
    const [city, setcity] = useState('mumbai')

  return (
    <div>
        <h1>Registration</h1>
        <form>
        <input
        onChange={(e)=>{setname(e.target.value)}}
        value={name}
        type="text"
        placeholder='Enter Your Name' />

        <br />
        <br />
        <input 
        onChange={(e)=>{setcompleted(e.target.checked)}}
        checked={completed}
        type="checkbox" /> Completed
        <br />
        <br />
        <input
        value= 'Male'
        onChange={(e)=>{setgender(e.target.value)}}
        checked={ gender == 'Male' && true}
        type="radio" /> Male

        <input 
        onChange={(e)=>{setgender(e.target.value)}}
        value= 'Female'
        checked={gender == 'Female' && true}
        type="radio" />Female
        <br />
        <br />

        <select
        onChange={(e)=>{setcity(e.target.value)}}
        value={city}
        >
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            
        </select>         
        <br />
        <br />

<button>Submit</button>
        </form>
    </div>
  )
}

export default Registration