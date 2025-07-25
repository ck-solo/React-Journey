import axios from "../Utils/Axios";
import React, { useEffect } from "react";

const Home = () => {
  
  const getproduct = async () => {
    try {
  // const strdata = await fetch("https://fakestoreapi.com/products/1")
  // const jsondata = await strdata.json()
  // console.log(jsondata)

      const { data } = await axios.get("products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getproduct()

    return ()=>{
      console.log("Home is unmounted")
    }
  })
  return (
    <div className="p-10">
      <h1>Home</h1>
      <button onClick={getproduct}>Get Product</button>
    </div>
  );
};

export default Home;
