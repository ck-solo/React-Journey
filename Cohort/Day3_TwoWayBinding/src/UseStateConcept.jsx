import React, { useState } from 'react'

const UseStateConcept = () => { 

    const [username, setusername] = useState('Shristi')

    const changeName =() =>{
        setusername("Shriya")
    }
    console.log(username)
    
  return (
    <>
    <h1>Username</h1>
    <h2>{username}</h2>
    <button onClick={changeName}>Change Name</button>
        
    </ >
  )
}

export default UseStateConcept