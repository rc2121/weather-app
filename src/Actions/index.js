import * as types from '../Constants';
import * as services from '../Service';

export const getWeatherByCity = (city) => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_WEATHER });
        return services.getWeatherByCity(city).then(resp => {
            if (resp.status === 200) {
                dispatch({
                    type: types.GET_WEATHER_SUCCESS,
                    weatherInfo: resp.data
                })
            }
        }).catch(err => {
            if (err.response) {
                dispatch({
                    type: types.GET_WEATHER_FAIL,
                    error: err.response.data
                })
            }
        })
    }
};