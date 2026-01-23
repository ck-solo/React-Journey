import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Map from './Map.jsx'
import Change from './Change.jsx'
import Form from './Form.jsx'
import Registration from './Registration.jsx'
import UseStateConcept from './UseStateConcept.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */} 


    {/* ----------------------------- */}
    {/* <h1>Rendering JSON</h1> */}
    {/* <Map /> */}

    {/* ----------------------------- */}
    {/* <h1>Change Name</h1> */}
    {/* <Change /> */}

    {/* ------------------------------ */}
    
    {/* <Form /> */}

    {/* ----------------------------- */}

    {/* <Registration /> */}

    <UseStateConcept />
  </>,
)
