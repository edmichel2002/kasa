import React from 'react';
import Logo_footer from '../../Assets/images/Logo_footer.png';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <img src={Logo_footer} className="Kasa_footer" alt="logo" />
                <h5>© 2020 Kasa. All rights reserved</h5>
            </footer>
        </div>
    );
};

export default Footer;