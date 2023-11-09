import React from 'react';
import './Banner.css'; 

const Banner = ({ image, namealt, h1 }) => (
  <div className='Background'>
    <img src={image} className={namealt} alt={namealt} />
    {h1 && <h1 className='words'>{h1}</h1>}
  </div>
);

export default Banner;
