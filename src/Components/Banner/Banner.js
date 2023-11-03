import React from 'react';
import '../Banner/Banner.css';

const Banner = props => {

    return (
        <div className='Background'>
            <img src={props.image} alt='Home'/>
            <h1>{props.text} Chez vous, partout et ailleurs</h1>
            
        </div>
    );
};

export default Banner;