import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
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
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ state });

const mapDispatchToProps = { ...actions };

//@ts-ignore

export default connect(mapStateToProps, mapDispatchToProps)(App);
