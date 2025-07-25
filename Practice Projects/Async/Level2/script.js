// function getDetails(username, cb) {
//   setTimeout(function () {
//     console.log("sending the req....");
//   }, 1000);

//   setTimeout(() => {
//     console.log("fetching data...");
//   }, 2000);

//   setTimeout(function () {
//     cb();
//   }, 3000);
// }

// getDetails("username", function () {
//   console.log("Data saved ");
// });


// ++++++++++++++++Callback Hell(pyramid of doom)+++++++++++++++++++++++

// function stepOne(cb){
//     console.log("step1")
//     cb()
// }
// function stepTwo(cb){
//     console.log("step2")
//     cb()
// }
// function stepThree(cb){
//     console.log("step3")
//     cb()
// } 

// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log("All steps done")
//         })
//     })
// })

// +++++++++++++++++++++++++Promises++++++++++++++++++++++++

// const pr = new Promise (function(res,rej){
// console.log("Hello")
// console.log("data collect")
// console.log("no error")
// console.log("data found")
// console.log("showing")
// res();
// });

// pr.then(function(){
//     console.log("Resolved")
// }).catch (function(){
//     console.log("Rejects")
// })


function stepOne(){ 
    return new Promise( function (res, rej){
        console.log("step1")
        res()
    })
    }
    function stepTwo(){
        return new Promise (function(res,rej){
            console.log("step2")
            res()
        })
    }
    function stepThree(){
        return new Promise(function(res,rej){
            console.log("step3")
            rej()
        })
    } 
    
stepOne()
.then(stepTwo)
.then(stepThree)
.catch(function(){
    console.log("all steps done")
})
