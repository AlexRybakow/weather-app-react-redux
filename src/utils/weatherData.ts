/* eslint-disable prefer-const */

interface WeatherDataProps {
  name: string;
  main: {
    temp: number | any;
    humidity: number;
    pressure: number;
  };
  weather: {
    0: {
      main: number;
      icon: string;
    };
  };
  wind: {
    speed: number;
  };
}

export const WeatherData = (weather: WeatherDataProps) => {
  let {
    name,
    main: { temp, humidity, pressure },
    weather: {
      0: { main, icon },
    },
    wind: { speed },
  } = weather;

  temp = (temp - 273.15).toFixed(0);
  icon = icon.substr(0, 2);

  return {
    city: name,
    temp,
    icon,
    main,
    pressure,
    humidity,
    wind: speed,
  };
};
