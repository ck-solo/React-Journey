import React, { createContext, useEffect, useState } from 'react'

export const recipecontext =    createContext(null)
const RecipeContext = (props) => {
    const [data, setdata] = useState(()=>{
      const localData = localStorage.getItem('recipe')
      return localData ? JSON.parse(localData) : []
    }) 

    useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(data))
  }, [data])


  return (
    <recipecontext.Provider value={{data, setdata}}>{props.children}</recipecontext.Provider>
  )
}

export default RecipeContext