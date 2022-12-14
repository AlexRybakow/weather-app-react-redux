import React from 'react';
import './CityCardDetails.scss';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

type CityType = {
  city: string;
  temp: number;
  icon: string;
  humidity: number;
  pressure: number;
  wind: number;
};

interface CityCardProps {
  city: CityType;
  loading: boolean;
}

const CityCardDetails = ({ city, loading }: CityCardProps) => {
  return (
    <div className="item">
      {loading ? (
        <div className="spinner">
          <div className="spinner-block">
            <div />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="header">
            <div className="header-city">{city.city}</div>
          </div>
          <div className="body">
            <div className="body-left">
              <div className="temperature">{city.temp}°</div>
              <WeatherIcon iconNumber={city.icon} />
            </div>
            <div className="details-block">
              <div className="item-info">Pressure: {city.pressure} hPA</div>
              <div className="item-info">Wind: {city.wind} m/s</div>
              <div className="item-info">Humidity: {city.humidity}%</div>
            </div>
          </div>
          <Link to="/">
            <Button variant="contained">Back</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CityCardDetails;
