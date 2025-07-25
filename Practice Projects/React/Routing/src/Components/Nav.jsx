import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="p-10 flex justify-center gap-10">
        <NavLink className={(e) => e.isActive ? "text-orange-700" :"" } to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-orange-700" :"" }  to="/menu">Menu</NavLink>
        <NavLink className={(e) => e.isActive ? "text-orange-700" :"" } to="/product">Product</NavLink>
        <NavLink className={(e) => e.isActive ? "text-orange-700" :"" } to="/service">Service</NavLink>
    </div>
  )
}

export default Nav