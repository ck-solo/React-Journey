1. // non parametrized function (not passign arguments)
  const handleClick =()=>{
    alert("Clicked")
  }

2.  // parametrized function(Pass arguments)
  const handlePramClick =(msg)=>{
    alert(msg)
  }

3. if we direct use the param function it immediatily call itself and run and we don't want it. So we can use anoymouse function to pass it and then because it is inside the anyomous function(non prametrized function) it only run when it call 
<button onClick={()=> handlePramClick("I am param function")}>Click (param)</button>


+++++++++++Two Way Binding++++++++++

in react objects were not showing directly we have to render it into array and then it show its value.
Null, Undefined , Boolean are not shown in react as they all were fixed value.
const App = () => {
  let n = 10;
  let s = "String";
  let b = true;
  let nu = null;
  let un = undefined;
  let arr = [12, 33, "Tiger",true,null,undefined];
  let obj = {Name:"Ronak",Age:20}

  return (
    <> 
    <h1>DataTypes</h1>
    <h2>Number: {n}</h2>
    <h2>String: {s}</h2>
    <h2>Boolean: {b? "Good":"Bad"}</h2>
    <h2>Null : {nu}</h2>
    <h2>Undefined: {un}</h2>
    <h2>Array : {arr}</h2>
    <h2>Object : {obj.Name}  {obj.Age}</h2>
    </>
  )
}


export default App
++++++++++++++++++Rendering List items+++++++++
In the below code we render the object data by using map function because in reat object were not showing so we have to convert them in array form or render them 
const App = () => {
  let info =[
    {name:"Rohit", Age:49} ,
    {name:"Sohail", Age:21},
    {name:"Suraj", Age:79}
  ]
 
  const updateinfo = info.map((elem , index)=>{
   return(
     <li key={index} > 
     <span> Name : {elem.name}  </span>|
     <small>Age : {elem.Age}  </small> 
    </li>
    )
  })

  return (
    <div>
      <h1>Rendering</h1>
      <ol>
      {updateinfo}
      </ol>
        
    </div>
  )
}

export default App


++++++++++++++++UseState+++++++++++++++++++++
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

+++++++++++Two Way Binding & Props++++++++++++++++
two way Binding bs Form elements me lagta hai 

pehle kuch bhi input krenge to wo onchange se hoke react me save hoga aur fir value se hote hue browser pr display hoga 
