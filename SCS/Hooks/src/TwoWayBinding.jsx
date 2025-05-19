import { useState } from "react"

 const App = () => {
  const [todos, settodos] = useState([
    {id:1, title: "First task", isCompleted: false},
  ])

  const [title, settitle] = useState("")

  const [checkbox, setcheckbox] = useState(false)
 
  const [gender, setgender] = useState("female")

  const [city, setcity] = useState("kolkata")



   return (
     <div>
      <h1>Create Tasks</h1>
      <form>
        <input
        onChange={(e)=> settitle(e.target.value)}
        value={title}
         type="text"
          placeholder="title" />
          <br />

        <input
        checked={checkbox}
        onChange={(e)=>setcheckbox(e.target.checked)}
         type="checkbox"
           />
           Checkbox
           <br />

           <input 
           onChange={(e)=> setgender(e.target.checked)}
           checked={gender == "male" && true}
           value="male"
           type="radio"
            />
            Male
           <input 
           onChange={(e)=> setgender(e.target.checked)}
           checked={gender == "female" && true}
           value="female"
           type="radio"
            />Female
            <br />

            <select
            value={city} 
            onChange={(e)=>setcity(e.target.value)}
            >
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="kolkata">KolKata</option>
            </select>
           <button>Create Todo</button>
      </form>
     </div>
   )
 }
 
 export default App