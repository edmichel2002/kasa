import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/NoPage.css';

const NoPage = () => (
  <div className="mainhome">
    <div className='code'>
      <h1 className='Nopage'>404</h1>
      <p className='Error'>Oups! La page que vous demandez n'existe pas.</p>
    </div>
    <div className='link'>
      <Link to="/">
        <p className="Accueil">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  </div>
);

export default NoPage;
