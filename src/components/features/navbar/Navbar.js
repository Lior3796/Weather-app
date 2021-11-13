import React from 'react'
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { Button } from '../button/Button';

export const Navbar = () => {

    return (
        <nav className="navbar-container">
            <ToggleTheme />
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link to="/Lior-Solomon-31.10.2021"> Weather </Link>
                </li>
                <li className='navbar-li'>
                    <Link to="/Lior-Solomon-31.10.2021/favorites"> Favorites </Link>
                </li>
                <Button />
            </ul>


        </nav>
    )
}
