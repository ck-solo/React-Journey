 import React, { createContext } from 'react'

 export const createtodo  = createContext(null)

 const Wrapper = (props) => { 

   return(
    <createtodo.Provider value={"Hello from wrapper"}>
      {props.children}
    </createtodo.Provider>
   )
    
    
 }
 
 export default Wrapper