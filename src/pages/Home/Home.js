import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeImage from '../../Assets/images/BannerHome.png';
import '../../Style/MainHome.css'




function Home(){
    return (
        <section>
            <div className='Main'>
                 <Banner image={HomeImage} alt ='BannerHome' h1="Chez vous, partout et ailleurs"/>
            </div>
        </section>
    );
};

export default Home;


