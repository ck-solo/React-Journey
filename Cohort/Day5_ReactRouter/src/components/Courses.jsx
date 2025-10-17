import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses/coursesdetails");
  };
  return (
    <>
      <div className="px-10   flex flex-col   h-{100%}  ">
        <h1 className="text-5xl py-4 ">Courses</h1>
        <div className="mb-10">
          <h2 className="text-3xl">Frontend Course</h2>
          <button
            onClick={handleClick}
            className="text-black  font-semibold bg-yellow-500 mt-5 rounded p-2"
          >
            See More
          </button>
        </div>
        <div className="mb-10  ">
          <h2 className="text-3xl">Backend Course</h2>
          <button
            onClick={handleClick}
            className="text-black font-semibold bg-yellow-500 mt-5 rounded p-2"
          >
            See More
          </button>
        </div>
        <div className="mb-10 ">
          <h2 className="text-3xl">Full Stack Development</h2>
          <button
            onClick={handleClick}
            className="text-black font-semibold bg-yellow-500 mt-5 rounded p-2"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Courses;
