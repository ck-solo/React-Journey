//javascript main sabse pehle synchronous part run hota hai 
//js single threaded language hai 
js me sabse pahle synchronous part chalta hai , synchronous code js chalati hai main thread pr kyunki js single threaded hai, uska likha hua code chalna chaalu hai aur main thread pe humesha sabse pehle poora synchronous code chalega jab ye poora code finish hoga tab jaakr async code ke chalne ki baari aayegi
++++++++++++++++++++++++++++++++++++++

threads matalb  => processors me cores hote hai aur har core aur har core mai kai saare threads hote hai aur ek thread ek time par ek operation perform kr skta hai 
++++++++++++++++++++++++++++++++++++++


main thread => jaha pr sync code chalt hai sabse pehle
++++++++++++++++++++++++++++++++++++++

main stack => jo bhi main stack par aayega wo hi chalega
++++++++++++++++++++++++++++++++++++++

webAPI => browser ki taraf se kai saare features milte thai jo js main nhi hote, wo features hum js main use to krte hai pr wo js ke features nahi hote wo humein browser se milte hai 
like => console.log, settimeout , setinterval aise and for more just search window on console

++++++++++++++++++++++++++++++++++++++

callback queue => web api se complete hone pr code callback queue pr jata hai  