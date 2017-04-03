import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  displayWeather(cityData){
    const temps = cityData.list.map(weather => { return (weather.main.temp - 273.15)})
    console.log('temps',temps);
    const pressures = cityData.list.map(weather => { return weather.main.pressure});
    const humidities = cityData.list.map(weather => { return weather.main.humidity});

    console.log('presurres',pressures);
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="red"/>
        </td>
        <td>
          <Chart data={pressures} color="yellow"/>
        </td>
        <td>
          <Chart data={humidities} color="cyan"/>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.displayWeather)}
        </tbody>
      </table>
    )
  }
}
function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
