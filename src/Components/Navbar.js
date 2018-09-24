import React from 'react';
import classes from './Navbar.css';
import logo from '../Images/crank.png';

const Navbar = (props) => {

  return(
    <nav className={ classes.Navbar }>
        <ul>
            {/* <li className={ classes.NavbarTitle }>
                Mashing
            </li> */}
            <li className={ classes.NavbarLogo }>
                <img className={ classes.NavbarLogo }src={ logo } />
            </li>
            <li className={ classes.NavbarTitle }>
                Mashing the Data
            </li>
        </ul>
    </nav>     
  )
}; 

export default Navbar;
	