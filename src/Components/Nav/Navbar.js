import './../../Global.css';
import './Navbar.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
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
          <li className="nav-item"><a href="#About">About Me</a> </li>
          <li className="nav-item"><a href="#Skills">Skills</a></li>
          <li className="nav-item"><a href="#Projects">Projects</a></li>
          <li><a href={resume}><button>Download CV</button></a></li>
        </ul>
        <button className="dropdown" onClick={dropdownToggle}><img src={dropdownState ? Close : Menu} alt='Hamburger' /></button>
        {dropdownState === true ?
          <ul className="dropdownItems">
            <li><a href="#About" onClick={dropdownToggle}>About Me</a></li>
            <li><a href="#Skills" onClick={dropdownToggle}>Skills</a></li>
            <li><a href="#Projects" onClick={dropdownToggle}>Projects</a></li>
            <li><a href={resume}><button>Download CV</button></a></li>
          </ul>
          : <></>}
      </div>
    </>
  );
}



export default Navbar;
