1. Image Swap
JS
   var img1 = document.querySelector("#img1")
   var img2 = document.querySelector("#img2")
   var btn = document.querySelector("button")

btn.addEventListener("click", function(){
img1SRC = img1.getAttribute("src");
img2SRC = img2.getAttribute("src");
img1.setAttribute("src",img2SRC);
img2.setAttribute("src",img1SRC)
})
CSS
<img id="img1" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww" alt="Image not found">
<button>Image Swap</button>
<img id="img2" src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Image of Lion">


---------------------------------------------------------------------------------------------

2. Random Image Generator 
JS
var btn = document.querySelector("button")
var body = document.querySelector("body")


btn.addEventListener("click",function(){

    var x = Math.random()*90
    var y =  Math.random()*90
    var rot = Math.random()*360
    var img = document.createElement("img") 
    var randomurl = "https://picsum.photos/200/300?random=" + Math.random()*1000 // because of this line random images are genrating
     img.setAttribute("src",randomurl)
     img.style.height = "100px" 
     img.style.position= 'absolute'
     img.style.left = x + "%"
     img.style.top = y + "%"
     img.style.rotate = rot + "deg"
    body.appendChild(img)
})

CSS

button{
    width: 200px; 
    padding: 10px 20px;
    background-color: skyblue;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;    
    position: relative;
    z-index: 99;
}

button:active{
    scale: 0.9;
}

--------------------------------------------------------------


Question 
1. Make a instagram like feature (old) with dblclick event and  setTimeout
Ans.
var box = document.querySelector("#box");
var img = document.querySelector("img");
var love = document.querySelector("i");
img.addEventListener("dblclick", function () {
  love.style.transform = " translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  setTimeout(() => {
    love.style.transform = " translate(-50%, -50%) scale(0)";
  }, 2000);
});

2. Make a custom cursor feature  with the help  of mousemove, mouseenter and mouseleave

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



3. Make a webpage  of 2-3 pages with navbar when you scroll down Navigation bar goes up and disappear and when you scroll up comes back 