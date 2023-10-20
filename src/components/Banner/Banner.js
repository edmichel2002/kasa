import React from 'react';
/*import HomeImage from '../../Assets/images/BannerHome.png';*/

const Banner = props => {
    console.log(props)
    let img = props.img;
    return (
        <div className='banner'>
            <img src= {img} alt='Banner'/>
            <h1>chez vous, partout et ailleurs"</h1>
            
        </div>
    );
};

export default Banner;

