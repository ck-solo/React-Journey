// 1. solution
// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//         let time = Math.random() < 0.7
//         if(time) res()
//         else rej()
//         }, 2000);
//     })
// }

// orderFood()
// .then(function(){
//     console.log("🍕Pizza delivered!")
// })
// .catch(function(){
//     console.log("🚫 Delivery failed!")
// })

// 2. solution
function getUser(){
    return new Promise(function(res,rej){
        res({id: 1, name: "Username"})
    })
} 
function getPost(){
    return new Promise (function(res,rej){
        res()
    })

}
function getComments(){
     return new Promise (function(res,rej){
        res()
    })
}
getUser()
.then(function(data){
    console.log(data)
})