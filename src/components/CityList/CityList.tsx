import React from 'react';
import './CityList.scss';
import CityCard from '../../pages/CityCardPage';

interface CitiesProps {
  cities: any[];
}

const CityList = ({ cities }: CitiesProps) => {
  return (
    <div className="city-list">
      {cities.map((el, i) => (
        <CityCard city={el} key={i} i={i} />
      ))}
    </div>
  );
};

export default CityList;
