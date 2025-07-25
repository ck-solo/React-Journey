async js

sync code turant chalta hai 
async code baad me chalta hai


//async code sabse pehle jata hai webAPIs pe , jab waha prr ye resolve ho jata hai tab ye code jata hai call back queue and fir event loop check krta hai main thread main call stack khaali hua ya nhi anad agar hua to main thread un stack pr rah rhe execution context ko execute krta hai 

+++++++++++Process how the code run++++++++++++++++++++

sync => call stack => main thread execution
async => webAPI => callback queue => (call stack empty) => call stack => main thread


// ++++++++++++++++Callback Hell(pyramid of doom)+++++++++++++++++++++++

Callback hell tab hota hai jab hum apne code mein bahut saare functions ko ek ke andar ek call karte hain, taaki wo ek particular order mein chal sakein — especially asynchronous tasks ke liye.

++++++++++++++++Kyu???++++++++++++++++
Pehle JavaScript mein Promises aur async/await nahi the, isliye developers ko callbacks ka use karke hi step-by-step async kaam karna padta tha — jaise:
Data fetch karna
File read/write karna
User input handle karna
API call ke baad kuch karna


++++++++++++Promise+++++++++++++++++++++++++++++++
ek function hota hai jo run hota hai aur do parameter pass krta hai resolve and reject agar resolve ho jata hai to .then run hota hai aur agar nhi to .catch chalta hai 
syntax => promise(function(res,rej){
    res()
})
.then()
syntax => promise(function(res,rej){
    rej()
})
.catch()