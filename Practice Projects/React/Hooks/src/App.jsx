import { useState } from "react"
import Read from "./Components/Read"
import Write from "./Components/Write"

const App = () => {
  const [users, setusers] = useState([
    {name:"Shivam", age : 29},
    {name:"Rohan",  age : 49},
    {name:"Piyush", age : 29},
  ])
  
  return (
    <div>    
      <Write />
      <Read users={users} setusers={setusers} />
    </div>
  )
}

export default App