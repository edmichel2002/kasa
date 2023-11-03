import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom"
import logo_header from '../../Assets/images/Logo_header.png';
import '../Header/Header.css';





function Header() {
    const location = useLocation();

    return (
        <div className='header'>
            <img src={logo_header} className="Kasa" alt="logo de Kasa" />
            <nav>
                <ul>
                    <Link to="/" className={location.pathname === "/" ? "active" : null}>
                        <li>Accueil</li>
                    </Link>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : null}>
                        <li>A Propos</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;