    import { Route, Routes } from "react-router-dom"
    import Home from "../components/HomePage"
    import About from "../components/AboutPage"
    import Product from "../components/ProductPage" 
    import Contact from "../components/ContactPage"
    import ProductDetails from "../components/ProductDetails"


    const Mainroutes = () => {
    return (
            <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/product" element={<Product />} /> 
            <Route path="/product/detail" element={<ProductDetails />} /> 
            <Route path="/contact" element={<Contact />} /> 
        </Routes>
        
    )
    }

    export default Mainroutes