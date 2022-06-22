import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5';

const baseService = axios.create({
    baseURL: url
});

export default baseService;