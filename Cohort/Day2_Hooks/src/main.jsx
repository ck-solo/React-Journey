import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Event from './EventHandling.jsx'

createRoot(document.getElementById('root')).render(
   <>
    {/* <App />  */}
    <Event />
   </>
)
