import React from 'react';
import HomeImage from '../../Assets/images/BannerHome.png';


const Banner = props => {
    return (
        <div className='banner'>
            <img src={HomeImage} alt='Banner'/>
            <h1>chez vous, partout et ailleurs"</h1>
            
        </div>
    );
};

export default Banner;

