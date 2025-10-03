import React from 'react'

const Map = () => {
    
    const profile =[
        {
            name: 'Shriyasmh',
            age: 25,
            gender: 'Male',
        },
        {
            name: 'Rahul',
            age: 25,
            gender: 'Male',
        },{
            name: 'Ruhani',
            age: 295,
            gender: 'Female',
        }
        
    ]
    
    const updateProfile = profile.map((profile, index)=>{
        return(<>
         
        <li key={index}>
            <span>{profile.name} </span> <br />
            <span>{profile.age} </span>
            <span>{profile.gender} </span>
        </li>
       </>
        );
    })
  return (
    <div>
        <ul>
            {updateProfile}
        </ul>
    </div>
  )
}

export default Map