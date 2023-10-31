import React from "react";
import {Link } from "react-router-dom";
import logo_header from '../../Assets/images/Logo_header.png';
import '../Header/Header.css';



function Header() {
    return (
        <div className='header'>
            <img src={logo_header} className="Kasa" alt="logo de Kasa" />
            <nav>
                <ul>
                <Link to="/" className="activeLink">
                    <li>Accueil</li>
                </Link>
                <Link to="/about" className="activeLink">
                    <li>A Propos</li>
                </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;