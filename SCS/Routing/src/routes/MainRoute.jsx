    import { Route, Routes } from "react-router-dom"
    import Home from "../components/HomePage"
    import About from "../components/AboutPage"
    import Product from "../components/ProductPage" 
    import Contact from "../components/ContactPage"
    import ProductDetails from "../components/ProductDetails"
    import Service from "../components/Service"
import ServiceDetail from "../components/ServiceDetail"
import ServiceUpdates from "../components/ServiceUpdates"

    const Mainroutes = () => {
    return (
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/product" element={<Product />} /> 
            <Route path="/product/detail" element={<ProductDetails />} /> 

             <Route path="/service"element={<Service />}>
             <Route path="/service/detail" element={<ServiceDetail />}/>
             <Route path="/service/updates"element={<ServiceUpdates />} />
             </Route>


            <Route path="/contact" element={<Contact />} /> 
        </Routes>
        
    )
    }

    export default Mainroutes