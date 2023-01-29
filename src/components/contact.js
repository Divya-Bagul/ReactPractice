import { Link,NavLink, Outlet } from "react-router-dom";
function Contact() {
    

    
    return(
    <div>
         contact  page
         <span><NavLink className="nav-link" to="/getdata/abc/123">Getdata</NavLink></span>
         <span><NavLink className="nav-link" to="nestedroute">Nested Route</NavLink></span>
         <Outlet/>
    </div>
    )
}
export default Contact;