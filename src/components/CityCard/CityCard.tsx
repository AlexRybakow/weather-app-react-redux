import React from 'react';
import './CityCard.scss';
import deleteIcon from '../../assets/delete.svg';
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
  deleteCity: () => string;
}

const CityCard = ({ city, loading, deleteCity }: CityCardProps) => {
  return (
    <div className="item">
      {loading ? (
        <div className="spinner">
          <div className="spinner-block">
            <div />
          </div>
        </div>
      ) : (
        <div className="item-content">
          <div className="item-header">
            <div className="item-header-city">{city.city}</div>
            <img className="del-icon" src={deleteIcon} alt="" onClick={deleteCity} />
          </div>
          <div className="item-body">
            <div className="item-body-left">
              <div className="item-temperature">{city.temp}°</div>
              <WeatherIcon iconNumber={city.icon} />
              <Link to="/details">
                <Button variant="contained">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityCard;
