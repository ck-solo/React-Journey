import axios from "../utils/axios";
import React, { useEffect } from "react";

const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(()=>{
    console.log("Home.jsx mounted")
    getproduct()

    return () =>{
      console.log("Home.jsx in unmounted.")
    }
  })
  return (
    <>
      <div>Home</div>
      <button onClick={getproduct} className="p-2 bg-amber-600   mt-3">
        Change me
      </button>
    </>
  );
};

export default Home;
