import React, { useState } from "react";

const Form = () => {
  const [user, setuser] = useState([
    {
      name: "Shriyasmh",
      age: 25,
    },
    {
      name: "Rahul",
      age: 25,
    },
    {
      name: "Ruhani",
      age: 295,
    },
  ]);

  
  const updateUser = user.map((user, index) => {
      return (
          <li key={index}>
        <p>{user.name}</p>
      </li>
    );
  });

  const [Fullname, setFullname] = useState("");
  const [age, setage] = useState("18");

  const SubmitHandler = (e) =>{
    e.preventDefault()
    const newuser = {Fullname, age}
    console.log(newuser)  // api, database, backend
  }
  return (
    <div style={{ margin: "10px", fontSize: "30px" }}>
      <h1>Register User</h1>
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
      </form>
      <hr />
      <h1>User Data</h1>
      <ol>{updateUser}</ol>
    </div>
  );
};

export default Form;
