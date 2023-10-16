import React from 'react';
import {Link} from 'react-router-dom'
import Logo_header from '../Assets/images/Logo_header.png';


const Header = () => {
    return (
        <div>
            <header>
            <img src={Logo_header} className="Kasa" alt="logo" />
                <nav>
                    <ul>
                        <li><Link to='/home'>Accueil</Link></li>
                        <li><Link to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;