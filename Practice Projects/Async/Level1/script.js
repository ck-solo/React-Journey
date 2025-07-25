console.log("Hey1")
setTimeout(() => {
    console.log("Hey2")
}, 0);
Promise.resolve().then(function(){
    console.log("Hey3")
}) 
console.log("Hey4")

// output =>  Hey1, Hey4 , Hey3 , Hey2