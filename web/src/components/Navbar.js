import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/tasklist">Task List</NavLink></li>
            </ul>
        </nav>
    );
}    

export default Navbar;