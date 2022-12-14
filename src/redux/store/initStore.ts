const initStore = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
  cities: [],
  citiesArray: [],
  loading: true,
  errorMessage: null,
};

export default initStore;
