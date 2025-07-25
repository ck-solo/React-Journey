Basic Routing 
1. First have to use BrowserRouter in main.jsx file and before use import it.

<!-- Install npm install react-router-dom to use the routing -->

2. then after in app.jsx import Routes and Route and use them by writing all the components inside the routes 
the syntax to write <Routes>
<Route path="/" element={<Home />} />
</Routes>

3. If making navbar don't use <a> tag because it refresh the page so instead of <a> use <Link> before using import it and the syntax to write 
<Link to="/">Home<Link>

<!-- After that link that to app by importing and above the routes -->
 
+++++++++++++++++++++++++++++++

React Router Deep Dive

4. If we want to Give color aur effect to anchor tags we use NavLink that firstly we have to import from react
5. the main use of NavLink is it gave use classname and callback function  we can give us any classname and function. the syntax to write 
<NavLink className={(e) => e.isActive ? "text-orange-700" :"" } to="/">Home</NavLink>

6. After that if we want to go inside any component like in product we want when user click on see details 
<div > 
        <h2>Product 1</h2>
        <button>See Details</button>
 </div>
it take him to another page like its child component then we need to make another file with name
then after that we have to update in reactroutes.jsx
like firstly we need to import that file path
then in route used syntax 
 <Route path="/product/detail" element={<ProductDetail />} />
then after that import the useNavigate in product 
import { useNavigate} from "react-router-dom"

then after import save the useNavigate() in variable and call the whole path inside the function like the syntax has given
  const Product = () => {
    const navigate = useNavigate()

  const NavigateHandler = () => {
    navigate("/product/detail")

  }

7. Go Back
just simply import useNavigate and then store the useNavigate() inside a varible name navigate then inside the button call the variable as the below syntax
we can also use navigate(/product) to go back
<button onClick={()=> navigate(-1)}>Go Back</button>  


++++++++Dynamic Routing +++++++++++++++++++++++++
In ReactRouting file we use /:name for dynamically call the route like the syntax below
        <Route path="/product/detail/:name" element={<ProductDetail />} />  
  After that we should updat the product file
  const NavigateHandler = (name) => {
    navigate(`/product/detail/${name}`)

  }
  and after that button syntax to 
        <button onClick={() => NavigateHandler("Product 1")} className="text-xl p-4 font-bold bg-red-700 rounded text-black">See Details</button> 

  but the above all code only show data in url not on page and after that we should use useparams() import the useparams and store it into a varible and then call it on the place of real name like on the place of title
  {product 1} {pramas.name}

  this all work open the child on another page and if we want to open on the same page you should make the folder inside the route like the syntax below
   <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetail />} />  
    </Route>
By using this code you can clearly look into the url it is working but it not displaying the servicedetails only url update or change to detail and in the parent first use hr then use outlet then your child is starting visbile on the same page
<hr className='my-10' />
  <Outlet/>

We can also use many more button in the same route to open like in service details and service updates 
as the below syntax we can navigate it to anywhere by just writing the route location like "/about" in navigate take us to about and as many more. 
 <button onClick={()=> navigate(-1)}  className="text-lg p-2 font-bold bg-blue-700 rounded text-black">Go Back</button> 


