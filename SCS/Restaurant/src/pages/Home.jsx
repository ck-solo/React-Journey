import axios from "../utils/axios";
import React from "react";

const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    } 
  };
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
