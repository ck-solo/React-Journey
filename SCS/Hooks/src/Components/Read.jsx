const Read = (props) => { 
  const users = props.users
  const setusers = props.setusers

  const renderdata = users.map((users, index)=>{
      return (
        <li key={index}>{users.name}</li>
      )
    })

  return (
    <div>
      <h1>Rendering</h1>   
      <ol>{renderdata}</ol> 
    </div>
  )
}

export default Read