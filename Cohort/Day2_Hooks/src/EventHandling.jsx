import React from "react";

const EventHandling = () => {
  const handleClick = () => {
    alert("Clicked");
  };

   

  return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          alert("I am params");
        }}
      >
        Click param
      </button>
    </div>
  );
};

export default EventHandling;
