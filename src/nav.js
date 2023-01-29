import { Link, NavLink } from "react-router-dom";
import './style.css';
function nav() {



    return (
        <>
            <div className="topnav">
                {/* <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li> */}

                {/* we can npt apply style on link tag so we use navlink  */}
                <span><NavLink className="nav-link" to="/">Home</NavLink></span>
                <span><NavLink className="nav-link" to="/about">About</NavLink></span>
                <span><NavLink className="nav-link" to="/contact">Contact</NavLink></span>
                <span><NavLink className="nav-link" to="/getdata/abc/123">Getdata</NavLink></span>
                <span><NavLink className="nav-link" to="/searchparm">search param</NavLink></span>
            </div>
        </>
    )
}
export default nav;