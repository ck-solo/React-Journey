// var box = document.getElementById("box1")
// box.addEventListener("dblclick", function(){
//    console.log("Hello")
// })

// Second Solution 
var btn = document.querySelector("button")
let h2 = document.querySelector('h2')
let clk = 0;
btn.addEventListener("click", function(){
    if(clk == 0){
        h2.innerText = "Friends"
        h2.style.color = "Green"
        btn.innerText = "Remove Friends"
        clk = 1
    }
    else{
        h2.innerText = "Strangers"
        h2.style.color = "red"
        btn.innerText = "Add Friends"
        clk = 0
    }
})