import React from 'react';
import classes from './Navbar.css';
import logo from '../Images/crank.png';

const Navbar = (props) => {

    return(
        <nav className={ classes.Navbar }>
            <ul>
                <li className={ classes.NavbarTitle }>
                    Data
                </li>
                <li className={ classes.NavbarLogo }>
                    <img src={ logo } />
                </li>
                <li className={ classes.NavbarTitle }>
                    Masher
                </li>
            </ul>
        </nav>     
    )
}; 

export default Navbar;
	