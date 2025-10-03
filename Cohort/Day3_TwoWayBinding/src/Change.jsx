 import React, { useState } from 'react'
 
 const Change = () => { 
  const [username, setUsername] = useState('Shriyasmh');

  const ChangeHandler=()=>{
    setUsername('Shriya')
    console.log(username)
  };
   return (
     <div >
      <h2>{username}</h2>
      <button onClick={ChangeHandler} >Change ME</button>
     </div>
   )
 }
 
 export default Change