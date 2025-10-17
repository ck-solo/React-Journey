import { Route, Routes,  } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Courses from '../components/Courses'
import Contact from '../components/Contact'
import CoursesDetails from '../components/CoursesDetails'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/coursesdetails" element={<CoursesDetails />} />

        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </div>
  )
}

export default MainRoutes