HOC => Stand for Higher order component It is a function that take a component as an argument and return a new component.
We use HOC to access any method or property of the component that we want to use in the parent component.

Wrapper Component is the parent component of the App component.

createContecxt is used by importing createcontext from react.
then call it with the name of the context.
 export const createtodo  = createContext(null)

  const Wrapper = (props) => { 
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
  ]);
   return(
    <createtodo.Provider value={[todos, settodos]}>
      {props.children}
    </createtodo.Provider>
   )
    
    
 }

    and where you want to use the context you can use it like this
     const [todos, settodos] = useContext(createtodo);

