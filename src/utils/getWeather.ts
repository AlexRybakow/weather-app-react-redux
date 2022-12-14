import axios from 'axios';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherByCityName = (cityName: string, APIkey: string) =>
  axios.get(apiUrl, {
    params: {
      q: cityName,
      appid: APIkey,
    },
  });

export { getWeatherByCityName };
