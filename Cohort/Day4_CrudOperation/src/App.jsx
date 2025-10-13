import React, { useState } from "react";

import Write from "./Components/Write";
import Read from "./Components/Read";

const App = () => {

  return (
    <div className="flex border-2 border-white rounded-md m-5">
      <Write   />
      <Read   />
      
    </div>
  );
};

export default App;
