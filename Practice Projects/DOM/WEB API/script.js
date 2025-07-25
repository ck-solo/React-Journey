var btn = document.querySelector("button")
var percent = document.querySelector("#percent")
var fill = document.querySelector("#fill") 
var dlt = document.querySelector(".del")
var grow = 0;
var isdownloaded = false;
btn.addEventListener("click", function(){ 
    if(isdownloaded) return;
    var int = setInterval(() => {
        grow++
        percent.innerHTML = grow+'%'
        fill.style.width = grow+'%' 
     }, 30);

     setTimeout(() => { 
         clearInterval(int);
         btn.innerHTML = "Downloaded";
         btn.style.opacity = 0.7
         isdownloaded = true;
     }, 3000);
     
})
dlt.addEventListener("click", function(){ 
    percent.innerHTML = 0+"%"
    fill.style.width = 0
    grow = 0;
    btn.innerHTML = "Download"
    btn.style.opacity = 1
    isdownloaded = false
})