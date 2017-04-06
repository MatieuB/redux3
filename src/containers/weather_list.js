import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
  displayWeather(cityData){
    const temps = cityData.list.map(weather => { return (weather.main.temp - 273.15)})
    console.log('temps',temps);
    const pressures = cityData.list.map(weather => { return weather.main.pressure});
    const humidities = cityData.list.map(weather => { return weather.main.humidity});
    const {lon, lat} = cityData.city.coord;

    console.log('presurres',pressures);
    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat}/> </td>
        <td> <Chart data={temps} color="red" units="C"/> </td>
        <td> <Chart data={pressures} color="yellow" units="hPa"/> </td>
        <td> <Chart data={humidities} color="cyan" units="%"/> </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (HPA)</th>
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
