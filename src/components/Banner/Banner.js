import React from 'react';
import './Banner.css'; 
import HomeImage from '../Assets/images/HomeImage.png';

const Banner = ({ text }) => {
    return (
        <div className='Banner'>
            <img src={HomeImage} alt="Home" className='Banner-image'/> 
            <p>{text}</p>
            <div className='Banner-show'></div> 
        </div>
    );
};

export default Banner;


