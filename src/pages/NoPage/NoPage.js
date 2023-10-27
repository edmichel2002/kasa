import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NoPage.css';

function NoPage() {
    return (
        <div className="NoPage">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className='link'>
                <Link to="/">
                    <p className="Accueil">Retourner sur la page d’accueil</p>
                </Link>
            </div>
        </div>
    );
};

export default NoPage;