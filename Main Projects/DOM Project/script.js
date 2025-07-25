var arr = [
    {
      dp:"https://i.pinimg.com/236x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg",story:"https://i.pinimg.com/236x/aa/e8/1b/aae81ba6e7b377b5bf4e40da94458e0c.jpg"},
    {
      dp:"https://i.pinimg.com/236x/fe/bd/7f/febd7f63f11adb997c5e115048911d58.jpg",story:"https://i.pinimg.com/236x/03/b8/dc/03b8dce687670fa254e90e7fb3705d02.jpg"},
    {
      dp:"https://i.pinimg.com/236x/3e/96/d4/3e96d4acfadb74823235191c12ecbaa5.jpg",story:"https://i.pinimg.com/236x/3d/9d/dc/3d9ddc77d5415451405deb38bb10a899.jpg"},
    {
      dp:"https://i.pinimg.com/236x/30/d5/d4/30d5d4becb796356a03f78f47bc5f9b6.jpg",story:"https://i.pinimg.com/236x/4f/1c/8a/4f1c8a29d96d6f67439e7af469b62d04.jpg"},
      
  ]
  
  
  var stories = document.querySelector("#stories")
  var clutter = "";
  arr.forEach(function (elem,idx) { 
    clutter += `<div class="story">
          <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
  });
  stories.innerHTML = clutter;
  
  stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
  
    setTimeout(function() {
    document.querySelector("#full-screen").style.display = "none"
      
    }, 2000);
  });
  
   