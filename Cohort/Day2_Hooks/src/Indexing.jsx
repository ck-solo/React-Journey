import React from "react";


const Indexing = () => {
  const profile = [
    {
      name: "Rohit",
      age: 32,
      gender: "Male",
    },
    {
      name: "Ronak",
      age: 21,
      gender: "Male",
    },
    {
      name: "suman",
      age: 32,
      gender: "Female",
    },
  ];

  const updateProfile = profile.map((elem,index)=>{
    return (
        <li>
            <span>Name :{elem.name}</span>
            <small>Age : {elem.age}</small>
        </li>
    )
  })
  return (
  <> 
   <h1>Rendering Data </h1>
   {updateProfile}
  </>);
};

export default Indexing;
