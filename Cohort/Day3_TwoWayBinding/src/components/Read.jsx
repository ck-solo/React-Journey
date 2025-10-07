import { useState } from "react";
const Read = (props) => { 

  const users = props.users;
  const updateUser = users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ));

  return (
    <div>
      <h1>User Data</h1>
      <ol>{updateUser}</ol>
    </div>
  );
};

export default Read;
