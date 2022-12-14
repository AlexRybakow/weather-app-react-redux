const initStore = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
  cities: [],
  citiesArray: [],
  loading: true,
  isGeoPosAvailable: null,
  errorMessage: null,
};

export default initStore;
