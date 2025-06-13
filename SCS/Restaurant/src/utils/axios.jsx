import axios from "axios";

const instance = axios.create({
    baseURL : "https://fakestoreapi.com/",
    // withCredentials:true
})

// Add a request interceptor
instance.interceptors.request.use(
    function(config){
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

// Add a respone interceptor
instance.interceptors.response.use(
    function(respone){
        return respone
    },
    function(error){
        return Promise.reject(error)
    }
)

export default instance

