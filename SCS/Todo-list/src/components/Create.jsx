import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
  const [title, settitles] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    settodos([...todos, newtodo]);

    settitles("");
  };

  return (
    <div className="w-[50%] p-10">
      <h1 className="mb-10 text-4xl font-thin">Set <span className="text-red-400">Reminders</span>  for <br /> tasks</h1>
      <form onSubmit={submitHandler}>
        <input className="border-b w-full text-2xl font-thin "
          value={title}
          onChange={(e) => settitles(e.target.value)}
          type="text"
          placeholder="Titles"
        />
        <br />
        <br />
        <button className="text-xl px-10 py-2 border rounded">Create Todo </button>
      </form>
    </div>
  );
};

export default Create;