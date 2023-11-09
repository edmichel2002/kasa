import React from 'react';
import LogementList from '../../Data/Data.json';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import HomeImage from '../../Assets/images/BannerHome.png';
import '../../Style/MainHome.css';

const Home = () => (
  <section>
    <div className='Main'>
      <Banner image={HomeImage} alt='BannerHome' h1="Chez vous, partout et ailleurs" />
      <div className='locations'>
        {LogementList.map(({ id, title, cover }) => (
          <Card key={id} title={title} cover={cover} link={id} />
        ))}
      </div>
    </div>
  </section>
);

export default Home;
