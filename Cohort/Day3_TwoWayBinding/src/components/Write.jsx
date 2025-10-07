import { useState } from "react";

 const Write = (props) => {

   const [Fullname, setFullname] = useState("");
  const [age, setage] = useState("18");

  
  const SubmitHandler = (e) =>{
    e.preventDefault()
    const newuser = {Fullname, age}
    console.log(newuser)  // api, database, backend
  }
   return (
     <div> <h1>Register User</h1>
      <form style={{ fontSize: "50px" }} onSubmit={SubmitHandler}>
        <input style={{ margin: "10px", fontSize: "40px" }}
          onChange={(e) => setFullname(e.target.value)}
          value={Fullname}
          type="text"
          placeholder="Name"
        />

        <input style={{ margin: "10px", fontSize: "40px" }}
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />

        <button style={{ margin: "10px", fontSize: "40px" }}> Submit</button>
      </form></div>
   )
 }
 
 export default Write