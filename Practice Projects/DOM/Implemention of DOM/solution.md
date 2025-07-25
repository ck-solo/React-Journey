1.  Random color Generator
 Html
<div class="box"></div>  
<button>Change color</button>

CSS
code
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: column;
  gap: 20px;
}

.box {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: rgb(90, 90, 230);
  border-radius: 20px;
}

button {
  font-size: 20px;
  padding: 10px 20px;
  font-weight: 600;
  border: solid black;
  background-color: green;
  border-radius: 20px;

}
button:active{
    transform: scale(0.9);
}

JS code
var box = document.querySelector(".box")
var btn = document.querySelector("button")
btn.addEventListener( "click", function(){
    c1 =  Math.floor(Math.random()* 256)
    c2 =  Math.floor(Math.random()* 256)
    c3 =  Math.floor(Math.random()* 256)
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})


-------------------------------------------------------------------------------

2. Who Will Win

let team =  [
    {
        teamname : "CSK",
        primary : "yellow",
        secondary : "blue",
    },
    {
        teamname : "RCB",
        primary : "red",
        secondary : "green",
    },
    {
        teamname : "MI",
        primary : "black",
        secondary : "white",
    },
    {
        teamname : "DC",
        primary : "red",
        secondary : "blue",
    },
    {
        teamname : "SRH",
        primary : "green",
        secondary : "yellow",
    },
    {
        teamname : "KKR",
        primary : "blue",
        secondary : "red",

    }
    , 
]
// let team = ["RCB","CSK","DC","MI","SRH","KKR"]
var btn = document.querySelector("button")
var box = document.querySelector("h5")

btn.addEventListener("click", function() { 
  let num  = Math.floor(Math.random()*team.length) 
  let winner = team[num]
   box.innerHTML =  winner.teamname
   box.style.color = winner.primary
   box.style.backgroundColor = winner.secondary
})