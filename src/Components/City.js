import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as weatherActions from "../Actions";
class City extends Component {
  handleCityNameSearch = async (e) => {
    let { weatherActions } = this.props;
    let { value } = e.target;
    if (value !== "") {
      await weatherActions.getWeatherByCity(value);
    }
  };
  render() {
    return (
      <div className="main-container">
        <h1>Weather</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Enter the City Name</h3>
              </td>
              <td>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="search"
                  placeholder="Enter the city to search"
                  onChange={this.handleCityNameSearch}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapState = (state) => {
  const { weatherInfo } = state;
  return {
    weatherInfo,
  };
};

const mapDispatch = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
  };
};
export default connect(mapState, mapDispatch)(City);
