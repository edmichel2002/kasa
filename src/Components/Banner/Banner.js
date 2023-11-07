import React from 'react';
import '../Banner/Banner.css';

const Banner = props => {

    return (
        <div className='Background'>
            <img src={props.image} className={props.namealt} alt={props.namealt} />
            {props.h1 && <h1>{props.h1}</h1>}
            
        </div>
    );
};

export default Banner;