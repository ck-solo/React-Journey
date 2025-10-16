import { Route, Routes,  } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Courses from '../components/Courses'
import Contact from '../components/Contact'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </div>
  )
}

export default MainRoutes