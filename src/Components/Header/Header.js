import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logoHeader from '../../Assets/images/Logo_header.png';
import '../Header/Header.css';

function Header() {
    const location = useLocation();

    return (
        <div className='header'>
            <img src={logoHeader} className="Kasa" alt="Logo de Kasa" />
            <nav>
                <ul>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        <li>Accueil</li>
                    </Link>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                        <li>A Propos</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
