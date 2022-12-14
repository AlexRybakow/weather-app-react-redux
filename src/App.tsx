import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import * as utils from './utils';
import * as actions from './redux/actions';
import Home from './components/Home/Home';
import WeatherDetails from './pages/WeatherDetailsPage';
import './App.css';

interface AppProps {
  deleteCityFromQueue: () => string;
  addErrorMessage: (message: string) => string;
  clearErrorMessage: () => string;
  cityError: () => string;
  cityLoaded: (city: React.ReactNode) => string;
  cityRequest: () => string;
  state: any;
}

const Welcome = () => {
  return (
    <div className="welcome">
      <h2>Weather App React Redux task</h2>
      <div className="button">
        <Link to="/">
          <Button variant="contained" color="success">Home page</Button>
        </Link>
      </div>
    </div>
  );
};

const App = ({
  deleteCityFromQueue,
  addErrorMessage,
  clearErrorMessage,
  cityError,
  cityLoaded,
  cityRequest,
  state,
}: AppProps) => {
  const { apiKey, citiesArray } = state;
  const { getWeatherByCityName, WeatherData, saveToLocalStorage } = utils;

  useEffect(() => {
    if (citiesArray.length > 0) {
      cityRequest();
      getWeatherByCityName(citiesArray[0], apiKey)
        .then((res) => {
          cityLoaded(WeatherData(res.data));
          clearErrorMessage();
        })
        .catch((err) => {
          cityError();
          addErrorMessage(err.message);
        });
      deleteCityFromQueue();
    }
  });

  useEffect(() => {
    saveToLocalStorage(state);
  });

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<WeatherDetails />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ state });

const mapDispatchToProps = { ...actions };

//@ts-ignore

export default connect(mapStateToProps, mapDispatchToProps)(App);
