 import React, { createContext, useState } from 'react'

 export const createtodo  = createContext(null)

 const Wrapper = (props) => { 
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
  ]);
   return(
    <createtodo.Provider value={[todos, settodos]}>
      {props.children}
    </createtodo.Provider>
   )
    
    
 }
 
 export default Wrapper