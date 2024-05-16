import logo from "../assets/logo.jpg";
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="one">
        <img  className="logoimg" src={logo} alt="logo"/>
        </div>

        <div className="two">
        <ul className="two-items">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/update/:id">Update</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        </div>

     
      
    </div>
  )
}

export default Navbar
