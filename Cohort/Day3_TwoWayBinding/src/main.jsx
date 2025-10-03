import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Map from './Map.jsx'
import Change from './Change.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */} 


    {/* ----------------------------- */}
    <h1>Rendering JSON</h1>
    <Map />
    {/* ----------------------------- */}
    <h1>Change Name</h1>
    <Change />
  </StrictMode>,
)
