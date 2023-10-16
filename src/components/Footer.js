import React from 'react';
import Logo_footer from '../Assets/images/Logo_footer.png';


const Footer = () => {
    return (
        <div>
            <img src={Logo_footer} className="Kasa" alt="logo" />
            <h5>© 2020 Kasa. All rights reserved</h5>
        </div>
    );
};

export default Footer;