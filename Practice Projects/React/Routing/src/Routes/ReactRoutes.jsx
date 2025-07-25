import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Menu from "../Components/Menu"
import Product from "../Components/Product"
import Service from "../Components/Service" 
import ProductDetail from "../Components/ProductDetail"
import ServiceDetail from "../Components/ServiceDetail"
import ServiceUpdates from "../Components/ServiceUpdates" 

 
 
const ReactRoutes = () => {
  return (
     
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/menu" element={<Menu />} />  
        <Route path="/product/" element={<Product />} />  
        <Route path="/product/detail/:name" element={<ProductDetail />} />  
        <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetail />} />  
        <Route path="/service/update" element={<ServiceUpdates />} />  
        </Route>
      </Routes>
    
  )
}

export default ReactRoutes