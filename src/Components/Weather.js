import React, { Component } from 'react';
import { connect } from 'react-redux';
import spiner from '../assets/spinner.gif';
import '../App.css';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        }
    }
    componentDidUpdate(nextProps) {
        let { weatherInfo } = this.props;
        if (nextProps.weatherInfo.name !== weatherInfo.name) {
            this.setState({ weather: weatherInfo });
        }
    }
    render() {
        let { weather } = this.state;
        let { loadingWeather, error } = this.props;
        if (loadingWeather) {
            return <Spinner />
        } 
        return (
            <div>
                { (error && error.message !== "") 
                ? <h3>No City Found</h3> 
                :
                    weather.main && (<div className="city">
                        <h4 className="city-name">
                            <span>The Weather in {weather.name}:</span>
                        </h4>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;</sup>
                        </div>
                        <div className="info">
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

const Spinner = () => (
    <img
        src={spiner}
        style={{ width: '200px', margin: 'auto', display: 'block', backgroundColor:"aliceblue" }}
        alt="Loading..." />);

const mapState = (state) => {
    const { weatherInfo } = state;
    return {
        weatherInfo: weatherInfo.weather,
        loadingWeather: weatherInfo.loadingWeather,
        error: weatherInfo.error
    }
};
export default connect(mapState)(Weather);

