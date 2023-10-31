import React from "react";
import {Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <Link to="/">
                    <li>Accueil</li>
                </Link>
                <Link to="/about">
                    <li>A Propos</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation;