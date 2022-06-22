import baseService from './baseService';

export const getWeatherByCity = (city) => {
    return baseService.get(`/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
};
  