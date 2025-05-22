import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos; 

    const {
      register,
      handleSubmit,
      reset,
      formState :{errors},
    } = useForm();


  const submitHandler = (data) => {

    console.log(data)
    data.isCompleted = false;
    data.id= nanoid()
    console.log(data)


    const copytodos = [...todos];
    copytodos.push(data)
    settodos(copytodos)

    toast.success("Todo-Created") // toastify is used for pop up message

    reset();

 
  };
 
  return (
    <div className="w-[50%] p-10">
      <h1 className="mb-10 text-4xl font-thin">Set <span className="text-red-400">Reminders</span>  for <br /> tasks</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
        {...register("title",{
          required: "tile can not be empty",
        })}
        className="border-b w-full text-2xl font-thin "
           type="text"
          placeholder="title"
        />

        {/* {errors && errors.title && errors.title.message &&<small className="text-red-800" >{errors.title.message}</small>} */}

         <small className="text-red-800" >{errors?.title?.message} </small>

        <br />
        <br />
        <button className="text-xl px-10 py-2 border rounded">Create Todo </button>
      </form>
    </div>
  );
};

export default Create;