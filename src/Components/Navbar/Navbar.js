import './../../Global.css';
import './Navbar.css';
import { useState } from 'react';
import { Route,Link } from 'react-router-dom';
import Menu from './../../Assets/Images/Icons/menu.ico';
import Close from './../../Assets/Images/Icons/close.ico';
import resume from './../../Assets/Other/Resume_Aravind.pdf';
import logo from "./../../Assets/Images/Icons/logo.png"
function Navbar() {
  const [navBarDropdownState, TogglenavBarDropdownState] = useState(false);
  var dropdownToggle = () => TogglenavBarDropdownState(!navBarDropdownState)

  return (
    <>
    
      <div className='navbar'>
      <Link reloadDocument to="/"><img id="logo" src={logo}></img></Link>
        <ul className="horizontalItems">
        <li className="nav-item"> <Link reloadDocument to="/">Home</Link> </li>
          <li className="nav-item"> <Link reloadDocument to="/about">About</Link> </li>
          <li className="nav-item"> <Link reloadDocument to="/blogs">Blog</Link> </li>
          <li className="nav-item"> <Link reloadDocument to="/gallery">Gallery</Link> </li>
          <li className="nav-item"><Link reloadDocument to="/projects">Projects</Link></li>
          <li className="nav-item"><Link reloadDocument to="/contact">Contact</Link></li>
          <li><a href={resume}><button>Download CV</button></a></li>
        </ul>
        <button id="hamburger" onClick={dropdownToggle} className= {navBarDropdownState ? "showNavbarMenu" : "hideNavbarMenu"}><span /><span /><span /></button>
        {navBarDropdownState === true ?
          <ul className="navBarDropdownItems">
            <li> <Link reloadDocument to="/">Home</Link> </li>
            <li><Link reloadDocument to="/about" onClick={dropdownToggle}>About</Link></li>
            <li><Link reloadDocument to="/blogs" onClick={dropdownToggle}>Blog</Link></li>
            <li><Link reloadDocument to="/gallery" onClick={dropdownToggle}>Gallery</Link></li>
            <li><Link reloadDocument to="/projects" onClick={dropdownToggle}>Projects</Link></li>
          <li><Link reloadDocument to="/contact" onClick={dropdownToggle}>Contact</Link></li>
            <li><a href={resume}><button id="button">Download CV</button></a></li>
          </ul>
          : <></>}
      </div>
    </>
  );
}



export default Navbar;
