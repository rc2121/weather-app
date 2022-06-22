import * as types from '../Constants';
import { initState } from './initialState';

export default (state = initState.weatherInfo, action) => {
    switch (action.type) {
      case types.GET_WEATHER_SUCCESS:
        return {
            ...state,
            weather: action.weatherInfo,
            loadingWeather: false,
            error: ""
        };
      case types.GET_WEATHER_FAIL:
        return Object.assign({}, state, { error: action.error, loadingWeather: false });

      case types.LOADING_WEATHER:
        return {
            ...state,
            loadingWeather: true
        };

      default:
        return state;
    }
}