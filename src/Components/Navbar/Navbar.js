import './../../Global.css';
import './Navbar.css';
import { useState } from 'react';
import { Route,Link } from 'react-router-dom';
import Menu from './../../Assets/Images/Icons/menu.ico';
import Close from './../../Assets/Images/Icons/close.ico';
import resume from './../../Assets/Other/Resume_Aravind.pdf';
function Navbar() {
  const [dropdownState, ToggleDropdownState] = useState(false);
  var dropdownToggle = () => ToggleDropdownState(!dropdownState)

  return (
    <>
    
      <div className='navbar'>
        <ul className="horizontalItems">
        <li className="nav-item"> <Link reloadDocument to="/">Home</Link> </li>
          <li className="nav-item"> <Link reloadDocument to="/about">About Me</Link> </li>
          <li className="nav-item"> <Link reloadDocument to="/blogs">Blog</Link> </li>
          <li className="nav-item"><Link reloadDocument to="/projects">Projects</Link></li>
          <li className="nav-item"><Link reloadDocument to="/contact">Contact</Link></li>
          <li><a href={resume}><button>Download CV</button></a></li>
        </ul>
        <button className="dropdown" onClick={dropdownToggle}><img src={dropdownState ? Close : Menu} alt='Hamburger' /></button>
        {dropdownState === true ?
          <ul className="dropdownItems">
            <li> <Link reloadDocument to="/">Home</Link> </li>
            <li><Link reloadDocument to="/about" onClick={dropdownToggle}>About Me</Link></li>
            <li><Link reloadDocument to="/blogs" onClick={dropdownToggle}>Blog</Link></li>
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
