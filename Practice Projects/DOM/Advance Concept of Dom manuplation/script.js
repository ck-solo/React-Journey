var box = document.querySelector("#box");
var img = document.querySelector("img");
var love = document.querySelector("i");
var  h4 = document.querySelector("h4")
var btn = document.querySelector("button") 
var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
})

box.addEventListener("mouseenter", function(){
  crsr.style.transform = "scale(4)";
  crsr.style.opacity = 0.3
})
box.addEventListener("mouseleave", function(){
  crsr.style.opacity = 1
  crsr.style.transform = "scale(1.3)";
})


img.addEventListener("dblclick", function () {
  love.style.transform = " translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  setTimeout(() => {
    love.style.transform = " translate(-50%, -50%) scale(0)";
  }, 2000);
});


var count = 0;
btn.addEventListener("click",function(){
  if(count === 0) {
    h4.innerText = "Friends"
    h4.style.color = "Green"
    btn.innerText = "Remove Friends"
    btn.style.backgroundColor = "salmon"
    btn.style.fontWeight = 600
    btn.style.color = "white"
    count = 1
  } else {
    h4.innerText = "Stranger"
    h4.style.color = "Red"
    btn.style.backgroundColor = "Blue"
    btn.innerText = "Add Friends" 
    btn.style.color = "white"
    btn.style.fontWeight = 600
    count = 0

  }
})