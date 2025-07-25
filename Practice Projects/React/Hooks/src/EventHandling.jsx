// Day 71 Hooks work
const App = () => {

  // non parametrized function (not passign arguments)
  const handleClick =()=>{
    alert("Clicked")
  }
  // parametrized function(Pass arguments)

  const handlePramClick =(msg)=>{
    alert(msg)
  }

  return (
    <>
    <div>App</div>
    <button onClick={handleClick}>Click me</button>
    <button onClick={()=> handlePramClick("I am param function")}>Click (param)</button>
    </>
    
  )
}

export default App