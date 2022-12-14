import React from 'react';
import './Home.scss';
import InputPage from '../../pages/InputPage';
import CityListPage from '../../pages/CityListPage';

const Home = () => (
  <div className="container">
    <InputPage />
    <CityListPage />
  </div>
);

export default Home;
