import React from 'react'
import '../../styles/style.css';
import { ADD_FAVORITE } from '../../../redux/actions/types';
import { Link } from 'react-router-dom';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../button/Button';

export const Navbar = () => {
    return (
        <nav>
            <ToggleTheme />
            <ul>
                <li>
                    <Link to="/Weather"> Weather </Link>
                </li>
                <li>
                    <Link to="/favorites"> Favorites </Link>
                </li>
                <Button />
            </ul>


        </nav>
    )
}
