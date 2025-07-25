import { useState } from "react"

const App = () => { 
  const [username, setusername] = useState("Rohan");

  const ChangeHandler = () => {
    setusername(username === "Rohan" ? "Ankur": "Rohan");
  };
  console.log(username);

  return (
    <div>
      <h1>Name</h1>
      <h1>{username}</h1>
      <button onClick={ChangeHandler}>Change Name</button>
    </div>

  )
}

export default App