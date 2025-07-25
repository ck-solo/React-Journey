HOC => it stand for higher order components. 
in higer order components the function param a components and return the components 

createContext se context banate hai aur use ek variable me save krte hai then save krne ke baad use usi time export krna hota hai 
const Wrapper = (props) => {
   const [todos, settodos] = useState([
    { id: 1, title: "First Todos", isCompleted: false }, yaha wo data likhte hai jo pure code me travel karana hota hai
  ]);

fir jis bhi jagah us data ko import krna hota hai waha pr likhte hai useContext(nameofcontext)
  const [todos, settodos] = useContext(todocontext); ye code likh kr import krte hai 

