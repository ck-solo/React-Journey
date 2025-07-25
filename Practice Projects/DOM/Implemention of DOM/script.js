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