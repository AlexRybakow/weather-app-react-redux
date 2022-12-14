import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { cityDelete } from '../../redux/actions';
import CityCard from '../../components/CityCard/CityCard';

type CityType = {
  city: string;
  temp: number;
  icon: string;
  humidity: number;
  pressure: number;
  wind: number;
};

interface CityProps {
  city: CityType;
  i: number;
  cityDelete: (i: number) => string;
}

const CityListItem = ({ city, i, cityDelete }: CityProps) => {
  const [loading, setLoading] = useState(true);
  const deleteCity = () => cityDelete(i);

  useEffect(() => {
    if (city && JSON.stringify(city) !== '{}') {
      setLoading(false);
    } else setLoading(true);
  }, [city]);

  return <CityCard city={city} loading={loading} deleteCity={deleteCity} />;
};

//@ts-ignore
export default connect(null, { cityDelete })(CityListItem);
